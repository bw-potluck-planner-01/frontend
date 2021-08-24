import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as material from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LoginAction from "../action/LoginAction";
import { Alert } from "@material-ui/lab";
import { useHistory } from "react-router-dom";

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
    root: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      margin: "0% auto",
      padding: "0% auto",
      flexDirection: "column",
    },
    input: {
      display: "flex",
      width: "50%",
      margin: "0% auto",
      padding: "0% auto",
    },
    button: {
      display: "flex",
      width: "50%",
      margin: "0% auto",
      padding: "0% auto",
      marginTop: "2%",
    },
    alert: {
      width: "36%",
      margin: "0% auto",
      padding: "0% auto",
      marginTop: "1%",
    },
    form: {
      width: "100%",
      margin: "0% auto",
      padding: "2%",
      marginTop: "1%",
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
          {" "}
          <>
            <h1>Potluck Planner</h1>
          </>
          <div id="FormHolder">
            <div className="login-form">
              <div className={classes.root}>
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
                      color="primary"
                    >
                      Sign Up
                    </material.Button>
                  </material.ButtonGroup>
                  {!!props.error ? (
                    <Alert className={classes.alert} severity="error">
                      {props.error}
                    </Alert>
                  ) : null}
                </material.FormControl>
              </div>
            </div>
          </div>
        </>
      ) : (
        push("/")
      )}
    </div>
  );
};
export default connect(mapStateToProps, { LoginAction })(Login);
