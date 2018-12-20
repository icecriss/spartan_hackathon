import React, { Component } from 'react';
import { connect } from 'react-redux'
import './challengesStarted.scss';


export class Challenge extends Component {
  render() {
    console.log("ici", this.props)
    return (
      <div className="challenge-container">
       {
        this.props.challenges.startedChallenges.map((challenge) => {
          return <li> {challenge.titre}</li>
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