import React from 'react'
import { Link } from 'react-router'

const PopUp = props => {
  const buttonToClose = "close_on_background_click:false;close_on_esc:false;"
  const closeAndBackModal = () => {
    props.clearForm()
    window.location.href = "/"
  }
  const closeContinueModal = () => {
    window.location.href = "/"
  }
  return(
    <div id="myModal" data-reveal data-options={buttonToClose} aria-labelledby="modalTitle" aria-hidden="true" role="dialog" className="reveal-modal text-center">

      <h3 className='sub-header text-center pop-up'>{props.name}</h3>

      <button className='general-button center' onClick={closeAndBackModal}>
        No
      </button>
      <Link to={`/invite/${props.inviteNum}`}><button className='general-button center'>
        Yes
      </button></Link>
    </div>
  )
}

export default PopUp
