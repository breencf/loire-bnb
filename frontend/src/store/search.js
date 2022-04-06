import { csrfFetch } from "./csrf";

const SEARCH_VALUE = "user/SEARCH";

const search = (value) => {
  return {
    type: SEARCH_VALUE,
    value,
  };
};

export const searchVal = (value) => async (dispatch) => {
  const response = await csrfFetch("/api/wineries/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value }),
  });
  const data = await response.json();
  dispatch(search(data));
  return data;
};

const searchReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case SEARCH_VALUE:
      newState = { ...state };
      newState = action.value;
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
