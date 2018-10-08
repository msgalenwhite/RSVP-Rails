import React from 'react'
import ReturnButton from './ReturnButton'

const Registry = props => {
  return(
    <div>
      <div className="heading registryHeader">Galen and Chris are registered at two locations:</div>
      <div className='registryLinks'>
        <a href="https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=545839850&eventType=Wedding&pwsurl=">
          <img
            src="https://s7d9.scene7.com/is/image/BedBathandBeyond/logo_20130226_bbb_stacked?$other$"
            alt='Bed Bath and Beyond Logo'
            className='registryImage'/>
        </a>
        <a href="https://www.amazon.com/wedding/galen-white-chris-bimbo-gloucester-october-2018/registry/7ZDHYRQ9I313">
          <img
            src="http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg"
            alt='Amazon Logo'
            className='registryImage'/>
        </a>
      </div>
      <ReturnButton />
    </div>
  )
}

export default Registry
