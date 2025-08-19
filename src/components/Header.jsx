import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {auth} from './../utils/firebase';

import { removeUser } from "../Reducers/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const {user} = useSelector((state) => state.user);
  console.log('user in header:', user)

  const dispatch = useDispatch();
  const navigate = useNavigate();


  function handleSignout() {
    signOut(auth).then(() => { 
      console.log('signedout successfully')
      dispatch(removeUser());
      navigate('/');
    }).catch((error) => {
      console.error("Sign out error:", error);
    })
  }


  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen" style={{zIndex:11}}>
      <img 
      className="w-44"
      src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />

      {
        (user && user.email) &&
        <div>
          <div className="absolute right-8 d-flex" style={{top:'20px', display:'flex', gap:'5px'}}>
          <img 
            className="w-10 h-10"
            src="https://occ-0-2042-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7" />
            <button className="font-bold" onClick={handleSignout}>Sign out</button>
          </div>
        </div>
      }
  
    </div>
  )
}

export default Header