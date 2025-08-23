import React, {useEffect} from 'react'
import {serviceEndPoints, API_HEADERS} from './../Constants/constants'
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../Reducers/movieSlice';

function useSetTRMovies() {
    const dispatch = useDispatch();

    useEffect(()=>{
      getMoviesData()
    },[])
  
  
    async function getMoviesData(){  
      const response = await fetch(serviceEndPoints.trMovies, API_HEADERS)
      const data = await(response.json())  
      dispatch(addTopRatedMovies(data.results))
    }
}

export default useSetTRMovies