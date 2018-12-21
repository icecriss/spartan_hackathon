import React, { Component } from 'react'
import { addToStartedChallenge } from '../../stores/actions/challengeActions'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
//import { NavLink } from 'react-router-dom'
import './challengeChoice.scss'

//
class AnimatedItems extends Component {
  componentDidMount() {
    this.initialPositions = this.getElementPositions();
  }

  componentDidUpdate(prevProps) {
    let newChild = null;
    let newPositions;

    // Check if new item has been added
    if (prevProps.children.length !== this.props.children.length) {
      newChild = this.returnNewChild(prevProps);
      newPositions = this.getElementPositions(newChild);
    }
    else {
      newPositions = this.getElementPositions();
    }

    Object.keys(newPositions).forEach(key => {
      const newData = newPositions[key];
      let prevData;
      let deltaX;
      let deltaY;

      if (newData.isNewElement) {
        deltaX = 0;
        deltaY = -newData.clientRect.height / 4;
      }
      else {
        prevData = this.initialPositions[key];
        deltaX = prevData.clientRect.left - newData.clientRect.left;
        deltaY = prevData.clientRect.top - newData.clientRect.top;
      }

      requestAnimationFrame(() => {
        const child = this.container.children[newData.index];
        child.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
        child.style.transition = 'all 0s';
        if (newData.isNewElement) {
          child.style.opacity = '0';
        }

        requestAnimationFrame(() => {
          child.style.transition = 'all 0.5s';
          child.style.transform = 'translate3d(0, 0, 0)';
          if (newData.isNewElement) {
            child.style.opacity = '1';
          }
        });

      });
    });
    this.initialPositions = newPositions;
  }

  render() {
    return (
      <div ref={el => this.container = el} className='item-container'>
        {this.props.children}
      </div>
    );
  }

  // find new child that was added to the dom by diff against initial values on mount
  returnNewChild = (prevProps) => {
    return this.props.children.filter(item => {
      const isMatch = prevProps.children.some(prevItem => {
        return item.key === prevItem.key;
      });
      if (!isMatch) {
        return item;
      }
    })
  }

  getElementPositions = (newChild = null) => {
    const { children } = this.props;
    const data = Array.from(this.container.children).reduce((obj, el, index) => {
      obj[children[index].key] = {
        index,
        clientRect: el.getBoundingClientRect(),
        isNewElement: newChild ? newChild[0].key === children[index].key : false,
      };
      return obj;
    }, {});
    return data;
  }
}



export class ChallengeChoice extends Component {
  state = {
    items: [

    ]
  };


  shuffle = () => {
    const shuffledItems = this.shuffleArray();
    this.setState({
      items: shuffledItems
    });
  }


  shuffleArray = () => {
    let array = this.props.challenges.allChallenges;
    console.log(array);
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  /// reprendre la fabrication de la route qui lance le defiDSOlo injectée des données en fonctions de son id
  render() {
    const { items } = this.state;
    return (
      <div className="challengeChoice-container">
        {/* <AnimatedItems>
          {this.sta(challenge => (
            <div key={challenge.id} className={'item'}>{challenge.titre}</div>
            ))}
          </AnimatedItems> */}
        <div className="challengeChoice-header">
          <NavLink to={`./dashboard`}><i class="fas fa-chevron-left"></i></NavLink>
          <p>Choisir vos challenges</p>
        </div>



        <ul className="chalenge-preview-list">

          {this.props.challenges.allChallenges.map((challenge, index) => {
            if (index < 5) {
              return (
                <li className="challenge-preview" style={{ backgroundColor: `${challenge.couleur}` }}>
                  <div className="challenge-icon">
                    <i className={challenge.icon}></i>
                  </div>
                  <div className="challenge-text">
                    <h3>{challenge.titre}</h3>
                    <input
                      ClassName="checkbox"
                      type="checkbox"
                      id="checkbox"
                      onClick={() => this.props.addToStartedChallenge(challenge)}
                    // onChange={(e) => this.addToSelected(e)}
                    />
                  </div>
                </li>
              )
            }
          })}
        </ul>

        <div className='btn-container'>
          <button className='btn' onClick={this.shuffle}>Jouer à nouveau</button>

          <NavLink to={`./dashboard`}><button className='btn btn2'>Voir mes défis</button>
          </NavLink>
        </div>

      </div >
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

