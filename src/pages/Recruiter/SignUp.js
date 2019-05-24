import React, { Component } from 'react'
import { Container, Input, Form, Button, FormGroup } from 'reactstrap'
import request from 'superagent'

export default class SignUp extends Component{
  render(){
    return(
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', marginBottom: '2em', borderRadius: '10px' }}>
          <Form>
            <div style={{ textAlign: 'center', paddingTop: '3em', paddingBottom: '3em', paddingLeft: '20em', paddingRight: '20em'}}>
              <h4>SignUp Recruiter</h4>
              <div style={{ marginTop: '2em'}}>
                <FormGroup>
                  <Input type="text" placeholder="Name" name="firstName"/>
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em'}}>
                <FormGroup>
                  <Input type="text" placeholder="LastName" name="lastName" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em'}}>
                <FormGroup>
                  <Input type="email" placeholder="Email" name="email" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em'}}>
                <FormGroup>
                  <Input type="password" placeholder="Password" name="password" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '2em'}}>
                <Button type="submit" style={{ width: '15em' }}>Enter</Button>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}