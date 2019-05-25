import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap'

export default class ChatDiv extends Component {
  chat() {
    console.log('hola')
    if (2==2) {
      return (
        <div style={{ marginLeft: '1em', backgroundColor: '#dcedc8', borderRadius: '10px'}}>
          <p style={{ marginLeft: '0.8em', fontSize: '10px' }}>9:30 pm</p>
          <p style={{ marginLeft: '0.6em', marginTop: '-1em' }}>Hola</p>
        </div>
      )
    }else{
      return (
        <div style={{ marginLeft: '1em', backgroundColor: '#b2dfdb', borderRadius: '10px'}}>
          <p style={{ marginLeft: '0.8em', fontSize: '10px' }}>9:30 pm</p>
          <p style={{ marginLeft: '0.6em', marginTop: '-1em' }}>Hola</p>
        </div>
      )
    }
    
  }
  render() {
    return (
      <div>
        {this.chat()}
      </div>
    )
  }
}



