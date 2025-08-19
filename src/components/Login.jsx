import { useState, useRef } from "react";
import Header from "./Header";

import {vadidateData} from "./../utils/Validate";
import {signUp, signIn} from "./../utils/fireaseMethods";
import { setUser } from "../Reducers/userSlice";

import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

function Login(){


    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState('') // For error message
    const [isSignIn, toggleSignIn] = useState(true)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function modify(){
        toggleSignIn(!isSignIn)
    }

    function submit(){
        handleAuth()
    }

    function updateUserDetails(user){

        const userDetails = {
            email:user.email,
            name:user.email.split('@')[0]
        }

        dispatch(setUser(userDetails))
    }

    function handleSignIn(){
        signIn(email.current.value,password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            updateUserDetails(user)
            navigate('/browse')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + '-' + errorMessage)
          });
    }

    function handleSignUp(){
        signUp(email.current.value,password.current.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            navigate('/browse')
            modify()
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    function handleAuth(){
       const response = vadidateData(email.current.value,password.current.value)
       if(!response.status){
        setErrorMessage(response.message)
       } else {
        if(isSignIn){
            handleSignIn()
        } else {
            handleSignUp()
        }
        setErrorMessage('')
       }
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg' />
            </div>


            <form 
                className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80" 
                onSubmit={(e)=>e.preventDefault()}>
                <h1 className="font-bold text-3xl py-4"> 
                {
                isSignIn?
                'Sign In': 'Sign Up'
                }
                </h1>
                <input type="text" placeholder="Email Address" className="p-2 m-2 w-full bg-gray-700" ref={email}></input>
                {
                    !isSignIn && <input type="text" placeholder="Name" className="p-2 m-2 w-full bg-gray-700"></input>

                }
                <input type="text" placeholder="Password" className="p-2 m-2 w-full bg-gray-700" ref={password}></input>

                <p className="text-red-500 p-2 m-2">{errorMessage}</p>
                <button className="p-2 my-5 mx-2 bg-red-700 w-full" onClick={submit}>
                    {
                        isSignIn?
                        'Sign In': 'Sign Up'
                    }
                </button>


                {
                    isSignIn? 
                    <p className="p-2 m-2">New to Netfilx? 
                    <span onClick={modify} className="cursor-pointer">Sign Up Now</span>
                    </p>
                    :
                    <p className="p-2 m-2">Already Subdcribed? 
                    <span onClick={modify} className="cursor-pointer">Sign In Now</span>
                    </p>
                }

            </form>

        </div>
    )
}

export default Login;