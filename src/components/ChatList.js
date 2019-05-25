import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class ChatList extends Component{
  render() {
    return(
      <div>
        <Container>
          <div>
            <div className="row">
              <div className="col-9">
                <Link style={{ color: 'black'}} to="">
                  <p>Nombre de Usuario</p>
                </Link>
              </div>
              <div className="col-3">
                <p>Hora del ultimo mensaje</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}