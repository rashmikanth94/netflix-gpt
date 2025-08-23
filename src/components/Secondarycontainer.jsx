import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

function Secondarycontainer() {

    const movies = useSelector(store => store.movies)

    console.log(movies)
  return (
    <div className='-mt-52 z-10 relative pl-10'> 

        <MovieList title={'Now Playing'} movies={movies.nowplaying}/>

        <MovieList title={'Trending'} movies={movies.topRated}/>

        <MovieList title={'Popular'} movies={movies.popular}/>

        <MovieList title={'Upcoming Movies'} movies={movies.upcoming}/>

    </div>
  )
}

export default Secondarycontainer