import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import Intro from '../components/intro/Intro';
import { connect } from 'react-redux';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Intro} />
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