import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as material from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LoginAction from "../action/LoginAction";
import { Alert } from "@material-ui/lab";
import { useHistory } from "react-router-dom";
import potluck1 from "../assets/potluck1.png";

function mapStateToProps(state) {
  return {
    username: state.username,
    password: state.password,
    error: state.error,
    token: state.token,
  };
}
const Login = (props) => {
  const { push } = useHistory();
  const useStyles = makeStyles((theme) => ({
    form: {
      width: "80%",
      margin: "0% auto",
      padding: "0%",
      color: "",
    },
    input: {
      display: "flex",
      width: "50%",
      margin: "0% auto",
      padding: "2%",
    },
    button: {
      display: "flex",
      width: "50%",
      margin: "0% auto",
      padding: "2%",
      marginTop: "10%",
    },
    alert: {
      width: "36%",
      margin: "0% auto",
      padding: "0% auto",
      marginTop: "1%",
    },
    info: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      margin: "0% auto",
      padding: "0%",
      marginTop: "1%",
      color: "gray",
    },
    textInfo: {
      width: "80%",
      margin: "0% auto",
      padding: "5%",
    },
    leftSide: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: "white",
      width: "50%",
      margin: "0% auto",
      padding: "0% auto",
    },
    rightSide: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: "linear-gradient(120deg, #EAB464 30%, white)",
      width: "50%",
      margin: "0% auto",
      padding: "0% auto",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      color: "gray",
      margin: "0% auto",
      padding: "0% auto",
      height: "95vh",
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    box: {
      width: "100%",
      height: "90vh",
      margin: "0% auto",
      padding: "0% auto",
    },
  }));
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const handleChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    push("/signup");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.LoginAction(values);
  };
  const classes = useStyles();
  return (
    <div>
      {!props.token ? (
        <>
          <div className={classes.container}>
            <div className={classes.leftSide}>
              <div className={classes.form}>
                <material.Grow in={true}>
                  <h1>Login to Your Account</h1>
                </material.Grow>
                <div className={classes.info}>
                  <div className={classes.textInfo}>
                    Plan the Perfect Potluck! Coordinate potluck dishes,
                    supplies and party RSVPs with online sign up sheets for
                    gatherings with family, friends and large groups.
                  </div>
                  <div id="FormHolder">
                    <div className="login-form">
                      <div>
                        <material.FormControl className={classes.input}>
                          <material.InputLabel>Username</material.InputLabel>
                          <material.Input
                            id="username"
                            type={"text"}
                            value={values.username}
                            onChange={handleChange("username")}
                          />
                        </material.FormControl>
                        <material.FormControl className={classes.input}>
                          <material.InputLabel>Password</material.InputLabel>
                          <material.Input
                            id="password"
                            type={values.showPassword ? "text" : "password"}
                            value={values.password}
                            onChange={handleChange("password")}
                            endAdornment={
                              <material.IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {values.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </material.IconButton>
                            }
                          />
                          <material.ButtonGroup>
                            <material.Button
                              id="login"
                              onClick={handleSubmit}
                              className={classes.button}
                              variant="outlined"
                              color="primary"
                            >
                              Login
                            </material.Button>
                            <material.Button
                              id="signup"
                              onClick={handleSignUp}
                              className={classes.button}
                              variant="outlined"
                              color="secondary"
                            >
                              Sign Up
                            </material.Button>
                          </material.ButtonGroup>{" "}
                        </material.FormControl>
                      </div>
                      {!!props.error ? (
                        <Alert className={classes.alert} severity="error">
                          {props.error}
                        </Alert>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <material.Grow in={true}>
              <div className={classes.rightSide}>
                <h1>Organizing a potluck?</h1>
                <img src={potluck1} alt="" width="100%"></img>
              </div>
            </material.Grow>
          </div>
        </>
      ) : (
        push("/")
      )}
    </div>
  );
};
export default connect(mapStateToProps, { LoginAction })(Login);
