import React, { Component } from 'react'
import { Container, Form, FormGroup, Button, Input } from 'reactstrap'
export default class ViewDeveloper extends Component {
  cancel(){
    window.location ='/recruiter/me'
  }
  render() {
    return (
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', paddingBottom: '2em', borderRadius: '10px' }}>
          <Form>
            <div>
              <div className="row" style={{ paddingTop: '3em' }}>
                <div className="col-8">
                  <div style={{ paddingLeft: '8em', paddingRight: '8em' }}>
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
                        <Input type="textarea" name="description" style={{ height: '7em' }} />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="textarea" name="biography" style={{ height: '7em' }} />
                      </FormGroup>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <Button color="success"  style={{ width: '7em' }}>Update</Button>
                  <Button color="danger" onClick={this.cancel} style={{ marginLeft: '1em', width: '7em' }}>Cancel</Button>
                </div>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}