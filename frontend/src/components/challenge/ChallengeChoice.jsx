import React, { Component } from 'react'
import { addToStartedChallenge } from '../../stores/actions/challengeActions'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export class ChallengeChoice extends Component {

  /// reprendre la fabrication de la route qui lance le defiDSOlo injectée des données en fonctions de son id
  render() {
    return (
      <div>
        {
          this.props.challenges.allChallenges.map((challenge) => {
            return <NavLink to={`challenge/${challenge.id}`}><li>{challenge.titre}</li></NavLink>
          })
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  addToStartedChallenge
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeChoice)

