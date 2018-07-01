import React from 'react'

import ReturnButton from './ReturnButton'

const Transportation = props => {

  return(
    <div className='page transport'>
      <h1 className='heading'>Getting TO and FROM the Wedding</h1>
      <h3 className='title'>Flying to Boston, MA</h3>
      <p>The best airport to fly into/out of would be <a href='http://www.massport.com/logan-airport/'>Boston Logan International</a>. My favorite airlines are JetBlue and Virgin America, although you are welcome to use whatever airline you would like.</p>
      <p>The drive from Boston Logan to the Castle Manor Inn is 45-50 minutes according to Google. If you are staying on-site, taking an Uber might be recommended rather than renting a car.  Let me know when your plane lands and if you're planning to use a ride-share, and I will try to add a page here to help coordinate carpools.</p>
      <p>If you are not staying on-site, renting a car for you or your family might be easier than trusting Uber.  I would hate for your Uber driver to be responsible for you missing me in my gown (and trust me, you don't want to miss it!)</p>

      <h3 className='title'>What if I live in the area, and want to help?</h3>
      <p>That would be great!  Let me know when you are available, and how many people you could fit in your car.  Even a single trip from Boston Logan to the Castle Manor Inn would be really appreciated!</p>

      <h3 className='signature'>~ Galen</h3>
      <ReturnButton />
    </div>
  )
}

export default Transportation
