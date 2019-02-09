import { FETCH_USER_SERVICE_TYPES } from "../types";
import { FETCH_USER_SERVICE_TYPES_BY_SPECIALIZATION } from "../types";
import Axios from "axios";
import Cookies from "js-cookie";

export const fetchUserServiceTypes = () => dispatch => {
  const token = Cookies.get("token");
  Axios.get(`${process.env.REACT_APP_API_URL}/api/user_service_type`)
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
export const fetchUserServiceBySpecialization = idServicetype => dispatch => {
  Axios.get(
    `${
      process.env.REACT_APP_API_URL
    }/api/user_service_type/findProvider/${idServicetype}`
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
