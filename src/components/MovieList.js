import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title, movies}) {

    console.log(title, movies)
  return (
    <div className='px-2'>
        <div className='text-2xl py-4 text-white font-bold'>
            <h1>{title}</h1>
        </div>
        <div className='flex overflow-x-scroll' >
            <div className='flex'>
                {
                    movies.map((movie)=>{
                        return(
                            <MovieCard key={movie.id} movie={movie}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList