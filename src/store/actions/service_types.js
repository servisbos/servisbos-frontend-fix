import { FETCH_SERVICE_TYPES } from "../types";
import Axios from "axios";
import Cookies from "js-cookie";

export const fetchServiceTypes = () => dispatch => {
  const token = Cookies.get("token");
  Axios.get("http://localhost:8000/api/servicetype")
    .then(({ data: { servicetype } }) => {
      dispatch({ type: FETCH_SERVICE_TYPES, payload: servicetype });
    })
    .catch(err => {
      console.error(err);
    });
};
