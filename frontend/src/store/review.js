import { csrfFetch } from "./csrf";

const LOAD = "reviews/LOAD";
const CREATE = "reviews/CREATE";
const UPDATE = "reviews/UPDATE";
const DELETE = "reviews/DELETE"

const load = (reviews) => {
  return {
    type: LOAD,
    reviews,
  };
};

const create = (newReview) => {
  return {
    type: CREATE,
    newReview,
  };
};

const update = (updatedReview) => {
  return {
    type: UPDATE,
    updatedReview,
  };
};

const deleteReview = (id) => {
  return {
    type: DELETE,
    id
  }
}

export const getReviews = (id) => async (dispatch) => {
  const response = await fetch(`/api/wineries/${id}/reviews`);
  if (response.ok) {
    const reviews = await response.json();
    dispatch(load(reviews));
  }
};

export const createReview = (payload) => async (dispatch) => {
  const response = await csrfFetch(
    `/api/wineries/${payload.wineryId}/reviews`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );
  const newReview = await response.json();
  dispatch(create(newReview));
};

export const updateReview = (review) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${review.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });
  const updatedReview = await response.json();
  dispatch(update(updatedReview));
};

export const deleteOneReview = (id) => async dispatch => {
  const response = await csrfFetch(`/api/reviews/${id}`, {method: "DELETE"})
  if (response.ok) {
    const deleted = await response.json()
    dispatch(deleteReview(id))
  }
}

let initialState = {};
let newState;
function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      const allReviews = {};
      action.reviews.forEach((review) => {
        allReviews[review.id] = review;
      });
      return { ...state, ...allReviews };
    case CREATE:
      newState = { ...state };
      newState[action.newReview.id] = action.newReview;
      return newState;
    case UPDATE:
      newState = { ...state };
      newState[action.updatedReview.id] = action.updatedReview;
      return newState;
    case DELETE:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export default reviewReducer;
