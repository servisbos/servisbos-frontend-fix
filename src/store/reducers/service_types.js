import { FETCH_SERVICE_TYPES } from "../types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SERVICE_TYPES:
      return action.payload;
    default:
      return state;
  }
};
