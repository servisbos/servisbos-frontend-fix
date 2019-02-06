import { FETCH_USER_SERVICE_TYPES } from "../types";
import Axios from "axios";
import Cookies from "js-cookie";

export const fetchUserServiceTypes = () => dispatch => {
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
