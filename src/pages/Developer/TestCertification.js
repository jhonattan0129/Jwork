import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Test from '../../components/Developer/test'

export default class TestCertification extends Component{
  render() {
    return(
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em',paddingBottom: '3em', marginBottom: '2em', borderRadius: '10px' }}>
          <div style={{ paddingTop: '2em' }}>
            <h4>Test Certification</h4>
            <div style={{ width: '25em'}}>
              <h5>Knowledges</h5>
              <Test></Test>              
            </div>
          </div>
          <p style={{ textAlign: 'center' }}><img src={process.env.PUBLIC_URL + '/images/small.png'} /></p>
        </Container>
        
      </div>
    )
  }
}