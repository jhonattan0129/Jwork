import React, { Component } from 'react'
import { Container, Form, FormGroup, Button, Input } from 'reactstrap'
import request from 'superagent'
import host from '../../extras/host'
import moment from 'moment'

export default class ViewDeveloper extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isLoaded: false,
      recruiter: false
    }
  }

  componentDidMount() {
    request.get(`${host.getHost()}/recruiters?id=${localStorage.getItem('recruiterId')}`).then(response => {
      this.setState({
        isLoaded: true,
        recruiter: response.body
      })
    })
  }

  updateRecruiter(evt) {
    evt.preventDefault()
    const formData = new window.FormData(evt.target)
    const description = formData.get('description')
    const bio = formData.get('bio')
    if (description != '' && bio != '') {
      request.put(`${host.getHost()}/recruiters?id=${localStorage.getItem('recruiterId')}`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        description,
        bio
      }).then(response => {
        console.log(response)
        window.location = '/recruiter/me'
      }).catch(error => {
        console.log(error)
      })
    }
  }

  cancel(){
    window.location ='/recruiter/me'
  }
  render() {
    if (!this.state.isLoaded) {
      return (
        <div></div>
      )
    } else {
      return (
        <div>
          <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', paddingBottom: '2em', borderRadius: '10px' }}>
            <Form onSubmit={this.updateRecruiter.bind(this)}>
              <div>
                <div className="row" style={{ paddingTop: '3em' }}>
                  <div className="col-8">
                    <div style={{ paddingLeft: '8em', paddingRight: '8em' }}>
                      <div>
                        <FormGroup>
                          <Input type="text" readOnly="read" value={this.state.recruiter.firstName} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="text" readOnly="read" value={this.state.recruiter.lastName} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="text" readOnly="read" value={this.state.recruiter.email} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input type="text" readOnly="read" value={moment(this.state.recruiter.birthdate).format('DD/MM/YYYY')} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input placeholder="Description" type="textarea" name="description" style={{ height: '7em' }} defaultValue={this.state.recruiter.description} />
                        </FormGroup>
                      </div>
                      <div>
                        <FormGroup>
                          <Input placeholder="Biography" type="textarea" name="bio" style={{ height: '7em' }} defaultValue={this.state.recruiter.bio} />
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <Button type="submit" color="success"  style={{ width: '7em' }}>Update</Button>
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