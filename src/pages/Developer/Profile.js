import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Projects from '../../components/Developer/Projects'
import Experience from '../../components/Developer/experience'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
  freeTime() {
    if (2 == 2) {
      return (
        <div>
          <p>Si</p>
          <p>Free Time</p>
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
  Tecnologies(){

  }
  TimeAvailability(){

  }
  render() {
    return (
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', marginBottom: '2em', borderRadius: '10px' }}>
          <div style={{ paddingTop: '3em', paddingBottom: '2em' }}>
            <div className="row">
              <div className="col-3">
              </div>
              <div className="col-6">
                <h4 style={{ color: 'black' }}>Name</h4>
                <h5>LastName</h5>
                <p>University tittle</p>
              </div>
              <div className="col-3">
                <div style={{ alignItems: 'center', textAlign: 'center' }}>
                  <Link to="/recruiter/me/edit">
                    <img src={process.env.PUBLIC_URL + '/images/edit.png'} style={{ width: '1em' }} />
                  </Link>
                </div>
              </div>
            </div>
            <div style={{ paddingTop: '2em', marginLeft: '2em' }}>
              <p>Description: ...</p>
              <p>link1</p>
              <p>link1</p>
              <p>link1</p>
              <h5>Tecnologies:</h5>
              <div></div>
              <h5>Knowledges:</h5>
              <div></div>
              <div>
                <h5>Time Availability:</h5>
                {this.freeTime()}
              </div>
              <div>
                <h5>Porojects:</h5>
                <div style={{ width: '40em' }}>
                  <Projects></Projects>
                  <Link to="/"><p>Ver mas</p></Link>
                </div>
              </div>
              <div>
                <h5>work experience:</h5>
                <div style={{ width: '40em' }}>
                  <Experience></Experience>
                  <Link to="/"><p>Ver mas</p></Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}