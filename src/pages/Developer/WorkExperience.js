import React, { Component } from 'react'
import { Container, Form, FormGroup, Input, Button } from 'reactstrap'
import request from 'superagent'
import host from '../../extras/host'

export default class WorkExperience extends Component {
  componentDidMount() {
    if (!localStorage.getItem('id')) {
      window.location = '/'
    }
  }

  createExperience(evt){
    evt.preventDefault()
    const formData = new window.FormData(evt.target)
    const company = formData.get('company')
    const role = formData.get('rol')
    const duration = formData.get('time')
    const description = formData.get('description')
    const developerId = localStorage.getItem('id')
    if (company != '' && role != '' && duration != '' && description != '') {
      request.post(`${host.getHost()}/developers/experiences`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        company,
        role,
        duration,
        description,
        developerId
      })
      .then(response => {
        console.log(response)
        window.location = '/developer/me'
      }).catch(error => {
        console.log(error)
      })
    }
  }
  render() {
    return (
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', paddingTop: '4em', paddingBottom: '4em', marginTop: '2em', borderRadius: '10px' }}>
          <Form onSubmit={ this.createExperience.bind(this) }>
            <div style={{ paddingTop: '2em' }}>
              <div className="row">
                <div className="col-8">
                  <div style={{ marginLeft: '2em', paddingLeft: '7em', paddingRight: '7em'}}>
                    <div>
                      <FormGroup>
                        <Input type="text" placeholder="Company" name="company" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="text" placeholder="Rol" name="rol" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="text" placeholder="Duration" name="time" />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <Input type="textarea" placeholder="Description" name="description" style={{ height: '7em' }} />
                      </FormGroup>
                    </div>                    
                  </div>
                </div>
                <div className="col-4" style={{ textAlign: 'center' }} >
                  <Button color="success" type="submit">Register Experience</Button>
                </div>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}