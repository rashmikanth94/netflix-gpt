import React, { useEffect, useState } from 'react'
import {serviceEndPoints, API_HEADERS} from './../Constants/constants'
import useSetTrailerBg from './../customHooks/setTrailerBg'

function Videobackground({movieId}) {
    const trailer = useSetTrailerBg(movieId)+ "?&autoplay=1&mute=1"

  return (
    <div className='w-screen'>
        <iframe className='w-screen aspect-video'
     src={trailer} 
     title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default Videobackground