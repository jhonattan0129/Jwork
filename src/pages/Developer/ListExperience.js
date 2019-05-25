import React, { Component } from 'react'
import Experience from '../../components/Developer/experience'
import { Container } from 'reactstrap'
export default class LisProject extends Component{
  /* listProjects(){
      if(){}
  } */
  render() {    
    return(
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', paddingTop: '2em', paddingBottom: '2em', marginTop: '4em', borderRadius: '10px' }}>
          <h4>Work Experience List</h4>
          <div style={{  marginLeft: '15em', marginRight: '15em' }}>
            <Experience />
          </div>
        </Container>
      </div>
    )
  }
}