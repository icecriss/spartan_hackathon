import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Line, Circle } from 'rc-progress';
import { NavLink } from 'react-router-dom';
import { addToStartedChallenge, incrementScore } from '../../../stores/actions/challengeActions'


import './challengeDetail.scss'


export class ChallengeDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "id": 1,
      "titre": "Boire 2L d’eau par jour",
      "description": "L’eau représente entre 50 et 75% de nos corps. Pense ton corps, hydrate-toi ! C’est une des habitudes les plus simples et les plus saines adopter.",
      "couleur": "#3498DB",
      "objectif": 2,
      "unité": "Litre",
      "score": 0,
      "incrementValue": 0.2,
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const currentChallenge = this.props.challenges.startedChallenges.find((challenge) => {
      return (
        challenge.id === parseInt(id)
      )
    })
    this.setState({
      ...currentChallenge
    })
  }

  render() {
    console.log("SCORE", this.state.score)
    if (this.state.score == this.state.objectif) {
      setTimeout(() => {
        alert('BRAVO')
        this.props.history.push('/dashboard')
      }, 250)
    }
    console.log(Math.ceil(this.state.score * 100 / this.state.objectif))
    return (
      <div className="challengeDetail-container">
        <div className="dash-headerBtn" style={{ position: 'absolute', top: "10px", left: "10px", cursor: 'pointer' }}
        >
          <NavLink to={`/dashboard`}><i class="fas fa-chevron-left"></i></NavLink>
        </div>
        <div style={{ backgroundImage: `url(${require("../../pictures/1-1.png")})` }} className="challentDetail-stat"></div>

        <div className="challengeDetail-img" style={{ backgroundImage: `url(${require(`../../pictures/challengesImages/challengeImage${this.state.id}.jpg`)})` }}></div>
        <div className="challengeDetail-stat">
          <p>{this.state.titre}</p>
          <Line percent={Math.ceil(this.state.score * 100 / this.state.objectif)} strokeWidth="2" strokeColor="black" trailColor="white" />

        </div>
        <div style={{ backgroundColor: `${this.state.couleur}` }} className="challengeDetail-opacity"></div>

        <div className="challengeDetail-descritption">
          <p>{this.state.description}</p>
        </div>
        <div className="challengeDetail-buttons">

          <i onClick={() => {
            this.props.incrementScore(this.state, parseInt(this.state.incrementValue), '-')
            this.setState({ score: this.state.score -= parseInt(this.state.incrementValue) })
          }} className="fas fa-minus-circle"></i>
          <div>
            <p className="challengeDetail-incrementValue">{this.state.incrementValue}</p>
            <p>{this.state.unité}</p>

          </div>

          <i onClick={() => {
            this.props.incrementScore(this.state, parseFloat(this.state.incrementValue), '+')
            this.setState({ score: this.state.score += parseFloat(this.state.incrementValue) })
          }} className="fas fa-plus-circle"></i>



        </div>

      </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeDetail)
