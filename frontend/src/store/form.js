import { csrfFetch } from "./csrf";

const LOAD = "wineries/create/LOAD";
const ADD = "wineries/create";

const load = ({ varietals, wineStyles, regions }) => {
  return {
    type: LOAD,
    varietals,
    wineStyles,
    regions,
  };
};

export const getForm = () => async (dispatch) => {
  const response = await fetch("/api/wineries/create");
  if (response.ok) {
    const data = await response.json();
    dispatch(load(data));
  }
};

const initialState = { varietalList: [], wineStyleList: [], regionList: [] };
function formReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = { ...state };
      console.log("newSTATE", newState);
        newState["varietalList"]= [action.varietals],
        newState["wineStyleList"]= [action.wineStyles],
        newState["regionList"]= [action.regions];
      return newState;
    default:
      return state;
  }
}

export default formReducer;
