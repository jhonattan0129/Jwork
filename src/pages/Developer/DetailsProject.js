import React, { Component } from 'react'
import { Container } from 'reactstrap'
export default class DetailsProjects extends Component{
  render(){
    return(
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', paddingTop: '2em', paddingBottom: '2em', marginTop: '4em', borderRadius: '10px' }}>
          <div style={{ marginLeft: '2em' }}> 
            <h7>Name:</h7>
            <p></p>
            <h7>Url:</h7>
            <p></p>
            <h7>Repository:</h7>
            <p></p>
            <h7>Description:</h7>
            <p></p>
            <h7>Status:</h7>
            <p></p>
            <h7>End Date:</h7>
            <p></p>
          </div>
        </Container>
      </div>
    )
  }
}