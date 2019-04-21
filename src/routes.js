import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'
import Cards from './components/Cards'
import Projects from './components/Projects'
import Main from './components/Main'
import Signup from './components/Signup'
import ScrollToTop from './components/ScrollTop'

class Routes extends React.Component {
    render(){
     const { user } = this.props;
     return(
     <HashRouter>
       <ScrollToTop>
         <Switch>
            <Route exact path='/' render={ () => user.active_app === null ? <Redirect to="/projects" /> : <Main />} />
            <Route exact path='/projects' component={ Projects } />
            <Route exact path='/dashboard' render={() => user.active_app === null ? <Redirect to="/projects" /> : <Dashboard />} />
            <Route exact path='/signup' render={() => user.active_app === null ? <Redirect to="/projects" /> : <Signup />} />
            <Route exact path='/wizard' render={() => user.active_app === null ? <Redirect to="/projects" /> : <Wizard />} />
            <Route exact path='/cards' render={ () => user.active_app === null ? <Redirect to="/projects" /> : <Cards />} />
         </Switch>
       </ScrollToTop>
     </HashRouter>
     )   
  }
}
const mapStateToProps = (state) => ({
    user: state.user
  })

export default connect(mapStateToProps, {})(Routes);
  