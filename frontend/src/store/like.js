import { csrfFetch } from "./csrf";

const LOAD = "users/:id/likes";
const LIKE = "wineries/LIKE";

const load = ({ likes, userId }) => {
  return {
    type: LOAD,
    userId,
    likes,
  };
};

const like = ({ userId, winery, likeUnlike }) => {
  return {
    type: LIKE,
    userId,
    winery,
    likeUnlike,
  };
};

export const loadLikes = (userId) => async (dispatch) => {
  const response = await csrfFetch(`api/users/${userId}/likes`);

  if (response.ok) {
    const likes = await response.json;
    dispatch(load({ likes, userId }));
  }
};

export const likeButton =
  ({ userId, winery }) =>
  async (dispatch) => {
    const response = await csrfFetch(`/api/wineries/${userId}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, winery }),
    });

    if (response.ok) {
      const message = await response.json();
      let likeUnlike = message.message;
      dispatch(like({ userId, winery, likeUnlike }));
    }
  };

const initialState = { userLikes: {} };
let newState;

export function likeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      newState = { ...state };
      action.likes.forEach((like) => {
        newState.userLikes[like.wineryId] = {
          userId: action.userId,
          wineryId: like.wineryId,
        };
      });
      return newState;
    case LIKE:
      newState = { ...state };
      if (action.likeUnlike === "like") {
        newState.userLikes[action.winery] = {
          userId: action.userId,
          wineryId: action.winery,
        };
      } else {
        delete newState.userLikes[action.winery];
      }
      return newState;
    default:
      return state;
  }
}
