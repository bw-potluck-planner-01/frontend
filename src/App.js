import "./App.css";

import {Switch, Route} from 'react-router-dom'
import styled from 'styled-components'

import Home from './components/Home'
import Header from './components/Header';
import Signup from './components/Signup';
import Login from "./components/Login";

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
        <Route path='/signup'>
          {/* Insert signup here */}
          <Signup />
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

    </AppFull>
  );
}

export default App;

const AppFull = styled.div`
  text-align: center;
  background: peachpuff;
  min-height: 100vh;
`
