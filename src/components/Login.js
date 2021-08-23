import React, { useState } from "react";
import { connect } from "react-redux";
import * as material from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const Login = (props) => {
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
      marginTop: "5%",
    },
  }));
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const handleChange = (props) => (event) => {
    console.log(values);
    setValues({ ...values, [props]: event.target.value });
  };
  const handleClickShowPassword = () => {
    console.log(`Show password is:${values.showPassword}`);
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSignUp = (event) => {
    console.log("redirect to signup page!");
    event.preventDefault();
  };
  const handleHelp = (event) => {
    console.log("Help Action!");
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    console.log(values);
    console.log("Login action!");
    event.preventDefault();
  };
  const classes = useStyles();
  return (
    <>
      <div>
        <h1>Potluck Planner</h1>
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
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
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
              <material.Button
                id="help"
                onClick={handleHelp}
                className={classes.button}
                variant="outlined"
                color="secondary"
              >
                Need Help?
              </material.Button>
            </material.FormControl>
          </div>
        </div>
      </div>
    </>
  );
};
function mapStateToProps(state) {
  return { username: state.username, password: state.password };
}
export default connect(mapStateToProps, {})(Login);
