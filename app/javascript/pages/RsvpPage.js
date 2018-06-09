import React, {Component} from 'react'
import RsvpForm from '../containers/RsvpForm'

class RsvpPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      inviteId: parseInt(this.props.params.id)
    }
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
