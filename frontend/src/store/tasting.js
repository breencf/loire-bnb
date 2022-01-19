import { csrfFetch } from "./csrf";

const LOAD = "users/:id/tastings";
const BOOK = "wineries/:id/BOOK";

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
    userId,
    wineryId,
  };
};

export const loadTastings = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}/tastings`);
  if (response.ok) {
    const tastings = await response.json();
    dispatch(load({ tastings, userId }));
  }
};

export const bookOneTasting =
  ({ userId, wineryId, date, numGuests }) =>
  async (dispatch) => {
    const response = await csrfFetch(`/api/wineries/${wineryId}/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, wineryId, date, numGuests }),
    });
    const tasting = await response.json();
    dispatch(book({ tasting }));
  };

const initialState = { userTastings: {} };
let newState;

export function tastingReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      newState = { ...state };
      action.tastings.forEach((tasting) => {
        newState.userTastings[tasting.wineryId] = tasting;
      });
      return newState;
    case BOOK:
      newState = { ...state };
      newState.userTastings[action.tasting.wineryId] = action.tasting;
      return newState;
    default:
      return state;
  }
}
