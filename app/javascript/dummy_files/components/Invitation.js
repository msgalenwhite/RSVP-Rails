import React from 'react'

import ReturnButton from './ReturnButton'

const Invitation = props => {
  let invitation =
    <div className="invitation">
      The pleasure of your company is requested<br/>
      at the marriage of<br/>
      <span className="brideandgroom">Galen Hillary White</span><br/>
      and<br/>
      <span className="brideandgroom">Christopher Francis Bimbo</span><br/>
      Saturday, the 13th of October<br/>
      (two thousand and eighteen)<br/>
    </div>

  let reception =
    <div className="reception">
      Ceremony and Reception<br/>
      to be held at<br/>
      <span className="hotel">Castle Manor Inn</span><br/>
      141 Essex Avenue<br/>
      Gloucester, MA 01930<br/>
    </div>

  return(
    <div className='page'>
      {invitation}
      <br/>
      <br/>
      {reception}
      <br/>
      <ReturnButton />
    </div>
  )
}

export default Invitation
