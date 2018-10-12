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
      <div className='barcode'>
        <img src='https://i.imgur.com/plj1nDg.png' />
      </div>
      <ReturnButton />
    </div>
  )
}

export default Invitation
