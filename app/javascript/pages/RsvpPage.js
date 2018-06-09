import React, {Component} from 'react'
import RsvpForm from '../containers/RsvpForm'

class RsvpPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      invite: {},
      errorMessage: null
    }
    this.fetchInvite = this.fetchInvite.bind(this)
  }

  componentDidMount() {
    const inviteId = parseInt(this.props.params.id)
    this.fetchInvite(inviteId)
  }

  fetchInvite(id) {
    fetch(`/api/v1/invites/${id}.json`, {
      credentials: 'same-origin',
      method: 'GET',
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
        if (response["error"]) {
          this.setState({ errorMessage: response["message"] })
        } else {
          debugger
          this.setState({ invite: response })
        }
      })
      .catch ( error => console.error(`Error in fetch: ${error.message}`) );
  }

  render() {
    return(
      <h3>hi</h3>
      // <RsvpForm
      //   familyObject={this.state.familyObject}
      //   handlePlusOneChange={this.handlePlusOneChange}
      //   handleSubmit={this.handleRSVPSubmit}
      //   onBoxClick={this.handleBoxSelect}
      //   dietaryRestrictions={this.state.dietaryRestrictions}
      //   onChange={this.handleTextChange}
      // />
    )
  }
}

export default RsvpPage
