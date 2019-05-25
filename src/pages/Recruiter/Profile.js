import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class ViewDeveloper extends Component {
  render() {
    return (
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', paddingBottom: '2em', borderRadius: '10px' }}>
          <div style={{ paddingTop: '2em' }}>
            <div className="row">
              <div className="col-3">
              </div>
              <div className="col-6">
                <h4 style={{ color: 'black' }}>Name</h4>
                <h5>LastName</h5>
                <p>University tittle</p>
              </div>
              <div className="col-3">
                <div style={{ alignItems: 'center', textAlign: 'center' }}>
                  <Link to="/recruiter/me/edit">
                    <img src={process.env.PUBLIC_URL + '/images/edit.png'} style={{ width: '1em' }} />
                  </Link>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: '2em' }}>
              <h5>Biography:</h5>
              <p></p>
              <h5>Description:</h5>
              <p></p>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}