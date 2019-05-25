import React, { Component } from 'react'
import { Container, Input, Form, Button, FormGroup } from 'reactstrap'

export default class SignUp extends Component {

  signUp(evt) {
    evt.preventDefault()
    const formData = new window.FormData(evt.target)
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const password = formData.get('password')
    if (firstName != '' && lastName != '' && email != '' && password != '') {
      localStorage.setItem('firstName', firstName)
      localStorage.setItem('lastName', lastName)
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
      window.location = '/developer/complete/siginup'
    }else{
      alert('Campos Incompletos')
    }
  }
  render() {
    return (
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', marginBottom: '2em', borderRadius: '10px' }}>
          <Form onSubmit={this.signUp.bind(this)}>
            <div style={{ textAlign: 'center', paddingTop: '3em', paddingBottom: '3em', paddingLeft: '20em', paddingRight: '20em' }}>
              <h4>SignUp Developer</h4>
              <div style={{ marginTop: '2em' }}>
                <FormGroup>
                  <Input type="text" placeholder="Name" name="firstName" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em' }}>
                <FormGroup>
                  <Input type="text" placeholder="LastName" name="lastName" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em' }}>
                <FormGroup>
                  <Input type="email" placeholder="Email" name="email" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em' }}>
                <FormGroup>
                  <Input type="password" placeholder="Password" name="password" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '2em' }}>
                <Button type="submit" style={{ width: '15em' }}>Enter</Button>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}