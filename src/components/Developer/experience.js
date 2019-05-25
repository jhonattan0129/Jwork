import React, { Component } from 'react'
import { Container } from 'reactstrap'

export default class Experience extends Component {
  render() {
    return (
      <div >
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', marginBottom: '0.5em', borderRadius: '10px' }}>
          <div style={{ paddingTop: '1em', paddingBottom: '0.5em' }}>
            <p><b>Company: </b>{this.props.experience.company}</p>
            <p><b>Role: </b>{this.props.experience.role}</p>
            <p><b>Duration: </b>{this.props.experience.duration}</p>
          </div>
        </Container>
      </div>
    )
  }
}