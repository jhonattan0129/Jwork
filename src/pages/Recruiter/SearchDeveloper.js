import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Developer from '../../components/Recruiter/developers';
import NavBar from '../../components/Recruiter/NavBar'

export default class SearchDeveloper extends Component {
  constructor(props) {
    super(props);

    this.toggleTechnologies = this.toggleTechnologies.bind(this)
    this.toggleKnowledges = this.toggleKnowledges.bind(this)
    this.setValue = this.setValue.bind(this)
    this.setValueKnowledges = this.setValueKnowledges.bind(this)
    this.state = {
      dropdownOpenTechnologies: false,
      dropdownOpen: false,
      valueTechnologies: '',
      valueKnowledges: ''
    };
  }
  setValue(evt){
    this.setState({
      dropdownOpenTechnologies: !this.state.dropdownOpenTechnologies,
      valueTechnologies : evt.target.innerText
    })
  }
  setValueKnowledges(evt){
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      valueKnowledges : evt.target.innerText
    })
  }

  toggleTechnologies() {
    this.setState(prevState => ({
      dropdownOpenTechnologies: !prevState.dropdownOpenTechnologies
    }));
  }
  toggleKnowledges() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Container style={{ boxShadow: '0 0 9px 0 rgba(227,227,227,0.5)', paddingTop: '2em', paddingBottom: '2em', marginTop: '4em', borderRadius: '10px' }}>
          <div>
            <div className="row" style={{ marginTop: '2em'}}>
              <div className="col-3">
                <div>
                  <Dropdown isOpen={this.state.dropdownOpenTechnologies} toggle={this.toggleTechnologies}>
                    <DropdownToggle caret>
                      Filter Technologies
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={this.setValue}>Technologies</DropdownItem>
                      <DropdownItem onClick={this.setValue}>Experience</DropdownItem>
                      <DropdownItem onClick={this.setValue}>Projects</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div style={{ marginTop: '1em'}}>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleKnowledges}>
                    <DropdownToggle caret>
                      Filter Knowledges
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={this.setValueKnowledges}>Technologies</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <div className="col-9">
                <div style={{ width: '40em'}}>
                  <Developer></Developer>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}