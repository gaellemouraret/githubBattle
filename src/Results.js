import React, { Component } from 'react';
//import getFollowers from './utils/getFollowers';
import getprofile from './utils/api';
import axios from 'axios';
import './App.css';


const queryString = require('query-string');

export default class Results extends Component {
  state = {
    profile1: null,
    profile2: null,
  }
  

  getFollowers = (player, profile) => {
    return getprofile(player)
      .then((res) => {
      this.setState({[profile]: res.followers}); 
    })
  }
  componentWillMount() {
    const parsed = queryString.parse(this.props.location.search);
    const playerOne = parsed.playerOne;
    const playerTwo =  parsed.playerTwo;
    this.getFollowers(playerOne, 'profile1');
    this.getFollowers(playerTwo, 'profile2');
    
  };


  render() {
    const parsed = queryString.parse(this.props.location.search);
    const playerOne = parsed.playerOne;
    const playerTwo =  parsed.playerTwo;
    const avatar1 = "https://github.com/" + playerOne + ".png?size=200";
    const avatar2 = "https://github.com/" + playerTwo + ".png?size=200";
    
    const winner = (this.state.profile1 > this.state.profile2) ? <div><img src={avatar1} /> {playerOne} wins</div> : <div><img src={avatar2} /> {playerTwo} wins</div>;
    
    
    return (
      <div>
        <p>I AM RESULTS</p>
        <p>{this.state.profile1 && this.state.profile2 && winner}</p>
      </div>
    )
  }
}

