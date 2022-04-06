import { csrfFetch } from "./csrf";

const SEARCH_VALUE = "user/SEARCH";

const search = (wineries) => {
  return {
    type: SEARCH_VALUE,
    wineries,
  };
};

export const searchVal =
  ({ location, date }) =>
  async (dispatch) => {
    const response = await csrfFetch("/api/wineries/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ location, date }),
    });
    const wineries = await response.json();
    dispatch(search(wineries));
    return wineries;
  };

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_VALUE:
      const allWineries = {};
      action.wineries.forEach((winery) => {
        allWineries[winery.id] = winery;
      });
      return { ...allWineries, ...state };
    default:
      return state;
  }
};

export default searchReducer;
