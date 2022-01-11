import { csrfFetch } from "./csrf";

//
const LOAD = "wineries/LOAD";
const ADD = "wineries/ADD";
const REMOVE = "/api/wineries/delete";
const LOAD_ONE = "/api/wineries/:id";

const load = (wineries) => {
  return {
    type: LOAD,
    wineries,
  };
};

const addOneWinery = (winery) => {
  return {
    type: ADD,
    winery,
  };
};

export const getWineries = () => async (dispatch) => {
  const response = await fetch("/api/wineries");

  if (response.ok) {
    const data = await response.json();
    dispatch(load(data));
  }
};

export const getOneWinery = (id) => async (dispatch) => {
  const response = await fetch(`api/wineries/${id}`);
  const winery = await response.json();
  dispatch(addOneWinery(winery));
};

export const addWinery = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/wineries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const winery = await response.json();
  dispatch(addOneWinery(winery));
};

const initialState = {};
function wineryReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD:
      const allWineries = {};
      action.wineries.forEach((winery) => {
        allWineries[winery.id] = winery;
      });
      return { ...allWineries, ...state };
    case ADD:
      if (!state[action.winery.id]) {
        const newState = {
          ...state,
          [action.winery.id]: action.winery,
        };
        const wineryList = newState.wineries.map((id) => newState[id]);
        wineryList.push(action.winery);
        newState.wineries = wineryList;
      }
    default:
      return state;
  }
}

export default wineryReducer;
