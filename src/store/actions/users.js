import { FETCH_USERS } from "../types";
import Axios from "axios";
import Cookies from "js-cookie";

export const fetchUsers = () => dispatch => {
  const token = Cookies.get("token");

  Axios.get(`${process.env.REACT_APP_API_URL}/api/users`, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(({ data: { users } }) => {
      dispatch({ type: FETCH_USERS, payload: users });
    })
    .catch(err => {
      console.error(err);
    });
};
