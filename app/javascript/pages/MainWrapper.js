import React, {Component} from 'react'
import MainPage from './MainPage'

class MainWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      fellowInvitees: []
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
    .then ( response => {
      if ( response.ok ) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then ( response => response.json() )
    .then ( response => {
      debugger
    })
    .catch ( error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {

    return(
      <MainPage
        getInvitees={this.getInvitees}
      />
    )
  }
}

export default MainWrapper
