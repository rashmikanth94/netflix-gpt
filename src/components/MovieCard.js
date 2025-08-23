import React from 'react'

function MovieCard({movie}) {

    const imgUrl = 'https://image.tmdb.org/t/p/w300/'+movie?.poster_path;
  return (
    <div className='w-40 pr-4'>
        <img src={imgUrl}></img>
    </div>
  )
}

export default MovieCard