import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import './intro.scss';
import yoda1 from '../pictures/storyYoda1.png';

export default class Intro extends Component {
  render() {
    return (
      <div className="intro-container">
        <img className="introCharacter" src={yoda1} />
        <div className="intro-story">
          <p>Voici une ligne de texte qui donne envie de cliquer pour en voir une nouvelle</p>
        </div>
        <NavLink to="/login">Démarrer</NavLink>
        <NavLink to="/login">Passer l'intro</NavLink>
      </div>
    )
  }
}
