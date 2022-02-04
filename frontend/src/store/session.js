import { csrfFetch } from "./csrf";

const START = "/api/session/START";
const END = "/api/session/END";

export const startSession = (user) => {
  return {
    type: START,
    user,
  };
};

export const endSession = () => {
  return {
    type: END,
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;

  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(startSession(data.user));
  return response;
};

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(startSession(data.user));
  return response;
};

export const signup =
  ({ firstName, lastName, email, password }) =>
  async (dispatch) => {
    const response = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    const data = await response.json();
    dispatch(startSession(data.user));
    return response;
  };

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", { method: "delete" });
  const data = await response.json();
  dispatch(endSession());
  return data;
};

const initialState = {};

export default function sessionReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case START:
      newState = { ...state }; //Object.assign({}, state)
      newState.user = action.user;
      return newState;
    case END:
      newState = { ...state };
      delete newState.user;
      return newState;
    default:
      return state;
  }
}
