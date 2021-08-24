import axios from "axios";

import { connect } from "react-redux";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

const LoginAction = (props) => (dispatch) => {
  const data = {
    username: props.username,
    password: props.password,
  };
  dispatch({ type: LOGIN_START });
  axios
    .post("https://potluckplannerplus.herokuapp.com/auth/login", data)
    .then((response) => {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
      console.log(response);
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
      console.log(error.response.data.message);
    });
};
export default LoginAction;
