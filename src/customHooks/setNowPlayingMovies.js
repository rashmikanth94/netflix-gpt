import React, {useEffect} from 'react'
import {serviceEndPoints, API_HEADERS} from './../Constants/constants'
import { useDispatch } from 'react-redux';
import { addMovies } from '../Reducers/movieSlice';

function useSetNowPlayingMovies() {
    const dispatch = useDispatch();

    useEffect(()=>{
      getMoviesData()
    },[])
  
  
    async function getMoviesData(){  
      const response = await fetch(serviceEndPoints.movies, API_HEADERS)
      const data = await(response.json())  
      dispatch(addMovies(data.results))
    }
}

export default useSetNowPlayingMovies