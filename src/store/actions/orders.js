import { REDIRECT_TO_BOOKING_PAGE } from "../types";
import {
  GET_PROVIDER_TO_BOOKING_PAGE,
  GET_USER_TO_BOOKING_PAGE,
  GET_SERVICE_TO_BOOKING_PAGE,
  ORDER_BOOKING
} from "../types";
import Axios from "axios";
import Cookies from "js-cookie";

export const fetchDataToBookingPage = id_provider => dispatch => {
  const token = Cookies.get("token");
  Axios.get(`http://localhost:8000/api/users/getDataProvider/${id_provider}`)
    .then(({ data: { users } }) => {
      dispatch({
        type: GET_PROVIDER_TO_BOOKING_PAGE,
        payload: users
      });
    })
    .catch(err => {
      console.error(err);
    });
};

export const fetchDataProviderToBookingPage = id_provider => dispatch => {
  const token = Cookies.get("token");
  Axios.get(`http://localhost:8000/api/users/getDataProvider/${id_provider}`)
    .then(({ data: { users } }) => {
      dispatch({
        type: GET_PROVIDER_TO_BOOKING_PAGE,
        payload: users
      });
    })
    .catch(err => {
      console.error(err);
    });
};
export const fetchDataUserToBookingPage = id_user => dispatch => {
  const token = Cookies.get("token");
  Axios.get(`http://localhost:8000/api/users/getDataProvider/${id_user}`)
    .then(({ data: { users } }) => {
      dispatch({
        type: GET_USER_TO_BOOKING_PAGE,
        payload: users
      });
    })
    .catch(err => {
      console.error(err);
    });
};
export const fetchDataServiceToBookingPage = id_service_type => dispatch => {
  const token = Cookies.get("token");
  Axios.get(`http://localhost:8000/api/servicetype/${id_service_type}`)
    .then(({ data: { servicetype } }) => {
      dispatch({
        type: GET_SERVICE_TO_BOOKING_PAGE,
        payload: servicetype
      });
    })
    .catch(err => {
      console.error(err);
    });
};

export const orderService = data => dispatch => {
  const token = Cookies.get("token");
  Axios.post("http://localhost:8000/api/servicetype", data)
    .then(({ data: { servicetype } }) => {
      dispatch({
        type: ORDER_BOOKING,
        payload: servicetype
      });
    })
    .catch(err => {
      console.error(err);
    });
};
