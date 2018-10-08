import React from 'react'

import ReturnButton from './ReturnButton'
import invitationWording from '../constants/Invitation'

const Invitation = props => {
  return(
    <div>
      {invitationWording.invitation}
      <br/>
      <br/>
      {invitationWording.reception}
      <br/>
      <ReturnButton />
    </div>
  )
}

export default Invitation
