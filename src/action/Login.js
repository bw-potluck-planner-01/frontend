import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const startLogin = () => (dispatch) => {
  //   dispatch({ type: LOGIN_START });
  axios
    .get("")
    .then((response) => {
      //   dispatch({ type: LOGIN_SUCCESS });
      console.log(response);
    })
    .catch((error) => {
      //   dispatch({ type: LOGIN_FAIL });
      console.log(error);
    });
};
