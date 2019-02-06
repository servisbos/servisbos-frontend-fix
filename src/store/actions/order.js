import { REDIRECT_TO_BOOKING_PAGE } from "../types";
import Axios from "axios";
import Cookies from "js-cookie";

export const fetchDataToBookingPage = () => dispatch => {
  const token = Cookies.get("token");
  Axios.get("http://localhost:8000/api/user_service_type")
    .then(({ data: { userservicetype } }) => {
      dispatch({
        type: FETCH_USER_SERVICE_TYPES,
        payload: userservicetype
      });
    })
    .catch(err => {
      console.error(err);
    });
};
export const fetchUserServiceBySpecialization = data => dispatch => {
  Axios.get(
    `http://localhost:8000/api/user_service_type/findProvider/${data.keyword}`
  )
    .then(({ data: { userservicetype } }) => {
      console.log(userservicetype);

      dispatch({
        type: FETCH_USER_SERVICE_TYPES_BY_SPECIALIZATION,
        payload: userservicetype
      });
    })
    .catch(err => {
      console.error(err);
    });
};
