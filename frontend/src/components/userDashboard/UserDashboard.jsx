import React, { Component } from 'react'
import { connect } from 'react-redux'

import { usernameAction } from '../../stores/actions/username'
import { resetScore } from '../../stores/actions/challengeActions'

import './userDashboard.scss';

import mario1 from '../pictures/mario1.png';
import mario2 from '../pictures/mario2.png';
import mario3 from '../pictures/mario3.png';
import ChallengesStarted from './ChallengesStarted';
import ChallengeEmpty from './ChallengeEmpty';

export class UserDashboard extends Component {
  constructor(props) {
    super(props);

    const level = Math.floor((props.challenges.terminatedChallenges.length / 2))
    const currentLevel = level > 0 ? level : 1

    this.state = {
      userName: '',
      image1: mario1,
      image2: mario2,
      image3: mario3,
      currentImage: 2,
      currentLevel,
      currentChallengesAccomplished: props.challenges.terminatedChallenges.length,
      currentChallengesStarted: props.challenges.startedChallenges.length,
    }
  }

  resetProfile(){
    const response = window.confirm('Etes vous sur de vouloir remettre à zéro ?')
    response == true ? this.props.resetScore() : console.log("Profile not reset !")
  }


  render() {
    console.log(this.props)
    return (
      <div className="dash-container">
        <div style={{position: 'absolute', cursor: 'pointer'}}
          onClick={() => this.resetProfile()}
        ><i class="fas fa-power-off"></i></div>
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

          {!this.props.challenges.startedChallenges.length > 0 && <ChallengeEmpty />}
          {this.props.challenges.startedChallenges.length > 0 && <ChallengesStarted />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  usernameAction,
  resetScore
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard)
