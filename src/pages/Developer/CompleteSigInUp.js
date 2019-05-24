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
              <h4>Complete your Profile</h4>
              <div style={{ marginTop: '2em' }}>
                <FormGroup>
                  <Input type="text" placeholder="College Degree" name="collegeDegree" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em' }}>
                <FormGroup>
                  <Input type="text" placeholder="Description" name="escription" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em' }}>
                <FormGroup>
                  <Input type="text" placeholder="LinkedIn URL" name="linkedInUrl" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em' }}>
                <FormGroup>
                  <Input type="text" placeholder="Facebook URL" name="facebookUrl" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em' }}>
                <FormGroup>
                  <Input type="text" placeholder="Twiter URL" name="twiterUrl" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '2em' }}>
                <p style={{ textAlign: 'left' }}>Separate the Technologies by comma (,):</p>
                <FormGroup>
                  <Input type="text" placeholder="Technologies" name="technologies" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '2em' }}>
                <p style={{ textAlign: 'left' }}>Separate the Knowledges by comma (,):</p>
                <FormGroup>
                  <Input type="text" placeholder="Knowledges" name="knowledges" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em' }} >
                <FormGroup>
                  <Input type="text" placeholder="Is Available" name="isAvailable" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '2em' }}>
                <p style={{ textAlign: 'left' }}>Optional:</p>
                <FormGroup>
                  <Input type="text" placeholder="Available Descripción" name="descriptionAvailable" />
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