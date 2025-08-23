import React, {useEffect} from 'react'
import {serviceEndPoints, API_HEADERS} from './../Constants/constants'
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../Reducers/movieSlice';

function useSetUpcomingMovies() {
    const dispatch = useDispatch();

    useEffect(()=>{
      getMoviesData()
    },[])
  
  
    async function getMoviesData(){  
      const response = await fetch(serviceEndPoints.upcomingMovies, API_HEADERS)
      const data = await(response.json())  
      dispatch(addUpcomingMovies(data.results))
    }
}

export default useSetUpcomingMovies