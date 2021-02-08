import React from "react";
import "./scss/App.scss";
import Login from "./Page/authentication/Login";
import Content from "./Page/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={Content} />
          </Switch>
        </header>
      </div>
    </Router>
  );
};

export default App;
