import { csrfFetch } from "./csrf";


const LOAD = "wineries/LOAD";
const ADD = "wineries/ADD";
const UPDATE = "wineries/UPDATE";
const DELETE = "wineries/DELETE";
// const GET = "wineries/GET"

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

// const getWinery = winery => {
//   return {
//     type: GET,
//     winery
//   }
// }

const updateOneWinery = (winery) => {
  return {
    type: UPDATE,
    winery,
  };
};

const deleteOneWinery = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const getWineries = () => async (dispatch) => {
  const response = await fetch("/api/wineries");

  if (response.ok) {
    const data = await response.json();
    dispatch(load(data));
  }
};

// export const getOneWinery = (id) => async (dispatch) => {
//   const response = await fetch(`/api/wineries/${id}`);
//   const winery = await response.json();
//   dispatch(getWinery(winery));
// };

export const addWinery = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/wineries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const winery = await response.json();
  dispatch(addOneWinery(winery));
};

export const updateWinery = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/wineries/${payload.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const winery = await response.json();
  dispatch(updateOneWinery(winery));
};

export const deleteWinery = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/wineries/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    const deleted = await response.json();
    dispatch(deleteOneWinery(deleted));
  }
};

const initialState = {};
let newState;

function wineryReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      const allWineries = {};
      action.wineries.forEach((winery) => {
        allWineries[winery.id] = winery;
      });
      return { ...allWineries, ...state };
    case ADD:
      if (!state[action.winery.id]) {
        newState = {
          ...state,
          [action.winery.id]: action.winery,
        };
        const wineryList = newState.wineries?.map((id) => newState[id]);
        wineryList?.push(action.winery);
        newState.wineries = wineryList;
        return newState;
      };
    case UPDATE:
      newState = { ...state };
      newState.wineries[action.winery.id] = action.winery;
      return newState;
    case DELETE:
      newState = { ...state };
      delete newState.wineries[action.id];
      return newState;
    default:
      return state;
  }
}

export default wineryReducer;
