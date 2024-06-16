"use client"
import { useState, useEffect } from 'react';

import Image from 'next/image';
import no_image from '../assets/no_image.png';

const Login = () => {
    const [isRegistration, setIsRegistration] = useState(false);
    const [isValidating, setIsValidating] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);
    const [passwordResetSent, setPasswordResetSent] = useState(false);

    useEffect(() => {
        setIsRegistration(false);
        setIsValidating(false);
        setIsLoggedIn(false);
        setForgotPassword(false);
        setPasswordResetSent(false);
    }, []);

    function handleLogin() {
        // compare login info with database values
        // on success, close form

        // if validated in database then:
        setIsValidating(false)
        setIsLoggedIn(true);
        // else
        /*
        setIsValidating(true)
        setIsLoggedIn(false)
        */
    }

    function handleSaveNewPassword() {
        // save new password to database
        setForgotPassword(false);
        setPasswordResetSent(false)
    }

    function handleRegistration() {
        // save form values and a generated validation code to database
        // email validation code to user
        // present form to enter validation code
        setIsValidating(true)
    }

    function validate() {
        // compare validation code with code in database
        // on success, go to Login page
        setIsRegistration(false);
        setIsValidating(false);
        setIsLoggedIn(false);
    }

    return (
        <div className="flex flex-row items-start justify-items-center h-fit w-fit p-20 overflow-hidden">
            {!isRegistration && 
                <div className="flex-1">
                    <div className="flex flex-col items-center gap-10">
                        {!isLoggedIn && 
                            <>
                                {!forgotPassword &&  
                                    <>                              
                                        <h2 className="w-max text-2xl font-semibold">Sign In</h2>
                                        <input type="text" placeholder='Username or Email Address' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                        <input type="password" placeholder='Password' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                        <a href="#" onClick={() => setForgotPassword(true)} className="transition ease-in-out delay-150 w-max text-purple-600 hover:text-purple-300">Forgot Password?</a>
                                        <button onClick={handleLogin} className="transition ease-in-out delay-150 w-1/2 bg-purple-700 hover:bg-purple-400 text-white text-xl p-2.5 rounded-md">Login</button>
                                        <a href="#" onClick={() => setIsRegistration(true)} className="transition ease-in-out delay-150 w-max text-purple-600 hover:text-purple-300">Need to Sign Up?</a>
                                    </>
                                }
                                {forgotPassword && 
                                    <>
                                        {!passwordResetSent && 
                                            <>
                                                <h2 className="w-max text-2xl font-semibold">Password Reset</h2>
                                                <input type="text" placeholder='Username or Email Address' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                                <button onClick={() => setPasswordResetSent(true)} className="transition ease-in-out delay-150 w-1/2 bg-purple-700 hover:bg-purple-400 text-white text-xl p-2.5 rounded-md">Request Reset</button>
                                                <a href="#" onClick={() => setForgotPassword(false)} className="transition ease-in-out delay-150 w-max text-purple-600 hover:text-purple-300">Cancel</a>
                                            </>
                                        }
                                        {passwordResetSent && 
                                            <>
                                                <input type="text" placeholder='Temp Password' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                                <input type="password" placeholder='Password' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                                <input type="password" placeholder='Confirm Password' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                                <button onClick={handleSaveNewPassword} className="transition ease-in-out delay-150 w-1/2 bg-purple-700 hover:bg-purple-400 text-white text-xl p-2.5 rounded-md">Submit</button>
                                            </>
                                        }
                                    </>
                                }
                            </>
                        }
                        {isLoggedIn && 
                            <>
                                <h2 className="w-fit text-2xl font-semibold">Welcome!</h2>
                                <div className="flex flex-row justify-between w-full">
                                    <button className="transition ease-in-out delay-150 w-1/3 bg-purple-700 hover:bg-purple-400 text-white text-xl p-2.5 rounded-md">Manage Stores</button>
                                    <button className="transition ease-in-out delay-150 w-1/3 bg-purple-700 hover:bg-purple-400 text-white text-xl p-2.5 rounded-md">Browse Items</button>
                                </div>
                                <a href="#" onClick={() => setIsLoggedIn(false)} className="transition ease-in-out delay-150 w-max text-purple-600 hover:text-purple-300">Sign Out.</a>
                            </>
                        }
                    </div>
                </div>
            }
            {isRegistration && 
                <div className="flex-1">
                    <div className="flex flex-col items-center gap-10">
                        {!isValidating && 
                            <>
                                <h2 className="w-fit text-2xl font-semibold">Sign Up</h2>
                                <input type="text" placeholder='First Name' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <input type="text" placeholder='Last Name' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <input type="text" placeholder='Middle' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <input type="text" placeholder='Username' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <input type="password" placeholder='Password' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <input type="password" placeholder='Confirm Password' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <input type="text" placeholder='Email Address' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <input type="text" placeholder='Phone Number' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <input type="text" placeholder='Country' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <input type="text" placeholder='Address' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <input type="text" placeholder='City' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <input type="text" placeholder='State/Province' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <input type="text" placeholder='Zip Code' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <label htmlFor="avatar_file" className="">Choose an Avatar</label>
                                <input id="avatar_file" type="file" placeholder='Avatar' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <button onClick={handleRegistration} className="transition ease-in-out delay-150 w-1/2 bg-purple-700 hover:bg-purple-400 text-white text-xl p-2.5 rounded-md">Submit</button>
                                <a href="#" onClick={() => setIsRegistration(false)} className="transition ease-in-out delay-150 text-purple-600 hover:text-purple-300">Already have an account? Sign In.</a>
                            </>
                        }
                        {isValidating && 
                            <>
                                <h2 className="w-max text-2xl font-semibold">Validate Email</h2>
                                <input type="text" placeholder='Validation Code' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />
                                <button onClick={validate} className="transition ease-in-out delay-150 w-1/2 bg-purple-700 hover:bg-purple-400 text-white text-xl p-2.5 rounded-md">Validate</button>
                            </>
                        }
                    </div>
                </div>
            }
            <div className="flex-1">
                <Image alt="No Image" src={no_image} className="w-[1024px] h-[1024pxobject-cover" />
            </div>
        </div>
    );
}

export default Login;