import { csrfFetch } from "./csrf";

const LOAD = "reviews/LOAD";

const load = (reviews) => {
  return {
    type: LOAD,
    reviews,
  };
};

export const getReviews = (id) => async (dispatch) => {
  const response = await fetch(`/api/wineries/${id}/reviews`);
  if (response.ok) {
    const reviews = await response.json();
    dispatch(load(reviews));
  }
};

let initialState = {};
function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      const allReviews = {};
      action.reviews.forEach((review) => {
        allReviews[review.id] = review;
      });
      return { ...state, ...allReviews };
    default:
      return state;
  }
}

export default reviewReducer;
