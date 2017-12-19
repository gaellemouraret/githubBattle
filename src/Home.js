import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';
import Battle from './Battle';
import Popular from './Popular';
import './App.css';


class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home sweet home</h2>
        <h3>Github Battle: Battle your friends... And stuff.</h3>
        <Link to="/Battle" className="button">Battle</Link>
      </div>
    )};
};

export default Home;
