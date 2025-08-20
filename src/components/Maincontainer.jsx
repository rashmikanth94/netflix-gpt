import React from 'react'
import { useSelector } from 'react-redux'
import Videobackground from './Videobackground'
import Videotitle from './Videotitle'

function Maincontainer() {

    const nowPlayingMovies = useSelector((store)=> store.movies?.nowplaying)

    if(!nowPlayingMovies.length) return
    const mainMovie = nowPlayingMovies[0]
    return (
        <div>
            <Videotitle title={mainMovie?.original_title} overview={mainMovie?.overview}/>
            <Videobackground movieId={mainMovie?.id}/>
        </div>
    )
}

export default Maincontainer