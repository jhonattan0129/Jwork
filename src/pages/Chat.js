import React, { Component } from 'react'
import { Container, Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import ChatDiv from '../components/chat';

export default class Chat extends Component {
  envMessage(evt) {
    evt.preventDefault()
    const formData = new window.FormData(evt.target)
    const message = formData.get('message')
    localStorage.setItem('menssage', message)
    localStorage.setItem('message','2')
    console.log(message)
  }
  message(){
    return(
      <ChatDiv />
    )
  }
  render() {
    return (
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', paddingTop: '2em', paddingBottom: '2em', marginTop: '4em', borderRadius: '10px' }}>
          <Form onSubmit={this.envMessage.bind(this)} >
            <div>
              <div>
                <h3>Name</h3>
              </div>
              <div>
                <InputGroup>
                  <Input name="message" type="textarea" style={{ height: '3em' }} />
                  <InputGroupAddon addonType="prepend"><Button type="submit">Send</Button></InputGroupAddon>
                </InputGroup>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}