import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

import PotluckPage from "./components/PotluckPage/PotluckPage";
import SavedList from './Pot/SavedList'
import Home from "./components/Home";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Pot from "./Pot/Pot";
import ProtectedRoute from "./components/ProtectedRoute";
import { connect } from "react-redux";

const USER_CURRENT_TOKEN = localStorage.getItem("TOKEN");
USER_CURRENT_TOKEN
  ? console.log(`User have a token! ${USER_CURRENT_TOKEN})`)
  : console.log(`User have no token! `);

function App(props) {
  useEffect(() => {
    console.log(props.token);
  }, []);
  return (
    <AppFull>
      {/* Insert Header here */}
      <Header />
      <Switch>
        <Route exact path="/">
          {/* Insert home page here  */}
          <Home />
        </Route>
        <Route path="/signup">
          {/* Insert signup here */}
          <Signup />
        </Route>
        <Route path="/signup">{/* Insert signup here */}</Route>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute exact path="/addpotluck" component={Pot}/>
        <ProtectedRoute path="/potlucks/:id" component={PotluckPage} />
        <ProtectedRoute path='/potlucks' component={SavedList}/>
      </Switch>
    </AppFull>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};
export default connect(mapStateToProps, {})(App);

const AppFull = styled.div`
  text-align: center;
  background: #dcccbb;
  min-height: 100vh;
`;
