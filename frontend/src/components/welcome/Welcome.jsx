import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import './welcome.scss'
import logoWelcomeNoir from '../pictures/welcomeLogoNoir.png'

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome-container">
        <img className="welcome-logo" src={logoWelcomeNoir} alt="perception-logo" />
        <h1>Découvre ton monde intérieur</h1>
        <NavLink to="/intro" className="welcome-link">Enter</NavLink>
      </div>
      // <div className="welcome-container">
      //   <img className="welcome-logo" src={logoWelcomeNoir} alt="perception-logo" />
      //   <div className="welcome-entrance">
      //     <h1>Découvre ton monde intérieur</h1>
      //     <NavLink to="/intro" className="welcome-link">
      //       <div className="welcome-button">Enter</div>
      //     </NavLink>
      //   </div>
      // </div>
    )
  }
}




