import React, {useEffect} from 'react'
import {serviceEndPoints, API_HEADERS} from './../Constants/constants'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../Reducers/movieSlice';

function useSetPopularMovies() {
    const dispatch = useDispatch();

    useEffect(()=>{
      getMoviesData()
    },[])
  
  
    async function getMoviesData(){  
      const response = await fetch(serviceEndPoints.popularMovies, API_HEADERS)
      const data = await(response.json())  
      dispatch(addPopularMovies(data.results))
    }
}

export default useSetPopularMovies