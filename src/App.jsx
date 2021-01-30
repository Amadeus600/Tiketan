import React from 'react';
import './scss/App.scss';
import Login from './Login/Login';
import Content from './Page/Content';
// import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

const App = () => {  
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <header className="App-header">
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/Home" component={Content}/>
            </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
