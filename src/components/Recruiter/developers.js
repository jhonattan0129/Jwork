import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class Developer extends Component {
  printTechnologies() {
    let technologies = this.props.developer.technologies.split(',')
    return technologies.map((techno, index) => {
      return <span key={index} style={{ backgroundColor: 'darkgrey', padding: '0.3em 0.5em', marginLeft: '0.5em', borderRadius: '5px', color: 'white' }}>{techno}</span>
    })
  }

  printKnowledges() {
    let knowledges = this.props.developer.knowledges.split(',')
    return knowledges.map((knowledge, index) => {
      return <span key={index} style={{ backgroundColor: 'darkgrey', padding: '0.3em 0.5em', marginLeft: '0.5em', borderRadius: '5px', color: 'white' }}>{knowledge}</span>
    })
  }

  render() {
    return (
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', paddingTop: '2em', paddingBottom: '2em', marginTop: '4em', borderRadius: '10px' }}>
          <div>
            <div className="row">
              <div className="col-9">
                <p><b><Link to={`/recruiter/search/developer/${this.props.developer.id}`}>{this.props.developer.firstName} {this.props.developer.lastName}</Link></b></p>
                <p><b>Tecnologies:</b> {this.printTechnologies()}</p>
                <p><b>Knowledges:</b> {this.printKnowledges()}</p>
                <p><b>Free Time:</b> {this.props.developer.isAvailable ? 'Yes' : 'No'}</p>
              </div>
              <div className="col-3">
                <div>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </div>
    )
  }
}