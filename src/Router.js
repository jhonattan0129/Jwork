import React, { Component } from 'react'
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom'
import App from './App'

import Home from './pages/Home'
export default class Router extends Component {
  render() {
    return (
      <ReactRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </App>

      </ReactRouter>
    )
  }
}