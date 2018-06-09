import React, {Component} from 'react'

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
    )
  }
}

export default RsvpPage
