import React, { Component } from 'react'
import {Router, Route, browserHistory} from 'react-router'

import MainPage from '../pages/MainPage'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route
        path='/'
        component={MainPage}
      />
    </Router>
  )
}

export default App
