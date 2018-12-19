import React, { Component } from 'react';
import './main.scss';
import Intro from './intro/Intro';

export default class Main extends Component {
  render() {
    return (
      <div className="main-screen">
        <div className="app-container">
          <Intro />
        </div>
      </div>
    )
  }
}
