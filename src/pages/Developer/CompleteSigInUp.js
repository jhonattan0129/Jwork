import React, { Component } from 'react'
import { Container, Form, FormGroup, Button, Input } from 'reactstrap'
import request from 'superagent'
import moment from 'moment'
export default class CompleteSignInup extends Component {
  
  signInUp(evt){
    evt.preventDefault()
    const formData = new window.FormData(evt.target)
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    const birthdate = moment(formData.get('birthdate')).format('YYYY-MM-DD')
    const collegeDegree = formData.get('collegeDegree')
    const description = formData.get('description')
    const linkedInUrl = formData.get('linkedInUrl')
    const facebookUrl = formData.get('facebookUrl')
    const twiterUrl = formData.get('twiterUrl')
    const technologies = formData.get('technologies')
    const knowledges = formData.get('knowledges')
    let isAvailable = formData.get('isAvailable')
    const availableDescription = formData.get('availableDescription')
    if(firstName!='' && lastName!='' && email !='' && password!='' && birthdate!='' && collegeDegree!='' && description!='' && linkedInUrl!='' && facebookUrl!='' && twiterUrl!= ''&& technologies!='' && knowledges!='' && isAvailable!='' && availableDescription!=''){
      console.log('hola')
      if(isAvailable=='yes' || isAvailable=='si'){
        isAvailable=true
      }else{
        isAvailable=false
      }

    console.log(isAvailable)
      request.post('http://localhost:4200/developers')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        firstName: firstName,
        lastName: lastName,
        email:email,
        password:password,
        birthdate:birthdate,
        collegeDegree:collegeDegree,
        description:description,
        linkedInUrl:linkedInUrl,
        facebookUrl:facebookUrl,
        twitterUrl:twiterUrl,
        technologies:technologies,
        knowledges:knowledges,
        isAvailable:isAvailable,
        availableDescription:availableDescription
      }).then(response =>{
        localStorage.removeItem('firstName')
        localStorage.removeItem('lastName')
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        localStorage.setItem('id', response.body.id)
        window.location='/developer/'
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
              <h4>Complete your Profile</h4>
              <div style={{ marginTop: '2em' }}>
              <FormGroup>
                  <Input type="date" name="birthdate" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" placeholder="College Degree" name="collegeDegree" />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em' }}>
                <FormGroup>
                <Input type="textarea" placeholder="Description" style={{ height: '10em'}} name="description"/>
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
                  <Input type="textarea" placeholder="Available Descripción" name="availableDescription" style={{ height: '7em'}} />
                </FormGroup>
              </div>
              <div style={{ marginTop: '1.5em' }}>
                <Button style={{ width: '15em' }} type="submit">Complete</Button>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}