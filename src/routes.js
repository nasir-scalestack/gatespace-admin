import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ProjectAdd from './components/ProjectAdd'
import Manage from './components/Manage'
import Projects from './components/Projects'
// import Main from './components/Main'
import Signup from './components/Signup'
import ScrollToTop from './components/ScrollTop'

class Routes extends React.Component {
    render(){
      const { user, location } = this.props;
     return(
       <ScrollToTop>
         {
            user.active_app !== null || location.pathname === '/add-project' ?
          (<Switch>
                <Route exact path='/dashboard' component={Dashboard}/>
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/add-project' component={ProjectAdd} />
                <Route exact path='/manage-gates' component={Manage} />
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
  