import { csrfFetch } from "./csrf";

const LOAD = "users/:id/tastings";
const BOOK = "wineries/:id/BOOK";
const DELETE = "tastings/:id/delete";
const UPDATE = "tastings/:id/update";
const LOADTIMES = "tastings/LOADTIMES"

const load = ({ tastings, userId }) => {
  return {
    type: LOAD,
    userId,
    tastings,
  };
};

const book = ({ tasting }) => {
  return {
    type: BOOK,
    tasting,
  };
};

const update = (tasting) => {
  return {
    type: UPDATE,
    tasting,
  };
};

const deleteOneTasting = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const loadDayTimes = (availableTimes) => {
  return {
    type:LOADTIMES,
    availableTimes
  }
}

export const loadTastings = (userId) => async (dispatch) => {
  console.log("loadtastings")
  const response = await fetch(`/api/users/${userId}/tastings`);
  if (response.ok) {
    const tastings = await response.json();
    dispatch(load({ tastings, userId }));
  }
};

export const loadTimes = ({date, id}) => async dispatch => {
  console.log("loadtimes")
  const response = await fetch(`/api/wineries/${id}/tastings/${date}`)
  if(response.ok) {
    const availableTimes = await response.json()
    dispatch(loadDayTimes(availableTimes))
  }
}


export const bookOneTasting =
  ({ userId, wineryId, date, time, numGuests }) =>
  async (dispatch) => {
    const response = await csrfFetch(`/api/wineries/${wineryId}/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, wineryId, date, numGuests, time }),
    });
    const tasting = await response.json();
    dispatch(book({ tasting }));
    return tasting;
  };

export const updateTasting = (tasting) => async (dispatch) => {
  const response = await csrfFetch(`/api/tastings/${tasting.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tasting),
  });
  const updatedTasting = await response.json();
  dispatch(update(updatedTasting));
};

export const deleteTasting = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/tastings/${id}/delete`, {
    method: "DELETE",
  });
  if (response.ok) {
    const deleted = await response.json();
    dispatch(deleteOneTasting(deleted));
  }
};

let newState;
export function tastingReducer(state = {times:[]}, action) {
  switch (action.type) {
    case LOAD:
      newState = { ...state };
      action.tastings.forEach((tasting) => {
        newState[tasting.id] = tasting;
      });
      return newState;
    case BOOK:
      newState = { ...state };
      newState[action.tasting.id] = action.tasting;
      return newState;
    case DELETE:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    case UPDATE:
      newState = { ...state };
      newState[action.tasting.id] = action.tasting;
      return newState;
    case LOADTIMES:
      newState = {...state}
      newState.times = action.availableTimes
      return newState
    default:
      return state;
  }
}
