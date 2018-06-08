import React, { Component } from 'react'
import {Router, Route, browserHistory} from 'react-router'

import MainWrapper from '../pages/MainWrapper'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route
        path='/'
        component={MainWrapper}
      />
    </Router>
  )
}

export default App
