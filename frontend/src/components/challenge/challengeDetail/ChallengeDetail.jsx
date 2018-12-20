import React, { Component } from 'react';

import './challengeDetail.scss'


export default class ChallengeDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: "url",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut voluptatum, temporibus non quia et nihil possimus unde illo? Incidunt molestiae iure rerum non corporis voluptatem impedit consequatur in totam nobis.",
      unit: "ml",
      incrementValue: 50
    }
  }
  render() {
    return (
      <div className="challengeDetail-container">
        <div style={{ backgroundImage: `url(${require("../pictures/1-1.png")})` }} className="challentDetail-stat"></div>

        <div className="descritption">
          <p>{this.state.description}</p>
        </div>
        <div className="challentDetail-buttons">

          <i className="fas fa-minus-circle"></i>
          <div>
            <p>{this.state.incrementValue}</p>
            <p>{this.state.unit}</p>

          </div>

          <i className="fas fa-plus-circle"></i>


        </div>

      </div>
    )
  }
}
