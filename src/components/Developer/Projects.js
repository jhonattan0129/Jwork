import React, { Component } from 'react'
import { Container } from 'reactstrap'

export default class Projects extends Component {
  render() {
    return (
      <div >
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', marginBottom: '1em', borderRadius: '10px' }}>
          <div className="row" style={{ paddingTop: '1em' }}>
            <div className="col-9">
              <div>
                <p>Name Project</p>
                <p>url</p>
                <p>Repository</p>
              </div>
            </div>
            <div className="col-3" style={{ textAlign: 'right' }}>
              <div style={{ marginRight: '2em' }}>
                <p>status</p>
                <p>date</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}