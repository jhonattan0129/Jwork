import React, { Component } from 'react'
import { Container } from 'reactstrap'
import ChatList from '../components/ChatList'
import NavBar from '../components/Developer/NavBar'
import NavBarRecruiter from '../components/Recruiter/NavBar'
export default class ChatPage extends Component{
  render() {
    return(
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', marginBottom: '2em', borderRadius: '10px' }}>
          <div style={{ paddingTop: '2em', paddingBottom: '2em' }}>
            <h3>Chat List</h3>
            <div style={{ width: '40em', paddingTop: '0.5em',paddingBottom: '0.8em', boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', height: '3.5em', marginTop: '3em'}}>
              <ChatList></ChatList>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}