import React, { Component } from 'react'

import './userDashboard.scss';

import mario1 from '../pictures/mario1.png';
import mario2 from '../pictures/mario2.png';
import mario3 from '../pictures/mario3.png';
import Challenge1 from './Challenge';
import Challenge2 from './Challenge2';

export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      image1: mario1,
      image2: mario2,
      image3: mario3,
      currentImage: 2,
    }
  }


  render() {
    return (
      <div className="dash-container">
        <img className="dash-character" src={this.state[`image${this.state.currentImage}`]} />
        <h2 className="dash-username">Mario</h2>
        <ul className="dash-userScore">
          <li>Un</li>
          <li className="dash-userScoreCenter">Deux</li>
          <li>Trois</li>
        </ul>
        <div className="dash-challengesContainer">
          <h3>Challenges en cours</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eius corporis praesentium reprehenderit sed aliquam nihil, blanditiis porro consequatur autem officiis laborum possimus facere, esse fuga sequi quidem sunt repudiandae!</p>

          {this.state.currentImage === 1 && <Challenge1 />}
          {this.state.currentImage === 2 && <Challenge2 />}
        </div>
      </div>
    )
  }
}
