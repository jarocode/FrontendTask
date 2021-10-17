import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import FIleAssessment from './component/FileAssessment';

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path="/register">
              <Register/>
          </Route>
          <Route exact path="/">
              <Login/>
          </Route>
          <Route exact path="/fileAssessment">
              <FIleAssessment/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
