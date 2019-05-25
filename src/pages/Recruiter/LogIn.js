import React, { Component } from 'react'
import { Container, Form, FormGroup, Button, Input } from 'reactstrap'
import request from 'superagent'

export default class LogIn extends Component{
  login(evt) {
    evt.preventDefault()
    const formData = new window.FormData(evt.target)
    const email = formData.get('email')
    const password = formData.get('password')
    if (email!='' && password!='') {
      request.post('http://localhost:4200/recruiters/session')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
          email,
          password
        }).then(response => {
          if(response.body){
            console.log(response)
            localStorage.setItem('id', response.body.id)
            localStorage.setItem('name', response.body.firstName)
            window.location='/developer/'
          }else{
            alert('Usuario y Contraseña Incorrecta')
          }
        })
    }

  }
  render(){
    return(
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '5em', marginBottom: '2em', borderRadius: '10px' }}>
          <Form onSubmit={this.login.bind(this)}>
            <div style={{ paddingTop: '3em', paddingBottom: '3em', paddingLeft: '20em', paddingRight: '20em', textAlign: 'center'}}>
              <h4>Enter as a Recruiter</h4>
              <div style={{ marginTop: '2em'}}>
                <FormGroup>
                  <Input placeholder="Email" type="email" name="email" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em'}}>
                <FormGroup>
                  <Input placeholder="Password" type="password" name="password" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '2em'}}>
                <Button style={{ width: '15em'}} type="submit">Enter</Button>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}