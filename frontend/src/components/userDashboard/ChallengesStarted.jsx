import React, { Component } from 'react';
import { connect } from 'react-redux'
import './challengesStarted.scss';
import { NavLink } from 'react-router-dom'


export class Challenge extends Component {
  render() {
    console.log("ici", this.props)
    return (
      <div className="challenge-container">
        <div>

          <NavLink to='/challenges'><i className="fas fa-plus-circle"></i></NavLink>
        </div>
        <ul>
          {

            this.props.challenges.startedChallenges.map((challenge) => {
              return <NavLink to={`./challenge/${challenge.id}`}><li>
                <div>
                  <h3>{challenge.titre}</h3>
                </div>
              </li>
              </NavLink>

            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge)


// <ul className="challenge-option1">
// {this.props.user.challengesList.map((challenge) => {
//   return (
//     <li className={challenge.color} key={challenge.id}>

//       <p><i className={challenge.icon}>{challenge.title}</i></p>
//       <p>{challenge.description}</p>
//     </li>
//   )
// })}
// </ul>