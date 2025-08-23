import React, { useEffect } from 'react'
import Header from './Header';
import useSetNowPlayingMovies from '../customHooks/setNowPlayingMovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import useSetTRMovies from '../customHooks/setTopRatedMovies';
import useSetPopularMovies from '../customHooks/setPopularMovies';
import useSetUpcomingMovies from '../customHooks/setUpcomingMovies';
const Browse = () => {


  useSetNowPlayingMovies();
  useSetTRMovies();
  useSetPopularMovies();
  useSetUpcomingMovies()

  return (
    <div className='bg-black'>
      <Header />
      <div>
        <Maincontainer />
        <Secondarycontainer />
      </div>
    </div>
  )
}

export default Browse