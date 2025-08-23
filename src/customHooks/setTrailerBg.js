import React, { useEffect, useState } from 'react'
import {serviceEndPoints, API_HEADERS} from './../Constants/constants'
function useSetTrailerBg(movieId) {


    const [trailer, updateTrailer] = useState('')

    const url = `${serviceEndPoints.videos}${movieId}/videos`


    async function getVideos(){
        console.log('API call')
        const videos = await fetch(url, API_HEADERS)
        const videosData = await videos.json()
        console.log(videosData)


        const trailer = videosData.results.filter((video)=> video.type === 'Trailer')[0]
        console.log(trailer)


        const urlNew = 'https://www.youtube.com/embed/'+trailer.key

        updateTrailer(urlNew);
    }

    useEffect(()=>{
        if(movieId){
            getVideos()
        }
    },[])


    return trailer;

}

export default useSetTrailerBg