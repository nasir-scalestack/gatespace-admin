/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProjectAdd from './components/ProjectAdd';
import Manage from './components/Manage';
import Analytics from './components/Analytics';
import Projects from './components/Projects';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Account from './components/Account';
// import Game from './components/Game';
import Help from './components/Main';
import requireAuth from './components/Auth/requireAuth';

import ScrollToTop from './components/ScrollTop';
import { fetchUser } from './redux/modules/auth';

class Routes extends React.Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={requireAuth(Dashboard)} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/analytics" component={requireAuth(Analytics)} />
          <Route
            exact
            path="/add-project"
            component={requireAuth(ProjectAdd)}
          />
          <Route exact path="/manage-gates" component={requireAuth(Manage)} />
          <Route
            exact
            path="/manage-account"
            component={requireAuth(Account)}
          />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/docs" component={Help} />
          <Route exact path="/projects" component={requireAuth(Projects)} />
        </Switch>
      </ScrollToTop>
    );
  }
}

export default withRouter(
  connect(
    null,
    { fetchUser }
  )(Routes)
);
