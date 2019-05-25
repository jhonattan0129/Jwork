import React, { Component } from 'react'
import { Container, Form, FormGroup, Button, Input } from 'reactstrap'
import request from 'superagent'
import moment from 'moment'
import Swal from 'sweetalert2'

export default class CompleteSignInup extends Component {
  signInUp(evt){
    evt.preventDefault()
    const formData = new window.FormData(evt.target)
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    const birthdate = moment(formData.get('birthdate')).format('YYYY-MM-DD')
    const bio = formData.get('bio')
    const description = formData.get('description')
    if(firstName!='' && lastName!='' && email !='' && password!='' && birthdate!='' && bio!='' && description!='' ){
      console.log('hola')
      request.post('http://localhost:4200/recruiters')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        firstName: firstName,
        lastName: lastName,
        email:email,
        password:password,
        birthdate:birthdate,        
        description:description,
        bio:bio
      }).then(response =>{
        Swal.fire(
          'Thank you',
          'Enjoy your space',
          'success'
        ).then(() => {
          localStorage.removeItem('firstName')
          localStorage.removeItem('lastName')
          localStorage.removeItem('email')
          localStorage.removeItem('password')
          localStorage.setItem('recruiterId', response.body.id)
          window.location = '/recruiter/home'
        })
      }).catch(error =>{
        console.log(error)
      })
    }else{
      alert('campos vacios')
    }
  }
  render() {
    return (
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', marginBottom: '2em', borderRadius: '10px' }}>
          <Form onSubmit={this.signInUp.bind(this)}>
            <div style={{ paddingTop: '3em', paddingBottom: '3em', paddingLeft: '20em', paddingRight: '20em', textAlign: 'center' }}>
              <h4>Please Complete your Profile</h4>
              <div style={{ marginTop: '2em' }}>
                <FormGroup>
                  <Input type="date" name="birthdate" />
                </FormGroup>
              </div>
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
                <Button type="submit" style={{ width: '15em' }}>Complete</Button>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}