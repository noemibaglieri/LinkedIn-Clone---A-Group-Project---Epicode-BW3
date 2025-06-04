import { GET_MY_PROFILE, SET_MY_PROFILE_ERROR } from "../actions";

const initialState = {
  content: null,
  error: null,
};

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE:
      return {
        ...state,
        content: action.payload,
        error: null,
      };
    case SET_MY_PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default myProfileReducer;
