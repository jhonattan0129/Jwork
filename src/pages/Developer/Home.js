import React, { Component } from 'react'
import { Container } from 'reactstrap'
import NavBar from '../../components/Developer/NavBar'
export default class Home extends Component{
  componentDidMount() {
    if (!localStorage.getItem('id')) {
      window.location = '/'
    }
  }

  render(){
    return(
      <div>
        <NavBar></NavBar>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '5em'}}>
          <div style={{textAlign: 'center', paddingTop: '3em', paddingBottom: '3em'}}>            
            <h3>Thank you for Sign up. Enjoy!</h3>
          </div>
        </Container>
      </div>
    )
  }
}