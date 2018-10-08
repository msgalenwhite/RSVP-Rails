import React, { Component } from 'react'
import {Router, Route, browserHistory} from 'react-router'

import WhereTo from '../pages/WhereTo'
import MainRsvpPage from '../pages/MainRsvpPage'
import RsvpPage from '../pages/RsvpPage'
import RsvpUpdated from '../pages/RsvpUpdated'
import ShareStories from '../pages/ShareStories'
import StorySummary from '../pages/StorySummary'

import HotelInfo from '../plain_pages/HotelInfo'
import Invitation from '../plain_pages/Invitation'
import Transportation from '../plain_pages/Transportation'
import About from '../plain_pages/About'
import Weather from '../plain_pages/Weather'
import Registry from '../plain_pages/Registry'
import Schedule from '../plain_pages/Schedule'

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
      <Route
        path='/stories/all'
        component={StorySummary}
      />
    </Router>
  )
}

export default App
