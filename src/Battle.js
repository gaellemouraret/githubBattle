import React, { Component } from 'react';
import Popular from './Popular';
import Home from './Home';
import { Link } from 'react-router-dom';
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
    let name = this.state.playerName
    this.props.updatePlayer(url, name, this.props.id)
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
  updatePlayer: propTypes.func,
}


class Battle extends Component {
    state = {
      playerOne: null,
      playerTwo: null,
      nameOne: null,
      nameTwo: null,
    }

  onChange = (event, player) => {
    this.setState({[player]: event.target.value});
  }

  updatePlayer = (url, name, playerId) => {
    this.setState({[playerId]: url})
    if (playerId === 'playerOne') {
      this.setState({nameOne: name})
    } else {
      this.setState({nameTwo: name})
    }
  }

  render() {
    const urlOne = this.state.playerOne;
    const urlTwo = this.state.playerTwo;
    //console.log('one', urlOne, 'two', urlTwo);
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
            updatePlayer={this.updatePlayer}
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
            updatePlayer={this.updatePlayer}
            />
        }

        {/* {this.state.playerOne && this.state.playerTwo && */}
          <Link to={{
              pathname: this.props.match.url + "/results",
              search: "?playerOne=" + this.state.nameOne +
              "&playerTwo=" + this.state.nameTwo
            }}
          className="button">Battle</Link>
        {/* } */}

      </div>
    )};
};

export default Battle;
