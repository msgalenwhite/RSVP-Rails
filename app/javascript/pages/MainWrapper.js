import React, {Component} from 'react'
import MainPage from './MainPage'

class MainWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      fellowInvitees: [],
      errorParams: {}
    }
    this.getInvitees = this.getInvitees.bind(this)
  }

  getInvitees(formData) {
    fetch("/api/v1/invites/find.json", {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
    .then ( response => response.json() )
    .then ( response => {
      const responseObject = {
        text: response.body,
        status: response.ok
      }
      debugger
      return responseObject
    })
    .then ( response => {
      debugger
    })
  }


  render() {

    return(
      <MainPage
        getInvitees={this.getInvitees}
        errorParams={this.errorParams}
      />
    )
  }
}

export default MainWrapper
