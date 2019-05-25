import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'
import NavBar from '../../components/Recruiter/NavBar'
import request from 'superagent'
import host from '../../extras/host'
import Projects from '../../components/Developer/Projects'
import Experience from '../../components/Developer/experience'

export default class ViewDeveloper extends Component {
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
    if (localStorage.getItem('recruiterId')) {
      request.get(`${host.getHost()}/developers?id=${this.props.match.params.id}`).then(response => {
        this.setState({
          isLoaded: true,
          developer: response.body
        })
        console.log(response.body)
      }).catch(err => {
        console.log(err)
      })
      request.get(`${host.getHost()}/developers/projects?developerId=${this.props.match.params.id}`).then(projects => {
        this.setState({
          projects
        })
      })
      request.get(`${host.getHost()}/developers/experiences?developerId=${this.props.match.params.id}`).then(experiences => {
        this.setState({
          experiences
        })
      })
    } else {
      window.location = '/'
    }
  }

  technologies() {
    if (this.state.isLoaded) {
      let technologies = this.state.developer.technologies.split(',')
      return technologies.map((techno, index) => {
        return (
          <span style={{ backgroundColor: 'darkgrey', color: 'white', padding: '0.3em 0.5em', marginLeft: '0.5em', borderRadius: '5px' }}>{techno}</span>
        )
      })
    }
  }
  knowledges() {
    if (this.state.isLoaded) {
      let knowledges = this.state.developer.knowledges.split(',')
      return knowledges.map((knowledge, index) => {
        return (
          <span style={{ backgroundColor: 'darkgrey', color: 'white', padding: '0.3em 0.5em', marginLeft: '0.5em', borderRadius: '5px' }}>{knowledge}</span>
        )
      })
    }
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

  render() {
    return(
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
                  </div>
                </div>
                <div>
                  <h5>Work experience:</h5>
                  <div style={{ width: '40em', paddingBottom: '1em' }}>
                    {this.getExperiences()}
                  </div>
                </div>
              </div>
            </div>
          </Container>
      </div>
    )
  }
}