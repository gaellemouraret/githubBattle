import React, { Component } from 'react';
import Popular from './Popular';
import Home from './Home';
import getprofile from './utils/api';
import propTypes from 'prop-types';
import './App.css';

class PlayerInput extends Component {
  state = {
    playerName: null,
  }

  onChange = (event) => {
    this.setState({playerName: event.target.value});
  }

  constructUrl = () => {
    let url = "https://github.com/" + this.state.playerName + ".png?size=200"
    this.props.getAvatarUrl(url, this.props.id)
  }

  render() {
    const {playerName, playerAvatar, onChange} = this.props;
    return(
      <div>
        <h2>{this.props.label}</h2>
        <input placeholder="Github username" value={playerName} onChange={this.onChange} />
        <button onClick={() =>
          this.constructUrl()
        } >VALIDER</button>
      </div>
    )}
};

PlayerInput.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  getAvatarUrl: propTypes.func
}


class Battle extends Component {
    state = {
      playerOne: null,
      playerTwo: null,
    }

  onChange = (event, player) => {
    this.setState({[player]: event.target.value});
  }

  updatePlayerUrl = (url, playerId) => {
    this.setState({[playerId]: url})
  }

  render() {
    return (
      <div>
        <h2>Battle</h2>
        {this.state.playerOne ?
          <div>
            <h2>Player One</h2>
            <img src={this.state.playerOne} />
          </div>
          :
          <PlayerInput
            id={'playerOne'}
            label={'Player One'}
            getAvatarUrl={this.updatePlayerUrl}
            />
        }

        {this.state.playerTwo ?
          <div>
            <h2>Player Two</h2>
            <img src={this.state.playerTwo} />
          </div>
          :
          <PlayerInput
            id={'playerTwo'}
            label={'Player Two'}
            getAvatarUrl={this.updatePlayerUrl}
            />
        }

        {this.state.playerOne && this.state.playerTwo &&
          <button>Battle</button>
        }

      </div>
    )};
};

export default Battle;
