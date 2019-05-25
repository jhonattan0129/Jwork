import React, { Component } from 'react'
import { Form, Container, Input, Button, FormGroup } from 'reactstrap'
import request from 'superagent'
import host from '../../extras/host'
import moment from 'moment'

export default class EditProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      developer: false
    }
  }

  componentDidMount() {
    request.get(`${host.getHost()}/developers?id=${localStorage.getItem('id')}`).then(response => {
      this.setState({
        isLoaded: true,
        developer: response.body
      })
    })
  }

  updateProfile(evt) {
    evt.preventDefault()
    const formData = new window.FormData(evt.target)
    const collegeDegree = formData.get('collegeDegree')
    const description = formData.get('description')
    const linkedInUrl = formData.get('linkedInUrl')
    const facebookUrl = formData.get('facebookUrl')
    const twitterUrl = formData.get('twitterUrl')
    const isAvailable = formData.get('isAvailable')
    const availableDescription = formData.get('availableDescription')
    const technologies = formData.get('technologies')
    const knowledges = formData.get('knowledges')
    if (collegeDegree != '' && description != '' && isAvailable != '' && technologies != '' && knowledges != '') {
      request.put(`${host.getHost()}/developers?id=${localStorage.getItem('id')}`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        collegeDegree,
        description,
        linkedInUrl,
        facebookUrl,
        twitterUrl,
        isAvailable,
        availableDescription,
        technologies,
        knowledges
      })
      .then(response => {
        console.log(response)
        window.location = '/developer/me'
      }).catch(error => {
        console.log(error)
      })
    }
  }

  cancel() {
    window.location = '/developer/me'
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div></div>
      )
    } else {
      return (
        <div>
          <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', marginBottom: '2em', borderRadius: '10px' }}>
            <Form onSubmit={this.updateProfile.bind(this)}>
              <div style={{ paddinTop: '2em' }}>
                <div className="row" style={{ paddingTop: '2em' }}>
                  <div className="col-8" >
                    <div style={{ paddingLeft: '7em', paddingRight: '7em' }}>
                      <div>
                        <FormGroup>
                          <Input type="text" readOnly="read" value={this.state.developer.firstName} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="text" readOnly="read" value={this.state.developer.lastName} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="text" readOnly="read" value={this.state.developer.email} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="text" readOnly="read" value={moment(this.state.developer.birthdate).format('DD/MM/YYYY')} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="text" name="collegeDegree" placeholder="College Degree" defaultValue={this.state.developer.collegeDegree} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="textarea" name="description" placeholder="Description" defaultValue={this.state.developer.description} style={{ height: '5em' }}/>
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="text" name="linkedInUrl" placeholder="LinkedIn URL" defaultValue={this.state.developer.linkedInUrl} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="text" name="facebookUrl" placeholder="Facebook URL" defaultValue={this.state.developer.facebookUrl} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="text" name="twitterUrl" placeholder="Twitter URL" defaultValue={this.state.developer.twitterUrl} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="text" name="isAvailable" defaultValue={this.state.developer.isAvailable} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="textarea" name="availableDescription" placeholder="Available description" defaultValue={this.state.developer.availableDescription} style={{ height: '5em' }} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="text" name="technologies" placeholder="Technologies" defaultValue={this.state.developer.technologies} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="text" name="knowledges" placeholder="Knowledges" defaultValue={this.state.developer.knowledges} />
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                  <div className="col-4" style={{ textAlign: 'center' }}>
                    <Button type="submit" color="success" style={{ width: '7em' }}>Update</Button>
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
}