import React, { Component } from 'react'
import { Form, Container, Input, Button, FormGroup } from 'reactstrap'

export default class EditProfile extends Component {
  render() {
    return (
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', marginBottom: '2em', borderRadius: '10px' }}>
          <Form>
            <div style={{ paddinTop: '2em' }}>
              <div className="row" style={{ paddingTop: '2em' }}>
                <div className="col-8" >
                  <div style={{ paddingLeft: '7em', paddingRight: '7em' }}>
                    <div>
                      <FormGroup>
                        <Input type="text" readOnly="read" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="text" readOnly="read" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="text" readOnly="read" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="text" name="collegeDegree" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="textarea" name="description" style={{ height: '5em' }}/>
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="text" name="linkedInUrl" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="text" name="facebookUrl" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="text" name="twiterUrl" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="text" name="isAvailable" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="textarea" name="availableDescription" style={{ height: '5em' }} />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="text" name="tecnologies" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="text" name="knowledges" />
                      </FormGroup>
                    </div>
                  </div>
                </div>
                <div className="col-4" style={{ textAlign: 'center' }}>
                  <Button color="success" style={{ width: '7em' }}>Update</Button>
                  <Button color="danger" style={{ marginLeft: '1em', width: '7em' }}>Cancel</Button>
                </div>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}