import React, { Component } from 'react'
import { Container } from 'reactstrap'
import request from 'superagent'
import host from '../../extras/host'

export default class DetailsExperience extends Component{
  constructor(props){
    super(props)
    this.state={
      isLoader: false,
      experience: false
    }
  }
  componentDidMount(){
    request.get(host.getHost()+ '/developers/experiences?developerId=1')
    .then(response =>{
      console.log(response)
      if(response.body){
        this.setState({
          isLoader: true,
          experience: response.body
        })
      }
    }).catch(error =>{
      console.log(error)
    })
  }
  render(){
    return(
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', paddingTop: '2em', paddingBottom: '2em', marginTop: '4em', borderRadius: '10px' }}>
            <h3>Details Experience</h3>
          <div style={{ marginLeft: '2em' }}> 
            <h7>Company:</h7>
            <p>{this.state.experience.company}</p>
            <h7>Role:</h7>
            <p>{this.state.experience.role}</p>
            <h7>Duration:</h7>
            <p>{this.state.experience.duration}</p>
            <h7>Description:</h7>
            <p>{this.state.experience.description}</p>
          </div>
        </Container>
      </div>
    )
  }
}