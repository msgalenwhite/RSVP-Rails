import React, { Component } from 'react'
import {Router, Route, browserHistory} from 'react-router'

import WhereTo from '../pages/WhereTo'
import MainRsvpPage from '../pages/MainRsvpPage'
import RsvpPage from '../pages/RsvpPage'
import RsvpUpdated from '../pages/RsvpUpdated'
import ShareStories from '../pages/ShareStories'

import HotelInfo from '../dummy_files/components/HotelInfo'
import Invitation from '../dummy_files/components/Invitation'
import Transportation from '../dummy_files/components/Transportation'
import About from '../dummy_files/components/About'
import Weather from '../dummy_files/components/Weather'
import Registry from '../dummy_files/components/Registry'
import Schedule from '../dummy_files/components/Schedule'

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
        path='/wedding/schedule'
        component={Schedule}
      />
      <Route
        path='/invites/:id'
        component={RsvpPage}
      />
      <Route
        path='/stories/new'
        component={ShareStories}
      />
    </Router>
  )
}

export default App
