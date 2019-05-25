import React, { Component } from 'react'
import { Container, Form, FormGroup, Input, Button } from 'reactstrap'


export default class Projects extends Component {
  createProject(evt){
    evt.preventDefault()
  }
  render() {
    return (
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', paddingTop: '4em', paddingBottom: '4em', marginTop: '2em', borderRadius: '10px' }}>
          <Form onSubmit={ this.createProject.bind(this) }>
            <div style={{ paddingTop: '2em' }}>
              <div className="row">
                <div className="col-8">
                  <div style={{ marginLeft: '2em', paddingLeft: '7em', paddingRight: '7em'}}>
                    <div>
                      <FormGroup>
                        <Input type="text" placeholder="Tittle" name="tittle" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="text" placeholder="Url" name="url" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="text" placeholder="Repository" name="repository" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="textarea" placeholder="Description" name="description" style={{ height: '7em'}} />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <p>(In progress or Finished)</p>
                        <Input type="text" placeholder="Status" name="status" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <p>End Date:</p>
                        <Input type="date" placeholder="Date" name="date" />
                      </FormGroup>
                    </div>
                  </div>
                </div>
                <div className="col-4" style={{ textAlign: 'center' }} >
                  <Button color="success" type="submit">Create Project</Button>
                </div>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}