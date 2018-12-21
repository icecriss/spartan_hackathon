import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

import './challengeEmpty.scss';

export default class Challenge extends Component {
  render() {
    return (
      <div className="challenge-container">
        <div className="chal-empty">

          <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Loudly_Crying_Face_Emoji_large.png?v=1480481054" />
          <div className="challenge-EmptyText">
            <p>Vous n'avez aucun défi en cours</p>
            <NavLink to='/challenges'><i className="fas fa-plus-circle"></i></NavLink>
          </div>
        </div>
      </div>
    )
  }
}
