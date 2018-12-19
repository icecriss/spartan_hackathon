import React, { Component } from 'react';
import Welcome from './welcome/Welcome.jsx'
import './main.scss';
import Intro from './intro/Intro';
import PublicRouter from '../routes/PublicRouter';

export default class Main extends Component {
  render() {
    return (
      <div className="main-screen">
        <div className="app-container">
          <PublicRouter />
        </div>
      </div>
    )
  }
}
