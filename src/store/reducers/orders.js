import { REDIRECT_TO_BOOKING_PAGE } from "../types";
import { GET_SERVICE_TO_BOOKING_PAGE } from "../types";
import { GET_PROVIDER_TO_BOOKING_PAGE } from "../types";
import { GET_USER_TO_BOOKING_PAGE } from "../types";
import { ORDER_BOOKING } from "../types";
import { SET_ORDER_STATUS } from "../types";
const initialState = {
  dataProvider: "",
  dataJob: "",
  dataUser: "",
  idOrder: "",
  status_order: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case REDIRECT_TO_BOOKING_PAGE:
      return action.payload;
    case GET_PROVIDER_TO_BOOKING_PAGE:
      return { ...state, dataProvider: action.payload };
    case GET_SERVICE_TO_BOOKING_PAGE:
      return { ...state, dataJob: action.payload };
    case GET_USER_TO_BOOKING_PAGE:
      return { ...state, dataUser: action.payload };
    case ORDER_BOOKING:
      return { ...state, idOrder: action.payload };
    case SET_ORDER_STATUS:
      return { ...state, status_order: action.payload };
    default:
      return state;
  }
};
