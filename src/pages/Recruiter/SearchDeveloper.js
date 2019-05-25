import React, { Component } from 'react'
import { Container, Input, Form, FormGroup, Button } from 'reactstrap';
import Developer from '../../components/Recruiter/developers';
import NavBar from '../../components/Recruiter/NavBar'
import request from 'superagent'
import host from '../../extras/host'

export default class SearchDeveloper extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      developers: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('recruiterId')) {
      request.get(`${host.getHost()}/recruiters/developers?technologies=&knowledges=`).then(response => {
        this.setState({
          isLoaded: true,
          developers: response.body
        })
      })
    } else {
      window.location = '/'
    }
    
  }

  showDevelopers() {
    return this.state.developers.map((developer, index) => {
      return <Developer developer={developer} key={index} />
    })
  }

  filter(evt) {
    this.setState({
      isLoaded: false
    })
    evt.preventDefault()
    const formData = new window.FormData(evt.target)
    const technologies = formData.get('technologies')
    const knowledges = formData.get('knowledges')
    request.get(`${host.getHost()}/recruiters/developers?technologies=${technologies}&knowledges=${knowledges}`).then(response => {
      this.setState({
        isLoaded: true,
        developers: response.body
      })
    })
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div></div>
      )
    } else {
      return (
        <div>
          <NavBar />
          <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', paddingTop: '2em', paddingBottom: '2em', marginTop: '4em', borderRadius: '10px' }}>
            <div>
              <div className="row" style={{ marginTop: '2em'}}>
                <div className="col-3">
                  <Form onSubmit={this.filter.bind(this)}>
                    <div>
                      <h5>Technologies</h5>
                      <FormGroup>
                        <Input type="text" name="technologies" />
                      </FormGroup>
                    </div>
                    <div style={{ marginTop: '1em'}}>
                      <h5>Knowledges</h5>
                      <FormGroup>
                        <Input type="text" name="knowledges" />
                      </FormGroup>
                    </div>
                    <Button type="submit" color="success">Filter</Button>
                  </Form>
                </div>
                <div className="col-9">
                  <div style={{ width: '40em'}}>
                    {this.showDevelopers()}
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