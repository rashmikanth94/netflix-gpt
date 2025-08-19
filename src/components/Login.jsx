import { useState } from "react";
import Header from "./Header";

function Login(){

    const [isSignIn, toggleSignIn] = useState(true)

    function modify(){
        toggleSignIn(!isSignIn)
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg' />
            </div>


            <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4"> 
                {
                isSignIn?
                'Sign In': 'Sign Up'
                }
                </h1>
                <input type="text" placeholder="Email Address" className="p-2 m-2 w-full bg-gray-700"></input>
                {
                    !isSignIn && <input type="text" placeholder="Name" className="p-2 m-2 w-full bg-gray-700"></input>

                }
                <input type="text" placeholder="Password" className="p-2 m-2 w-full bg-gray-700"></input>
                <button className="p-2 my-5 mx-2 bg-red-700 w-full">
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