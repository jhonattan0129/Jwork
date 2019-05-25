import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'

export default class Test extends Component {
  render() {
    return (
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', marginBottom: '2em', borderRadius: '10px' }}>
          <div style={{ marginLeft: '1em', paddingTop: '1em', paddingBottom: '1em'}}>
            <div>
              <Link style={{ borderBottom: '1px solid black', color: 'black' }} to="/developer/certification/react">
                <p>React <img src={process.env.PUBLIC_URL + '/images/check.png'} style={{ width: '1em' }} /></p>
              </Link>
            </div>
            <div>
              <Link style={{ color: 'black' }} to="/developer/certification/python">
                <p>Python <img src={process.env.PUBLIC_URL + '/images/check.png'} style={{ width: '1em' }} /></p>
              </Link>
            </div>
            <div>
              <Link style={{ color: 'black' }} to="/developer/certification/java">
                <p>Java <img src={process.env.PUBLIC_URL + '/images/check.png'} style={{ width: '1em' }} /></p>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}