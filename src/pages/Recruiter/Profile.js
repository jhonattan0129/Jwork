import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import request from 'superagent'
import host from '../../extras/host'
import Navbar from '../../components/Recruiter/NavBar'

export default class ViewDeveloper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      recruiter: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('recruiterId')) {
      request.get(`${host.getHost()}/recruiters?id=${localStorage.getItem('recruiterId')}`).then(response => {
        this.setState({
          isLoaded: true,
          recruiter: response.body
        })
      }).catch(error => {
        console.log(error)
      })
    } else {
      window.location = '/'
    }
    
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div></div>
      )
    } else {
      return (
        <div>
          <Navbar />
          <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', paddingBottom: '2em', borderRadius: '10px' }}>
            <div style={{ paddingTop: '2em' }}>
              <div className="row">
                <div className="col-3">
                  <img src={process.env.PUBLIC_URL + '/images/user.png'} />
                </div>
                <div className="col-6" style={{ marginTop: '3em' }}>
                  <h4 style={{ color: 'black' }}>{this.state.recruiter.firstName}</h4>
                  <h5>{this.state.recruiter.lastName}</h5>
                </div>
                <div className="col-3">
                  <div style={{ alignItems: 'center', textAlign: 'center' }}>
                    <Link to="/recruiter/me/edit">
                      <img src={process.env.PUBLIC_URL + '/images/edit.png'} style={{ width: '1em' }} />
                    </Link>
                  </div>
                </div>
              </div>
              <div style={{ marginLeft: '2em', marginTop: '5em' }}>
                <h5>Biography:</h5>
                <p>{this.state.recruiter.bio}</p>
                <h5>Description:</h5>
                <p>{this.state.recruiter.description}</p>
              </div>
            </div>
          </Container>
        </div>
      )
    }
  }
    
}