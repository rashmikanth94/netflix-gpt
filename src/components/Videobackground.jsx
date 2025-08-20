import React, { useEffect } from 'react'
import {serviceEndPoints, API_HEADERS} from './../Constants/constants'

function Videobackground({movieId}) {

    console.log(movieId)

    const url = `${serviceEndPoints.videos}${movieId}/videos`

    async function getVideos(){
        console.log('API call')
        const videos = await fetch(url, API_HEADERS)
        const videosData = await videos.json()
        console.log(videosData)
    }

    useEffect(()=>{
        if(movieId){
            getVideos()
        }
    },[])

  return (
    <div>Videobackground</div>
  )
}

export default Videobackground