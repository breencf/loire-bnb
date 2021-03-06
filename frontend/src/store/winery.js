import { csrfFetch } from "./csrf";

const LOAD = "wineries/LOAD";
const ADD = "wineries/ADD";
const UPDATE = "wineries/UPDATE";
const DELETE = "wineries/DELETE";
const UPLOAD = "wineries/UPLOAD"
// const GET = "wineries/GET";

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

const upload = ({images, id}) => {
  return {
    type: UPLOAD,
    images,
    id
  }
}
// const getWinery = (winery) => {
//   return {
//     type: GET,
//     winery,
//   };
// };

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

export const uploadImages =
  ({ id, urls }) =>
  async (dispatch) => {
    const response = await csrfFetch(`/api/wineries/${id}/images`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(urls),
    });
    if(response.ok) {
      const {images, id} = await response.json();
      dispatch(upload({images, id}))
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
      newState = { ...state };
      newState[action.winery.id] = action.winery;
      return newState;
    case UPDATE:
      newState = { ...state };
      newState[action.winery.id] = action.winery;
      return newState;
    case DELETE:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    case UPLOAD:
      newState = {...state}
      newState[action.id].Images=[]
      action.images.forEach((image) =>
      newState[image.wineryId].Images.push(image)
      )
      return newState
    default:
      return state;
  }
}

export default wineryReducer;
