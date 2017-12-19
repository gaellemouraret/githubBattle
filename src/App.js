import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';
import './App.css';

class App extends Component {
  render() {
    const NoMatch = ({ location }) => (
      <div>
        <h3>#OUPS ! Sorry no match for <code>{location.pathname}</code></h3>
      </div>
    );

    return (
      <div className="App">
        <Router>
          <div className="Header">
            <ul>
              <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
              <li><NavLink to="/Battle" activeClassName="active-link">Battle</NavLink></li>
              <li><NavLink to="/Popular" activeClassName="active-link">Popular</NavLink></li>
            </ul>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/Battle" component={Battle}/>
              <Route path="/Popular" component={Popular}/>
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
