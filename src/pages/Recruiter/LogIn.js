import React, { Component } from 'react'
import { Container, Form, FormGroup, Button, Input } from 'reactstrap'
import request from 'superagent'

export default class LogIn extends Component{
  render(){
    return(
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '5em', marginBottom: '2em', borderRadius: '10px' }}>
          <Form>
            <div style={{ paddingTop: '3em', paddingBottom: '3em', paddingLeft: '20em', paddingRight: '20em', textAlign: 'center'}}>
              <h4>Enter as a Recruiter</h4>
              <div style={{ marginTop: '2em'}}>
                <FormGroup>
                  <Input placeholder="Email" type="email" name="email" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em'}}>
                <FormGroup>
                  <Input placeholder="Password" type="password" name="password" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '2em'}}>
                <Button style={{ width: '15em'}}>Enter</Button>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}