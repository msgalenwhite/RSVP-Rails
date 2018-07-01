import React, { Component } from 'react'
import {Router, Route, browserHistory} from 'react-router'

import MainRsvpPage from '../pages/MainRsvpPage'
import RsvpPage from '../pages/RsvpPage'
import RsvpUpdated from '../pages/RsvpUpdated'

import HotelInfo from '../dummy_files/components/HotelInfo'
import WhereTo from '../dummy_files/components/WhereTo'
import Invitation from '../dummy_files/components/Invitation'
import Transportation from '../dummy_files/components/Transportation'
import About from '../dummy_files/components/About'
import Weather from '../dummy_files/components/Weather'
import Registry from '../dummy_files/components/Registry'

const App = props => {
  return(
    <Router history={browserHistory}>
    <Route
        path='/'
        component={WhereTo}
      />
      <Route
        path='/wedding/invitation'
        component={Invitation}
      />
      <Route
        path='/wedding/rsvp'
        component={MainRsvpPage}
      />
      <Route
        path='/wedding/location'
        component={HotelInfo}
      />
      <Route
        path='/wedding/transportation'
        component={Transportation}
      />
      <Route
        path='/wedding/weather'
        component={Weather}
      />
      <Route
        path='/wedding/registry'
        component={Registry}
      />
      <Route
        path='/wedding/coolsite'
        component={About}
      />
      <Route
        path='/wedding/updated_rsvp'
        component={RsvpUpdated}
      />
      <Route
        path='/invites/:id'
        component={RsvpPage}
      />
    </Router>
  )
}

export default App
