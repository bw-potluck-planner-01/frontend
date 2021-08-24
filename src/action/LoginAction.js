import axios from "axios";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_TEMP = "LOGOUT_TEMP";
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
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    });
};

export const logoutTemp = () => {
  return { type: LOGOUT_TEMP };
};

export default LoginAction;
