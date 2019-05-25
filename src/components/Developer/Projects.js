import React, { Component } from 'react'
import { Container } from 'reactstrap'
import moment from 'moment'

export default class Projects extends Component {
  componentDidMount() {
    console.log(this.props.project)
  }

  render() {
    return (
      <div >
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', marginBottom: '1em', borderRadius: '10px' }}>
          <div className="row" style={{ paddingTop: '1em' }}>
            <div className="col-9">
              <div>
                <p>{this.props.project.name}</p>
                <p><b>URL:</b> {this.props.project.url}</p>
                <p><b>Repository:</b> {this.props.project.repositoryUrl}</p>
              </div>
            </div>
            <div className="col-3" style={{ textAlign: 'right' }}>
              <div style={{ marginRight: '2em' }}>
                <p>{this.props.project.status}</p>
                <p>{moment(this.props.project.endDate).format('ll')}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}