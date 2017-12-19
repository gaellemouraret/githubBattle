import React, { Component } from 'react';
import './App.css';
const queryString = require('query-string');

export default class Results extends Component {
  render() {
    console.log('this.props', this.props);
    const parsed = queryString.parse(this.props.location.search);
    console.log('parsed', parsed);
    return (
      <p>I AM RESULTS</p>
    )
  }
}
