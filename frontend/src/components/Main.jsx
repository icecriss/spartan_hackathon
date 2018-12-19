import React, { Component } from 'react';
import Welcome from './Welcome/Welcome.jsx'
import './main.scss';
import Intro from './intro/Intro';

export default class Main extends Component {
  render() {
    return (
      <div className="main-screen">
        <div className="app-container">
      <Welcome/>
        </div>
      </div>
    )
  }
}
