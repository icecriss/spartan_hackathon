import React, { Component } from 'react';
import './welcome.scss'
import logoWelcome from './welcomePictures/welcomeLogo.png'

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome-container">
         <img className="welcome-logo" src={logoWelcome}/>
      </div>
    )
  }
}




