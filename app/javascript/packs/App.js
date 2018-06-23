import React, { Component } from 'react'
import {Router, Route, browserHistory} from 'react-router'

import MainPage from '../pages/MainPage'
import RsvpPage from '../pages/RsvpPage'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route
        path='/'
        component={MainPage}
      />
      <Route
        path='/invites/:id'
        component={RsvpPage}
      />
    </Router>
  )
}

export default App
