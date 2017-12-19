import React, { Component, PropTypes } from 'react';
import Popular from './Popular';
import Home from './Home';
import getprofile from './utils/api';
import './App.css';

class Battle extends Component {
    state = {
      avatar_urlP1: null,
      avatar_urlP2: null,
      playerOne: null,
      playerTwo: null,
    }

  onChange(event) {
    this.setState({playerOne: event.target.value});
  }

  onChangeRight(event) {
    this.setState({playerTwo: event.target.value})
  }

  callGetProfile = (name, player) => {
    console.log(getprofile(name));
    getprofile(name).then(response => this.setState({[player]: response}));
  };


  const Player = (playerName, playerAvatar) => {
    render() {
      return(
        <h2>User</h2>
        <img src={playerAvatar} />
        <input placeholder="Github username" value={playerName} onChange={this.onChange.bind(this)} />
        <button onClick={() => this.callGetProfile(playerName, 'playerAvatar')}>VALIDER</button>
      )}
  };



  render() {
    return (
      <div>
        <h2>Battle</h2>
        <Player playerName={this.state.playerOne} playerAvatar={this.state.avatar_urlP1} />
      </div>
    )};
};

export default Battle;


/*

<div className="left">
  <h2>User</h2>
  <img src={this.state.avatar_urlP1} />
  <input placeholder="Github username" value={this.state.playerOne} onChange={this.onChange.bind(this)} />
  <button onClick={() => this.callGetProfile(this.state.playerOne, 'avatar_urlP1')}>VALIDER</button>
</div>
<div className="right">
  <h2>User</h2>
  <img src={this.state.avatar_urlP2} />
  <input placeholder="Github username" value={this.state.playerTwo} onChange={this.onChangeRight.bind(this)} />
  <button onClick={() => this.callGetProfile(this.state.playerTwo, 'avatar_urlP2')}>VALIDER</button>
</div>
*/