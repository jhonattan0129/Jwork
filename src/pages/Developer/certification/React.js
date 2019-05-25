import React, { Component } from 'react'
import { Container, Form, FormGroup, Input, Button } from 'reactstrap'

export default class TestReact extends Component {
  test(evt) {
    evt.preventDefault()
    const formData = new window.FormData(evt.target)
    const q1 = formData.get('q1')
    const q2 = formData.get('q2')
    const q3 = formData.get('q3')
    if(q1!='' && q2!='' && q3!='' ){
      alert('Good Job \n you passed')
      window.location='/developer/certification'
    }else{
      alert('!Error¡ \n empty fields')
    }
  }
  render() {
    return (
      <div>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em', paddingBottom: '3em', marginBottom: '2em', borderRadius: '10px', paddingTop: '2em' }}>
          <Form onSubmit={this.test.bind(this)}>
            <div>
              <h4>Test React Certification</h4>
              <div style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', marginTop: '2em',paddingBottom: '3em', marginBottom: '2em', borderRadius: '10px', paddingTop: '2em', marginLeft: '4em', marginRight: '4em'}}>
                <div style={{ paddingLeft: '4em', paddingRight: '4em' }}>
                  <div>
                    <p>What is React? How is it different from other JS frameworks?</p>
                    <FormGroup>
                      <Input type="text" name="q1"/>
                    </FormGroup>
                  </div>
                  <div>
                    <p>What can you tell us about JSX?</p>
                    <FormGroup>
                      <Input type="text" name="q2" />
                    </FormGroup>
                  </div>
                  <div>
                    <p>When would you use "Redux" in an application and when not?</p>
                    <FormGroup>
                      <Input type="text" name="q3" />
                    </FormGroup>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Button color="success" style={{ width: '12em' }} type="submit">Enter</Button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}