import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ProjectAdd from './components/ProjectAdd'
import Manage from './components/Manage'
import Analytics from './components/Analytics'
import Projects from './components/Projects'
import Signup from './components/Signup'
import Account from './components/Account'
import Help from './components/Main'
import ScrollToTop from './components/ScrollTop'

class Routes extends React.Component {
    render(){
      const { user, location } = this.props;
     return(
       <ScrollToTop>
         {
            user.active_app !== null || location.pathname === '/add-project' || location.pathname === '/signup' || location.pathname === '/signin' || location.pathname === '/help' ?
          (<Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/analytics' component={Analytics} />
                <Route exact path='/add-project' component={ProjectAdd} />
                <Route exact path='/manage-gates' component={Manage} />
                <Route exact path='/manage-account' component={Account} />
                <Route exact path='/docs' component={Help} />
          </Switch>)
          :
          <Projects />
         }
       </ScrollToTop>
     )   
  }
}
const mapStateToProps = (state) => ({
    user: state.user
})

export default withRouter(connect(mapStateToProps, {})(Routes));
  