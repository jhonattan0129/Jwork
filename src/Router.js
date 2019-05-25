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
import RecruiterCompleteSignInUp from './pages/Recruiter/CompleteSignInUp'

import DeveloperSignInUp from './pages/Developer/SignUp'
import DeveloperCompleteSignInUp from './pages/Developer/CompleteSigInUp'
import DeveloperLogIn from './pages/Developer/LogIn'
import DeveloperHome from './pages/Developer/Home'
import DeveloperProfile from './pages/Developer/Profile'
import DeveloperEditProfile from './pages/Developer/EditProfile'
import DeveloperViewRecruiter from './pages/Developer/ViewRecruiter'
import DeveloperProjects from './pages/Developer/Projects'
import DeveloperWorkExperience from './pages/Developer/WorkExperience'
import DeveloperLisProjects from './pages/Developer/ListProjects'
import DeveloperListWorkExperience from './pages/Developer/ListExperience'
import DetailsExperience from './pages/Developer/DetailsExperience'
import DetailsProjects from './pages/Developer/DetailsProject'
import TestCertification from './pages/Developer/TestCertification'

import TestReact from './pages/Developer/certification/React'
import TestJava from './pages/Developer/certification/Java'
import TestPython from './pages/Developer/certification/Python'

import Chat from './pages/Chat';
import Messages from './pages/ChatPages'


export default class Router extends Component {
  render() {
    return (
      <ReactRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Home}/>
            
            <Route exact path="/recruiter/siginup" component={RecuiterSigInUp}/>
            <Route exact path="/recruiter/complete/siginup" component={RecruiterCompleteSignInUp}/>
            <Route exact path="/recruiter/login" component={RecuiterLogIn}/>
            <Route exact path="/recruiter/home" component={RecruiterHome}/>
            <Route exact path="/recruiter/me" component={RecruiterProfile}/>
            <Route exact path="/recruiter/me/edit" component={RecruiterEditProfile}/>
            <Route exact path="/recruiter/search" component={RecruiterSearchDeveloper}/>
            <Route path="/recruiter/search/developer/:id" component={RecruiterViewDeveloper}/>

            <Route exact path="/developer/siginup" component={DeveloperSignInUp}/>
            <Route exact path="/developer/complete/siginup" component={DeveloperCompleteSignInUp}/>
            <Route exact path="/developer/login" component={DeveloperLogIn}/>
            <Route exact path="/developer/" component={DeveloperHome}/>
            <Route exact path="/developer/me" component={DeveloperProfile}/>
            <Route exact path="/developer/me/edit" component={DeveloperEditProfile}/>
            <Route path="/developer/search/recruiter/:id" component={DeveloperViewRecruiter}/>
            <Route exact path="/developer/createProject" component={DeveloperProjects}/>
            <Route exact path="/developer/workExperience" component={DeveloperWorkExperience}/>
            <Route exact path="/developer/projects/view" component={DeveloperLisProjects}/>
            <Route exact path="/developer/workExperience/view" component={DeveloperListWorkExperience}/>
            <Route path="/developer/experience/details/:id" component={DetailsExperience} />
            <Route path="/developer/project/details/:id" component={DetailsProjects} />
            <Route exact path="/developer/certification" component={TestCertification} />

            <Route exact path="/developer/certification/react" component={TestReact} />
            <Route exact path="/developer/certification/java" component={TestJava} />
            <Route exact path="/developer/certification/python" component={TestPython} />

            <Route exact path="/chat" component={Chat} />
            <Route exact path="/messages" component={Messages} />
          </Switch>
        </App>

      </ReactRouter>
    )
  }
}