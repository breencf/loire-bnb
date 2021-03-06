const LOAD = "wineries/bazinga/LOAD";

const load = ({ varietalList, wineStyleList, regionList }) => {
  return {
    type: LOAD,
    varietalList,
    wineStyleList,
    regionList,
  };
};

export const getForm = () => async (dispatch) => {
  const response = await fetch("/api/wineries");
  if (response.ok) {
    const data = await response.json();
    dispatch(load(data));
  }
};

const initialState = {};
function formReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = { ...state };
      // newState["varietalList"] = [action.varietalList],
      // newState["wineStyleList"]= [action.wineStyleList],
      // newState["regionList"]= [action.regionList];
      return newState;
    default:
      return state;
  }
}

export default formReducer;
