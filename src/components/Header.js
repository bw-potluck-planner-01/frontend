import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as material from "@material-ui/core";
import * as ui from "@material-ui/icons";
import { logoutAction } from "../action/LoginAction";

function Header(props) {
  const { token } = props;
  const { push } = useHistory();
  const useStyles = material.makeStyles((theme) => ({
    nav: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      margin: "0% auto",
      padding: "0% auto",
      background: "white",
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
    button: {
      width: "30%",
    },
    container1: {
      display: "flex",
      width: "100%",
      padding: "0% auto",
      margin: "0% auto",
    },
    container2: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      padding: "0% auto",
      margin: "0% auto",
    },
    positionRight: {
      width: "20%",
    },
    span: {
      paddingLeft: "2%",
    },
  }));
  const classes = useStyles();
  return (
    <>
      {token ? (
        <div className={classes.nav}>
          <div className={classes.container1}>
            <material.Button
              className={classes.button}
              onClick={(e) => {
                e.preventDefault();
                push("/");
              }}
            >
              <ui.Home />
              <span className={classes.span}>
                <h4>Home</h4>
              </span>
            </material.Button>
            <material.Button
              className={classes.button}
              onClick={(e) => {
                e.preventDefault();
                push("/addpotluck");
              }}
            >
              <ui.AddBoxOutlined />
              <span className={classes.span}>
                {" "}
                <h4>Add Potluck</h4>
              </span>
            </material.Button>
            <material.Button
              className={classes.button}
              onClick={(e) => {
                e.preventDefault();
                push("/potlucks");
              }}
            >
              <ui.AddToHomeScreenOutlined />
              <span className={classes.span}>
                {" "}
                <h4>Potlucks</h4>
              </span>
            </material.Button>
          </div>

          <material.Button
            className={classes.button}
            onClick={(e) => {
              e.preventDefault();
              props.logoutAction();
              push("/");
            }}
          >
            <ui.MoodBadOutlined />
            <span className={classes.span}>
              {" "}
              <h4>LogOut</h4>
            </span>
          </material.Button>
        </div>
      ) : (
        <div className={classes.nav}>
          <div className={classes.container1}>
            <material.Button
              className={classes.button}
              onClick={(e) => {
                e.preventDefault();
                push("/");
              }}
            >
              <ui.Home />
              <span className={classes.span}>
                <h4>Home</h4>
              </span>
            </material.Button>
            <material.Button
              className={classes.button}
              onClick={(e) => {
                e.preventDefault();
                push("/login");
              }}
            >
              {" "}
              <ui.MoodOutlined />
              <span className={classes.span}>
                {" "}
                <h4>Login</h4>
              </span>
            </material.Button>
            <material.Button
              className={classes.button}
              onClick={(e) => {
                e.preventDefault();
                push("/signup");
              }}
            >
              {" "}
              <ui.AccountCircleRounded />
              <span className={classes.span}>
                {" "}
                <h4>SignUp</h4>
              </span>
            </material.Button>
          </div>
        </div>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    token: state.token,
  };
}

export default connect(mapStateToProps, { logoutAction })(Header);
