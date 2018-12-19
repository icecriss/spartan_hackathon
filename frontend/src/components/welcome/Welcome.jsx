import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import './welcome.scss'
import logoWelcomeNoir from '../pictures/welcomeLogoNoir.png'

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome-container">
        <img className="welcome-logo" src={logoWelcomeNoir} alt="perception-logo" />
        <h1>Decouvre ton monde intérieur</h1>
        <NavLink to="/intro">Entrer</NavLink>
      </div>
    )
  }
}




