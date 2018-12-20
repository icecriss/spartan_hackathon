import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './login.scss'
import logoWelcomeNoir from '../pictures/welcomeLogoNoir.png'


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }

  }
  render() {
    return (
      <div className="login-container">
        <img className="login-logo" src={logoWelcomeNoir} alt="perception-logo" />

        <div className="login-field-container">

          <input
            type="text"
            value={this.state.username}
            name="text"
            className="username-field"
            id="username-field"
            placeholder="Nom d'utilisateur"
            onChange={(e) => this.setState({ username: e.target.value })}></input>

          <input
            type="password"
            value={this.state.password}
            name="password"
            className="password-field"
            id="password-field"
            placeholder="Mot de passe"
            onChange={(e) => this.setState({ password: e.target.value })}>
          </input>

        </div>

        <NavLink className="login-button" to="/dashboard">Entrer</NavLink>

      </div>

    )
  }
}