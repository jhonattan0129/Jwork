import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'
import NavBar from '../components/NavBar'

export default class Home extends Component{
  signInUpRecruiter(){
    window.location='/recruiter/siginup'
  }
  signInUpDeveloper(){
    window.location='/developer/siginup'
  }
  render(){
    return(
      <div>
        <NavBar />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginLeft: '2em', marginRight: '2em', marginTop: '5em', paddingBottom: '5em'}}>
            <div style={{textAlign: 'center', paddingTop: '3em', paddingBottom: '3em'}}>            
              <h3>Welcome to Jwork!</h3>
              <img src={process.env.PUBLIC_URL + '/images/jwork.png'} />
            </div>
            <div style={{ textAlign: 'center'}}>
              <p>Meet a new world Register now</p>
              <div>
                <Button color="primary" onClick={this.signInUpRecruiter}>SignIn Up Recruiter</Button>
                <Button color="primary" onClick={this.signInUpDeveloper} style={{ marginLeft: '1em' }}>SignIn Up Developer</Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    )
  }
}