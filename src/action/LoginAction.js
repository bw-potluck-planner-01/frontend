import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_TEMP = "LOGOUT_TEMP";
export const GRAB_TOKEN = 'GRAB_TOKEN';
export const LOGOUT_START = 'LOGOUT_START'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'

const LoginAction = (props) => (dispatch) => {
  const data = {
    username: props.username,
    password: props.password,
  };
  dispatch({ type: LOGIN_START });
  axios
    .post("https://potluckplannerplus.herokuapp.com/auth/login", data)
    .then((response) => {
      console.log(response.data)
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    });
};

export const logoutAction = () => (dispatch) => {
  dispatch({ type: LOGOUT_START})
  axiosWithAuth().get('https://potluckplannerplus.herokuapp.com/auth/logout')
    .then(res => {
      console.log(res)
      dispatch({type: LOGOUT_SUCCESS})
      localStorage.removeItem('TOKEN')
      localStorage.removeItem('user_id')
    })
    .catch(err => {
      console.log(err.response)
      dispatch({type: LOGOUT_FAIL, payload: err.response.data.message})
    })
}

export const logoutTemp = () => {
  return { type: LOGOUT_TEMP };
};

export const grabToken = (object) => {
  return({type: GRAB_TOKEN, payload: object})
}

export default LoginAction;
