import React, { Component } from 'react'
import { addToStartedChallenge } from '../../stores/actions/challengeActions'
import { connect } from 'react-redux'
//import { NavLink } from 'react-router-dom'
import './challengeChoice.scss'

export class ChallengeChoice extends Component {

 

  /// reprendre la fabrication de la route qui lance le defiDSOlo injectée des données en fonctions de son id
  render() {
    return (
      <div className="challengeChoice-container">
        {
          this.props.challenges.allChallenges.map((challenge) => {
            return <div className="challenge-preview" style={{backgroundColor:`${challenge.couleur}`}}>
          
                      <ul className="chalenge-preview-list">
                          <li>
                            <div>
                              <h3>{challenge.titre}</h3>
                                <label htmlFor="checkbox">Choisir ce Challenge</label>
                                <input 
                                  ClassName="checkbox"
                                  type="checkbox"
                                  id="checkbox"
                                  onClick={() => this.props.addToStartedChallenge(challenge)}
                                 // onChange={(e) => this.addToSelected(e)}
                                  
                                />
                            </div>
                          </li>
                      </ul>
                     
                    </div>
          })
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  addToStartedChallenge
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeChoice)

