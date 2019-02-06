import { FETCH_USER_SERVICE_TYPES } from "../types";
import { FETCH_USER_SERVICE_TYPES_BY_SPECIALIZATION } from "../types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_SERVICE_TYPES:
      return action.payload;
    case FETCH_USER_SERVICE_TYPES_BY_SPECIALIZATION:
      // console.log(action);
      return action.payload;
    default:
      return state;
  }
};
