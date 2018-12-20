import React, { Component } from 'react';

//TEST

import challengeouille from '../challenge.json';

import './challengesStarted.scss';

export default class Challenge extends Component {
  render() {
    return (
      <div className="challenge-container">
        <ul className="challenge-option1">
          {challengeouille.map((challenge) => {
            return (
              <li className={challenge.color} key={challenge.id}>

                <p><i className={challenge.icone}>{challenge.name}</i></p>
                <p>{challenge.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
