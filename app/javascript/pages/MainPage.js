import React, {Component} from 'react'
import TextInputField from '../components/TextInputField'
import PopUp from '../components/PopUp'

//this page will have a dropdown with names, and a password field.  Once all are complete, use fetch post to send to backend

//if NOT SUCCESSFUL - set flash message, return error, do NOT clear form

//if SUCCESSFUL - go to RSVP page with checkboxes

class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      errorMessage: null,
      rsvp_info: null
    }
    this.clearForm = this.clearForm.bind(this)
    this.findInvite = this.findInvite.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.isFormComplete = this.isFormComplete.bind(this)
  }

  clearForm() {
    this.setState({
      firstName: "",
      lastName: "",
      password: "",
      errorMessage: null,
      rsvp_info: null
    })
  }

  findInvite(formData) {
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
        if (response["error"]) {
          this.setState({
            errorMessage: response["message"],
            password: ""
          })
        } else {
          this.setState({ rsvp_info: response })

          $(document).ready(function() {
            setTimeout(function(){
              $("#myModal").foundation('reveal', 'open');
            }, 0);
          });
        }
      })
      .catch ( error => console.error(`Error in fetch: ${error.message}`) );
  }


  handleSubmit(event) {
    event.preventDefault()

    if (!this.isFormComplete()) {
      this.setState({ errorMessage: "Only a complete form can be submitted." })
    } else {
      this.setState({ errorMessage: null })

      const formData = {
        invite: {
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          password: this.state.password
        }
      }

      this.findInvite(formData)
    }
  }

  handleTextChange(event) {
    this.setState({
      [event.target.className]: event.target.value,
      errorMessage: null
    })
  }

  isFormComplete() {
    const requiredFields = [
      this.state.firstName,
      this.state.lastName,
      this.state.password
    ]
    let result = true

    requiredFields.forEach((value) => {
      if (value === "") {
        result = false
      }
    })
    return result
  }

  render() {
    let name = "Just a moment...";
    let inviteNum;

    if (this.state.rsvp_info) {
      name = `Are you ${this.state.rsvp_info.full_name}?`,
      inviteNum = this.state.rsvp_info.invite_id
    }
    return(
      <div>
        <div className='greeting'>
          Galen and Chris are Getting Married!
        </div>
        <h3 className='center'>
          Please enter your first and last name,<br/>
          and the password from your invitation.
        </h3>
        <div className='error'>{this.state.errorMessage}</div>

        <form className='center' onSubmit={this.handleSubmit}>
          <div>
            <TextInputField
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleTextChange}
              label="First:"
            />
            <TextInputField
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleTextChange}
              label="Last:"
            />
          </div>
          <TextInputField
            name='password'
            value={this.state.password}
            onChange={this.handleTextChange}
            label="Password: "
          />
          <button
            type='submit'
            className='button'
            onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <PopUp
          name={name}
          inviteNum={inviteNum}
          clearForm={this.clearForm}
        />
      </div>
    )
  }
}

export default MainPage
