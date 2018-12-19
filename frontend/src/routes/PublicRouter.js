import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Welcome from '../components/welcome/Welcome';
import Intro from '../components/intro/Intro';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/Intro" component={Intro} />
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