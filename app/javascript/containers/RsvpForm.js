import React from 'react'

import RsvpEntry from '../components/RsvpEntry'
import TextInputField from '../components/TextInputField'

import invitationWording from '../constants/Invitation'

const RsvpForm = props => {

  let plusOneParagraph;
  let babyParagraph;

  if (props.plusOneBoolean) {
    plusOneParagraph =
      <div>
        <p>
          You are welcome to bring someone with you as your Plus One.  If you know the name of the person who will be joining you, please let us know so we can best organize their seating arrangement for dinner.
        </p>
        <p>
          If you have decided that you would prefer to celebrate with Galen and Chris without an additional member in your party, please leave the name field blank and select 'Will Not Attend' beneath their section.
        </p>
      </div>
  }

  if (props.babyBoolean) {
    babyParagraph =
      <p>
      You are welcome to bring your child, but please let the hotel know if you require any additional sleeping accomodations.  There will not be childcare available.
      </p>
  }

  const entries = props.rsvps.map((familyMember) => {
    let component;

    const attendingBoxClick = () => {
      props.onBoxClick({
        name: familyMember.full_name,
        isAttending: true
      })
    }
    const notAttendingBoxClick = () => {
      props.onBoxClick({
        name: familyMember.full_name,
        isAttending: false
      })
    }

    if (familyMember.full_name === 'plusOne') {
      let name = props.plusOneName
      if (name === "") {
        name = 'Plus One'
      }
      component =
        <div key="RSVPlusOne">
          <RsvpEntry
            key='plusOne'
            name={name}
            yesClick={attendingBoxClick}
            noClick={notAttendingBoxClick}
            attending={familyMember.is_attending}
          />
          <TextInputField
            name="plusOneName"
            label="Name: "
            value={props.plusOneName}
            onChange={props.handleChange}
          />
        </div>
    } else {
      component =
        <RsvpEntry
          key={`RSVP-${familyMember.id}`}
          name={familyMember.full_name}
          yesClick={attendingBoxClick}
          noClick={notAttendingBoxClick}
          attending={familyMember.is_attending}
        />
    }

    return component
  })

  let dietaryText = "Do you or anyone in your party have dietary restrictions?  Please let us know and we will do our best to accomodate you."

  return(
    <div>
      {invitationWording.invitation}
      <br/>
      <br/>
      {invitationWording.reception}
      <br/>
      {babyParagraph}
      {plusOneParagraph}
      <div className='rsvp-div'>
        {entries}
        <br/>
        <div className="dietary-div">
          <p>
            {dietaryText}
          </p>
          <textarea
            value={props.dietaryRestrictions}
            onChange={props.handleChange}
            className="dietaryRestrictions"
          >
          </textarea>
        </div>
      </div>
      <div className="dietary-div">
        <button
          className='button'
          onClick={props.showReview}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default RsvpForm
