import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import './intro.scss';
import yoda1 from '../pictures/1-1.png';
import yoda2 from '../pictures/2-2.png';

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step1: "Ton mini toi à besoin de ton aide!",
      step2: "Il doit accomplir des actions pour évoluer...",
      step3: "En accomplissant des missions, tu permets à ton \"mini toi\" d'évoluer",
      step4: "Te sent tu prêt de mener à bien cette Mission?",
      currentStep: 1,
      image1: yoda1,
      image2: yoda2,
      currentImage: 1,
      buttonValue: "Continuer",
      showPasserIntro: true,
    }
  }

  upStep = () => {

    if (this.state.currentStep === 2) {
      this.setState({
        currentImage: this.state.currentImage + 1
      })
    }
    if (this.state.currentStep === 3) {
      this.setState({
        buttonValue: "Démarrrer",
        showPasserIntro: false
      })
    }
    this.setState({
      currentStep: this.state.currentStep + 1
    })
  }


  render() {
    let bienvenue;
    if (this.state.currentStep === 1) {
      bienvenue = 'Bienvenue'
    }
    let button;
    if (this.state.currentStep === 4) {
      button = <NavLink className="intro-button" to="/login">{this.state.buttonValue}</NavLink>
    } else {
      button = <p className="intro-button" onClick={this.upStep}>{this.state.buttonValue}</p>
    }
    return (
      <div className="intro-container">
        <div className="intro-container-opacity"></div>
        <img className="introCharacter" src={this.state[`image${this.state.currentImage}`]} />
        <h2>{bienvenue}</h2>
        <p>{this.state[`step${this.state.currentStep}`]}</p>
        {button}
        {this.state.showPasserIntro && <NavLink className="intro-skip" to="/login">Skip</NavLink>}

      </div>
    )
  }
}
