import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Navbar from '../../components/Recruiter/NavBar'

export default class Home extends Component{
  componentDidMount() {
    if (!localStorage.getItem('recruiterId')) {
      window.location = '/'
    }
  }

  render(){
    return(
      <div>
        <Navbar />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginLeft: '2em', marginRight: '2em', marginTop: '5em'}}>
            <div style={{textAlign: 'center', paddingTop: '3em', paddingBottom: '3em'}}>            
              <h3>Thank you for sign in. Enjoy!</h3>
            </div>
          </Container>
        </div>
      </div>
    )
  }
}