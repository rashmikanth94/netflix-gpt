import React, { useEffect } from 'react'
import Header from './Header';
import useSetNowPlayingMovies from '../customHooks/setNowPlayingMovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
const Browse = () => {


  useSetNowPlayingMovies()

  return (
    <div>
      <Header />
      <div>
        <Maincontainer />
        <Secondarycontainer />
      </div>
    </div>
  )
}

export default Browse