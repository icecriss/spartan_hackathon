import React, { Component } from 'react'
import { connect } from 'react-redux'

import { usernameAction } from '../../stores/actions/username'

import './userDashboard.scss';

import mario1 from '../pictures/mario1.png';
import mario2 from '../pictures/mario2.png';
import mario3 from '../pictures/mario3.png';
import ChallengesStarted from './ChallengesStarted';
import ChallengeEmpty from './ChallengeEmpty';

export class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      image1: mario1,
      image2: mario2,
      image3: mario3,
      currentImage: 2,
      currentLevel: 1,
      currentChallengesAccomplished: 0,
      currentChallengesStarted: 0,
    }
  }


  render() {
    console.log(this.props)
    return (
      < div className="dash-container" >
        <img className="dash-character" src={this.state[`image${this.state.currentLevel}`]} />
        <h2 className="dash-username">{this.props.user.username}</h2>
        <ul className="dash-userScore">
          <li>
            <p>{this.state.currentChallengesAccomplished}</p>
            <p>Défis</p>
          </li>
          <li className="dash-userScoreCenter">
            <p>{this.state.currentLevel}</p>
            <p>Level</p>
          </li>
          <li>
            <p>{this.state.currentChallengesStarted}</p>
            <p>Défis</p>
          </li>
        </ul>
        <div className="dash-challengesContainer">
          <h3>Challenges en cours</h3>

          {this.state.currentChallengesStarted === 0 && <ChallengeEmpty />}
          {this.state.currentChallengesStarted !== 0 && <ChallengesStarted />}
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  usernameAction
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard)
