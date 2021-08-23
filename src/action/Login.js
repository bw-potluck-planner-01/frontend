import { Server } from "../App";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_FINISH = "LOGIN_SUCCESS";

export const startLogin = () => (dispatch) => {
  dispatch({ type: LOGIN_START });
  Server.database()
    .ref("TOKEN")
    .on("value", (snapshot) => {
      const data = snapshot.val();
      dispatch({ type: LOGIN_FINISH, payload: data });
      console.log(`This is the token: ${data}`);
      localStorage.setItem("TOKEN", JSON.stringify(data));
    });
};
