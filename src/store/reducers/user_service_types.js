import { FETCH_USER_SERVICE_TYPES } from "../types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_SERVICE_TYPES:
      return action.payload;
    default:
      return state;
  }
};
