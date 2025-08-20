import { createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import { RouterProvider } from 'react-router-dom';
import ProtectedRoute from './../RouteGuards/ProtectedRoute'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Body = () => {

  const isAuthenticated = false;
  const {user} = useSelector((state) => state.user);

  const routes = createBrowserRouter([
    {
      path:'',
      element:<Login />
    },
    {
      element: <ProtectedRoute user={user} />, // guard wrapper
      children: [
        {
          path:'/browse',
          element:<Browse />
        }
      ],
    }
  ]);


  return (
    <div>
     <RouterProvider router={routes}/>
    </div>
  )
}

export default Body