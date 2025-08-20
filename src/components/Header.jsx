import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {auth} from './../utils/firebase';

import { removeUser } from "../Reducers/userSlice";
import { useNavigate } from "react-router-dom";

import {BODY_BACKGROUND, NETFLIX_LOGO} from './../Constants/constants'

const Header = () => {

  const {user} = useSelector((state) => state.user);

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
      src={NETFLIX_LOGO} />

      {
        (user && user.email) &&
        <div>
          <div className="absolute right-8 d-flex" style={{top:'20px', display:'flex', gap:'5px'}}>
          <img 
            className="w-10 h-10"
            src={BODY_BACKGROUND} />
            <button className="font-bold cursor-pointer" onClick={handleSignout}>Sign out</button>
          </div>
        </div>
      }
  
    </div>
  )
}

export default Header