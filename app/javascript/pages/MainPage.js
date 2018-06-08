import React, {Component} from 'react'
import TextInputField from '../components/TextInputField'

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
      errorMessage: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.isFormComplete = this.isFormComplete.bind(this)
  }

  componentDidUpdate() {
    if (this.props.errorParams && this.state.password !== "") {
      this.setState({
        password: "",
        errorMessage: this.props.errorParams["message"]
      })
    }
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

      this.props.getInvitees(formData)
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
      </div>
    )
  }
}

export default MainPage
