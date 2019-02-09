import { REDIRECT_TO_BOOKING_PAGE } from "../types";
import {
  GET_PROVIDER_TO_BOOKING_PAGE,
  GET_USER_TO_BOOKING_PAGE,
  GET_SERVICE_TO_BOOKING_PAGE,
  ORDER_BOOKING,
  SET_ORDER_STATUS,
  GET_DATA_ORDER,
  SET_CONFIRMATION_STATUS
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

export const fetchDataOrderByIdProvider = id_provider => dispatch => {
  const token = Cookies.get("token");
  Axios.get(
    `${process.env.REACT_APP_API_URL}/api/order/provider/${id_provider}`
  )
    .then(response => {
      console.log(response.data.orders);
      dispatch({
        type: GET_DATA_ORDER,
        payload: response.data.orders
      });
    })
    .catch(err => {
      console.error(err);
    });
};

export const fetchDataUserToBookingPage = id_user => dispatch => {
  const token = Cookies.get("token");
  Axios.get(
    `${process.env.REACT_APP_API_URL}/api/users/getDataProvider/${id_user}`
  )
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
  Axios.get(
    `${process.env.REACT_APP_API_URL}/api/servicetype/${id_service_type}`
  )
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
  Axios.post(`${process.env.REACT_APP_API_URL}/api/order`, data)
    .then(response => {
      if (response.status === 200) {
        dispatch(setOrderStatus(true));
      }
    })
    .catch(err => {
      console.error(err);
      dispatch(setOrderStatus(false));
    });
};
export const setOrderStatus = value => ({
  type: SET_ORDER_STATUS,
  payload: value
});

export const setConfirmationStatus = value => ({
  type: SET_CONFIRMATION_STATUS,
  payload: value
});

export const confirmOrder = (id_order, status) => dispatch => {
  Axios.patch(`${process.env.REACT_APP_API_URL}/api/order/${id_order}`, {
    status
  })
    .then(response => {
      console.log(response);
      if (response.status === 200) {
        dispatch(setConfirmationStatus(true));
      }
    })
    .catch(err => {
      console.error(err);
      dispatch(setConfirmationStatus(false));
    });
};
