import "./App.css";

import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";

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

export default App;
