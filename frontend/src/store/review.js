import { csrfFetch } from "./csrf";

const LOAD = "reviews/LOAD";
const CREATE = "reviews/CREATE";

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
    default:
      return state;
  }
}

export default reviewReducer;
