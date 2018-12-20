import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './login.scss'
import logoWelcomeNoir from '../pictures/welcomeLogoNoir.png'
import { connect } from 'react-redux'
import { usernameAction } from '../../stores/actions/username.js'


export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      challengesList: [
        {
          "id": 1,
          "title": "Boire 2L d’eau par jour",
          "description": "L’eau représente entre 50 et 75% de nos corps. Pense ton corps, hydrate-toi ! C’est une des habitudes les plus simples et les plus saines adopter.",
          "couleur": "#3498DB",
          "goal": 2,
          "icon": "fas fa-user-alt",
          "unit": "Litre"
        },
        {
          "id": 2,
          "title": "Marcher 30 min par jour",
          "description": "Plus tu marches, plus tu brûles de calories.",
          "couleur": "#E74C3C",
          "goal": 30,
          "icon": "fas fa-user-alt",
          "unit": "min"
        },
        {
          "id": 3,
          "title": "Manger 5 fruits/ légumes par jour",
          "description": "Les fruits et légumes apportent vitamines, minéraux, fibre, etc. et sont indispensable pour une bonne santé. Les médecins en recommandent souvent au moins 5 par jour.",
          "couleur": "#E67E22",
          "goal": 5,
          "icon": "fas fa-user-alt",
          "unit": "Fruits et/où légumes"
        },
        {
          "id": 4,
          "title": "Méditer 15 min par jour",
          "description": "La méditation est excellente pour ta santé physique et mentale. Fixe-toi un objectif en nombre minutes ou d’heure.",
          "couleur": "#2ECC71",
          "goal": 15,
          "icon": "fas fa-user-alt",
          "unit": "Minutes"
        },
        {
          "id": 5,
          "title": "Lire 15 min par jour",
          "description": "Lire régulièrement est une excellente habitude qui te donne accès à une quantité immense de connaissances et d’expériences. Pour un objectif de nombre de livres lus, utilise l'objectif « Lire des livres",
          "couleur": "#9B59B6",
          "goal": 15,
          "icon": "fas fa-user-alt",
          "unit": "Minutes"
        },
        {
          "id": 6,
          "title": "Exprimer ma gratitude ",
          "description": "Exprimer ta gratitude est un excellent exercice que tu peux faire chaque jour. Cela rend plus optimiste et réduit la négativité.",
          "couleur": "#9B59B6",
          "objectif": "15",
          "icon": "fas fa-user-alt",
          "unit": "Minutes"
        },
        {
          "id": 7,
          "title": "Dire mes affirmations 2 par jour",
          "description": "Les affirmations positives sont des phrases que l’on dit, souvent de bon matin, pour recadrer notre esprit d’une manière positive et constructive.",
          "couleur": "#E74C3C",
          "objectif": 2,
          "icon": "fas fa-user-alt",
          "unit": "Nombre"
        },
        {
          "id": 8,
          "title": "Travailler pour soi",
          "description": "Travailler pour soi, permet de faire évoluer ses projets et ses besoins.",
          "couleur": "#E67E22",
          "objectif": 1,
          "icon": "fas fa-user-alt",
          "unit": "Heure"
        },
        {
          "id": 9,
          "title": "Passer du temps dans la nature",
          "description": "Si tu vis en ville, sors-en régulièrement pour respirer l’air pur, admirer la beauté de la nature et réduire ton stress.",
          "couleur": "#2ECC71",
          "objectif": "15",
          "icon": "fas fa-user-alt",
          "unit": "Minutes"
        },
        {
          "id": 10,
          "title": " Se limiter le temps passer sur les réseaux",
          "description": "Réduire sont temps passer sur les réseaux sociaux, peut libéré du temps pour passer du temps en famille ou tout autres activité.",
          "couleur": "#9B59B6",
          "goal": 2,
          "icon": "fas fa-user-alt",
          "unit": "Heure (max)"
        }
      ]
    }
  }

  signUser(e) {
    e.preventDefault()
    this.props.usernameAction(this.state)
    this.props.history.push('/dashboard')
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
            onChange={(e) => this.setState({ username: e.target.value })}>
          </input>

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

        <a onClick={(e) => this.signUser(e)} className="login-button">Entrer</a>

      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  usernameAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)