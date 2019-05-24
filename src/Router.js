import React, { Component } from 'react'
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom'
import App from './App'

import Home from './pages/Home'

import RecuiterSigInUp from './pages/Recruiter/SignUp'
import RecuiterLogIn from './pages/Recruiter/LogIn'
import RecruiterHome from './pages/Recruiter/Home'
import RecruiterProfile from './pages/Recruiter/Profile'
import RecruiterEditProfile from './pages/Recruiter/EditProfile'
import RecruiterSearchDeveloper from './pages/Recruiter/SearchDeveloper'
import RecruiterViewDeveloper from './pages/Recruiter/ViewDeveloper'

import DeveloperSignInUp from './pages/Developer/SignUp'
import DeveloperCompleteSignInUp from './pages/Developer/CompleteSigInUp'
import DeveloperLogIn from './pages/Developer/LogIn'
import DeveloperHome from './pages/Developer/Home'
import DeveloperProfile from './pages/Developer/Profile'
import DeveloperEditProfile from './pages/Developer/EditProfile'
import DeveloperSearchRecruiter from './pages/Developer/SearchRecruiter'
import DeveloperViewRecruiter from './pages/Developer/ViewRecruiter'

export default class Router extends Component {
  render() {
    return (
      <ReactRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Home}/>
            
            <Route exact path="/recruiter/siginup" component={RecuiterSigInUp}/>
            <Route exact path="/recruiter/login" component={RecuiterLogIn}/>
            <Route exact path="/recruiter/home" component={RecruiterHome}/>
            <Route exact path="/recruiter/me" component={RecruiterProfile}/>
            <Route exact path="/recruiter/me/edit" component={RecruiterEditProfile}/>
            <Route exact path="/recruiter/search" component={RecruiterSearchDeveloper}/>
            <Route path="/recruiter/search/developer/:id" component={RecruiterViewDeveloper}/>

            <Route exact path="/developer/siginup" component={DeveloperSignInUp}/>
            <Route exact path="/developer/complete/siginup" component={DeveloperCompleteSignInUp}/>
            <Route exact path="/developer/login" component={DeveloperLogIn}/>
            <Route exact path="/developer/home" componenet={DeveloperHome}/>
            <Route exact path="/developer/me" componenet={DeveloperProfile}/>
            <Route exact path="/developer/me/edit" componenet={DeveloperEditProfile}/>
            <Route exact path="/developer/search" componenet={DeveloperSearchRecruiter}/>
            <Route path="/developer/search/recruiter/:id" componenet={DeveloperViewRecruiter}/>

          </Switch>
        </App>

      </ReactRouter>
    )
  }
}