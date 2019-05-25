import React, { Component } from 'react'
import { Container } from 'reactstrap'

export default class Developer extends Component {
  render() {
    return (
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', paddingTop: '2em', paddingBottom: '2em', marginTop: '4em', borderRadius: '10px' }}>
          <div>
            <div className="row">
              <div className="col-9">
                <p>Juan Cajamarca</p>
                <p>Tecnologies: Java</p>
                <p>Work Experience: NativApps</p>
                <p>Free Time: No</p>
              </div>
              <div className="col-3">
                <div>
                  <p>2019-02-29</p>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </div>
    )
  }
}