import React from 'react'

const RsvpSummary = props => {
  const makeListOfNames = (heading, array) => {
    let list;

    if (array.length > 0) {
      list = array.map((name) => {
        return( <span key={name}>{name}<br/></span>)
      })
    } else {
      list = <span key='n/a'>n/a</span>
    }

    return(
      <div className='center'>
        <h3 className='title'>{heading}</h3>
        {list}
      </div>
    )
  }

  let introPara =
    <div className="rsvpInfo">
      <h3 className="heading">RSVP Details</h3>
      <p>Your information will NOT be submitted until you press submit at the bottom of this page.</p>
      <p>If you would like to make a change before submitting, do NOT use the back button in your browser.  Instead, select "Change RSVP" below.</p>
      <p>We completely understand that plans can change - if you need to make a change to your RSVP after submitting it, please come back to the website.  The deadline for submitting changes through the website is September 1st.  If something occurs after that date, please contact Galen or Chris via phone/email/Facebook and let them know.</p>
    </div>

  let willAttend = []
  let willNotAttend = []

  props.rsvps.forEach((familyMember) => {
    let name = familyMember.full_name
    if (name === 'plusOne' && props.plusOneName !== ''){
      name = props.plusOneName
    }

    if (familyMember.is_attending){
      willAttend.push(name)
    } else {
      willNotAttend.push(name)
    }
  })

  const nameLists =
    <div className='rsvp-summary'>
      {makeListOfNames("Attending: ", willAttend)}
      {makeListOfNames("Not Attending: ", willNotAttend)}
    </div>

  let dietaryRestrictions;
  if (props.dietaryRestrictions) {
    dietaryRestrictions =
    <div className='diet'>
      <h3 className='title'>Dietary Restrictions:</h3>
      <div className='diet-text'>
        {props.dietaryRestrictions}
      </div>
    </div>
  }

  return(
    <div>
      {introPara}
      <h3 className='center'>Here is a summary of your RSVP so far:</h3>
      {nameLists}
      {dietaryRestrictions}
      <br/>
      <div className='center'>
        <button
          className='button'
          onClick={props.changeRSVP}
        >
          Change RSVP
        </button>
        <button
          className='button'
          onClick={props.handleSubmit}
        >
          Send RSVP
        </button>
      </div>
    </div>
  )
}

export default RsvpSummary
