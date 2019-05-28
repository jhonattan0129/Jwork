import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'
import Projects from '../../components/Developer/Projects'
import Experience from '../../components/Developer/experience'
import { Link } from 'react-router-dom'
import NavBar from '../../components/Developer/NavBar'
import request from 'superagent'
import host from '../../extras/host'

export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      developer: false,
      projects: false,
      experiences: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('id')) {
      console.log(localStorage.getItem('id'))
      request.get(`${host.getHost()}/developers?id=${localStorage.getItem('id')}`).then(response => {
        this.setState({
          isLoaded: true,
          developer: response.body
        })
        console.log(response.body)
      }).catch(err => {
        console.log(err)
      })
      request.get(`${host.getHost()}/developers/projects?developerId=${localStorage.getItem('id')}`).then(projects => {
        this.setState({
          projects
        })
      })
      request.get(`${host.getHost()}/developers/experiences?developerId=${localStorage.getItem('id')}`).then(experiences => {
        this.setState({
          experiences
        })
      })
    } else {
      window.location = '/'
    }
    
  }

  freeTime() {
    if (2 == 2) {
      return (
        <div>
          <p>Si</p>
          
        </div>
      )
    }else{
      return(
        <div>
          <p>No</p>
        </div>
      )
    }
  }
  technologies() {
    let technologies = this.state.developer.technologies.split(',')
    return technologies.map((techno, index) => {
      return (
        <span style={{ backgroundColor: '#05BEDA', color: 'white', padding: '0.3em 0.5em', marginLeft: '0.5em', borderRadius: '5px' }}>{techno}</span>
      )
    })
  }
  knowledges() {
    let knowledges = this.state.developer.knowledges.split(',')
    return knowledges.map((knowledge, index) => {
      return (
        <span style={{ backgroundColor: '#05BEDA', color: 'white', padding: '0.3em 0.5em', marginLeft: '0.5em', borderRadius: '5px' }}>{knowledge}</span>
      )
    })
  }
  getProjects() {
    if (this.state.projects) {
      if (this.state.projects.body.length > 0) {
        return this.state.projects.body.map((project, index) => {
          return <Projects project={project} key={index} />
        })
      }
    }
  }
  getExperiences() {
    if (this.state.experiences) {
      if (this.state.experiences.body.length > 0) {
        return this.state.experiences.body.map((experience, index) => {
          return <Experience experience={experience} key={index} />
        })
      }
    }
  }

  timeAvailability(){

  }

  createExperience(){
    window.location='/developer/workExperience'
  }

  createProject(){
    window.location='/developer/createProject'
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div>

        </div>
      )
    } else {
      return (
        <div>
          <NavBar></NavBar>
          <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', marginBottom: '2em', borderRadius: '10px' }}>
            <div style={{ paddingTop: '3em', paddingBottom: '2em' }}>
              <div className="row">
                <div className="col-3">
                  <img src={process.env.PUBLIC_URL + '/images/user.png'} style={{ width: '10em', marginLeft: '3em' }} />
                </div>
                <div className="col-6">
                  <h4 style={{ color: 'black' }}>{this.state.developer.firstName}</h4>
                  <h5>{this.state.developer.lastName}</h5>
                  <p>{this.state.developer.collegeDegree}</p>
                </div>
                <div className="col-3">
                  <div style={{ alignItems: 'center', textAlign: 'center' }}>
                    <Link to="/developer/me/edit">
                      <img src={process.env.PUBLIC_URL + '/images/edit.png'} style={{ width: '1em' }} />
                    </Link>
                  </div>
                </div>
              </div>
              <div style={{ paddingTop: '2em', marginLeft: '2em' }}>
                <p>{this.state.developer.description}</p>
                {this.state.developer.facebookUrl ? <div><a href={this.state.developer.facebookUrl}>{this.state.developer.facebookUrl}</a></div> : <span></span>}
                {this.state.developer.twitterUrl ? <div><a href={this.state.developer.twitterUrl}>{this.state.developer.twitterUrl}</a></div> : <span></span>}
                {this.state.developer.linkedInUrl ? <div><a href={this.state.developer.linkedInUrl}>{this.state.developer.linkedInUrl}</a></div> : <span></span>}
                <br />
                <h5>Tecnologies:</h5>
                {this.technologies()}
                <br /><br />
                <h5>Knowledges:</h5>
                {this.knowledges()}
                <br /><br />
                <div>
                  <h5>Time Availability:</h5>
                  {this.state.developer.isAvailable ? 'Yes' : 'No'}
                  <div>
                    <p>{this.state.developer.availableDescription}</p>
                  </div>
                </div>
                <br /><br />
                <div>
                  <h5>Projects:</h5>
                  <div style={{ width: '40em', paddingBottom: '1em' }}>
                    {this.getProjects()}
                    <Button onClick={this.createProject} style={{  background: '#05BEDA', borderColor: '#05BEDA' }} >Create new Projects</Button>
                  </div>
                </div>
                <div>
                  <h5>Work experience:</h5>
                  <div style={{ width: '40em', paddingBottom: '1em' }}>
                    {this.getExperiences()}
                    <Button onClick={this.createExperience}  style={{ marginTop: '1em', background: '#05BEDA', borderColor: '#05BEDA'}}>Create new Experience</Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )
    }
  }
}