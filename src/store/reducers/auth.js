import { SIGN_IN, SET_SIGN_UP_STATUS, SIGN_OUT } from "../types";

const initialState = {
  isAuthenticated: false,
  isSignUpSuccess: false,
  idUserLogin: "",
  dataUserLogin: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGN_UP_STATUS:
      return { ...state, isSignUpSuccess: action.payload };
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        idUserLogin: action.payload.id,
        dataUserLogin: action.payload.dataUser
      };
    case SIGN_OUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
