import React, { Component } from 'react'
import { Container, Form, FormGroup, Button, Input } from 'reactstrap'
import request from 'superagent'

export default class CompleteSignInup extends Component {
  render() {
    return (
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', marginBottom: '2em', borderRadius: '10px' }}>
          <Form>
            <div style={{ paddingTop: '3em', paddingBottom: '3em', paddingLeft: '20em', paddingRight: '20em', textAlign: 'center' }}>
              <h4>Please Complete your Profile</h4>
              <div style={{ marginTop: '2em' }}>
                <FormGroup>
                  <Input type="textarea" placeholder="Description" style={{ height: '10em'}} name="description" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em' }}>
                <FormGroup>
                <Input type="textarea" placeholder="Biography" style={{ height: '10em'}} name="bio" />
                </FormGroup>
              </div>              
              <div style={{ marginTop: '1.5em' }}>
                <Button style={{ width: '15em' }}>Complete</Button>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}