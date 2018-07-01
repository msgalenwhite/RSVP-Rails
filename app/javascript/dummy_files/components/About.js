import React from 'react'

import ReturnButton from './ReturnButton'

const About = props => {

  return(
    <div className='page'>
      <h1 className='heading'>Thanks!</h1>
      <p>For those of you who haven't heard, I'm leaving the world of chocolates and cakes for the world of computers and software/web development.  I'm really excited about the change, and I thought making this site would be good practice.</p>
      <p>If you have any comments/suggestions, let me know!  I've set up a blog to explain my journey, so feel free to check it out or leave comments about this site on any of the posts.</p>
      <p>The site is:</p>
      <div className='center'>
        <a href='http://galencancode.blogspot.com/' className='blog'>
          Galen Can Code
        </a>
      </div>
      <h3 className='signature'>~ Galen</h3>
      <ReturnButton />
    </div>
  )
}

export default About
