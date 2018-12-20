import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addToStartedChallenge, incrementScore} from '../../stores/actions/challengeActions'
import './challengeView.scss'

export class challengeView extends Component {
  render() {
    console.log('FROM CHALLENGES', this.props)
    return (
      <div className="challengeView-container">
        <div>
          {
            this.props.challenges.allChallenges.map((challenge) => {
              return(
                <div>
                  <p>{challenge.titre}</p>
                  <a
                    onClick={() => this.props.addToStartedChallenge(challenge)}
                  >Start challenge</a>
                  <a
                    onClick={() => this.props.incrementScore(challenge, parseFloat(challenge.incrementValue), '+')}
                  >Increment score</a>
                  <a
                    onClick={() => this.props.incrementScore(challenge, parseFloat(challenge.incrementValue), '-')}
                  >Decrement score</a>
                </div>
              )
            })
          }
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  addToStartedChallenge,
  incrementScore
}

export default connect(mapStateToProps, mapDispatchToProps)(challengeView)
