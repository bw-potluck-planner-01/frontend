import "./App.css";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import PotluckPage from "./components/PotluckPage/PotluckPage";
import Home from "./components/Home";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Pot from './Pot/Pot';
import ProtectedRoute from './components/ProtectedRoute'

const USER_CURRENT_TOKEN = localStorage.getItem("TOKEN");
USER_CURRENT_TOKEN
  ? console.log(`User have a token! ${JSON.parse(USER_CURRENT_TOKEN)}`)
  : console.log(`User have no token! `);
function App() {
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
        <Route exact path="/potluck">
          {/* Insert potluck list here */}
          <Pot />
        </Route>
        <Route path="/potluck/:id">
          {/* Insert potluck with item list here */}
          <PotluckPage />
        </Route>
        <ProtectedRoute exact path="/potluck" component={Pot} />
        <ProtectedRoute path='/potluck/:id' component={PotluckPage} />
      </Switch>
    </AppFull>
  );
}

export default App;

const AppFull = styled.div`
  text-align: center;
  background: #DCCCBB;
  min-height: 100vh;
`;
