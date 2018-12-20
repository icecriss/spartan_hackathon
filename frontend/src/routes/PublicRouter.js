import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Welcome from '../components/welcome/Welcome';
import Intro from '../components/intro/Intro';
import Login from '../components/login/Login';
import UserDashboard from '../components/userDashboard/UserDashboard';
import ChallengeChoice from '../components/challenge/ChallengeChoice';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/intro" component={Intro} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={UserDashboard} />
        <Route exact path="/challenges" component={ChallengeChoice} />
        
      </Switch>
    )
  }
}

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => ({
  ...state
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));