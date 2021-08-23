import "./App.css";

import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import firebase from "firebase";
import { connect } from "react-redux";

var firebaseConfig = {
  apiKey: "AIzaSyBWK0p6RymkShGmVToyreNk3fODHj4TgbI",
  authDomain: "potluck-d6bf5.firebaseapp.com",
  projectId: "potluck-d6bf5",
  storageBucket: "potluck-d6bf5.appspot.com",
  messagingSenderId: "530777047695",
  appId: "1:530777047695:web:901744f742e0c0672fe6fa",
  measurementId: "G-ZZ72729MCH",
};
const USER_CURRENT_TOKEN = localStorage.getItem("TOKEN");
USER_CURRENT_TOKEN
  ? console.log(`User have a token! ${USER_CURRENT_TOKEN}`)
  : console.log(`User have no token! `);

export const Server = firebase.initializeApp(firebaseConfig);
function App() {
  return (
    <div className="App">
      {/* Insert Header here */}
      <Switch>
        <Route exact path="/">
          {/* Insert home page here  */}
        </Route>
        <Route path="/signup">{/* Insert signup here */}</Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/potluck">
          {/* Insert potluck list here */}
        </Route>
        <Route path="/potluck/:id">
          {/* Insert potluck with item list here */}
        </Route>
      </Switch>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    token: state.token,
  };
}
export default connect(mapStateToProps, {})(App);
