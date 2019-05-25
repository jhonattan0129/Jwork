import React, { Component } from 'react'
import Experience from '../../components/Developer/experience'
import { Container } from 'reactstrap'
import  request  from 'superagent';
import host from '../../extras/host'

export default class LisProject extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLoaded: false,
      experience: false
    }
  }
  componentDidMount(){
    request.get(host.getHost() + '/developers/experiences?developerId=' + localStorage.getItem('id'))
    .then(response=>{
      console.log(response)
      this.state.set({
        isLoaded: true,
        experience: response.body
      })
    }).catch(error =>{
      console.log(error)
    })
  }
  listProjects(){
    if(this.state.isLoaded){
      console.log(this.state.experience)
       /* return this.state.experience.map((experience, index) =>{
        return(
          <Experience experience={experience} />
        )
      })  */
    }
  } 
  render() {    
    return(
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', paddingTop: '2em', paddingBottom: '2em', marginTop: '4em', borderRadius: '10px' }}>
          <h4>Work Experience List</h4>
          <div style={{  marginLeft: '15em', marginRight: '15em' }}>
            {this.listProjects}
          </div>
        </Container>
      </div>
    )
  }
}