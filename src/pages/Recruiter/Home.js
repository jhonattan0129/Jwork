import React, { Component } from 'react'
import { Container } from 'reactstrap'
export default class Home extends Component{
  render(){
    return(
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginLeft: '2em', marginRight: '2em', marginTop: '5em'}}>
          <div style={{textAlign: 'center', paddingTop: '3em', paddingBottom: '3em'}}>            
            <h3>Gracias Por Registarte en Nuestra pagina</h3>
            <h2>{localStorage.getItem('name')}</h2>
          </div>
        </Container>
      </div>
    )
  }
}