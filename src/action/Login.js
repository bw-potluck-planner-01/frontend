import axios from "axios";

const LOGIN_START = "LOGIN_START";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";

const startLogin = () => (dispatch) => {
  dispatch({ type: LOGIN_START });
  axios
    .get("api.mocki.io/v2/c35ba1b1/Users")
    .then((response) => {
      dispatch({ type: LOGIN_SUCCESS });
      console.log(response);
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAIL });
      console.log(error);
    });
};
