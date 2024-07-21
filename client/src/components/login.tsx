"use client"

import { useState, useEffect } from 'react';
import axios from "axios";
import { API_URL } from "@/constants";

import LoginForm from './reg_forms/loginform';
import ForgotPasswordForm from './reg_forms/forgotPassword';
import ResetPasswordForm from './reg_forms/resetPassword';
import RegistrationForm from './reg_forms/registration';
import ValidateEmailForm from './reg_forms/validateEmail';

import Image from 'next/image';
import no_image from '../assets/no_image.png';

const Login = ({ reset }: Readonly<{ reset: boolean }>) => {
    const states = {
        LoggedIn: "LoggedIn",
        Login: "Login",
        ForgotPassword: "ForgotPassword",
        ResetPassord: "ResetPassword",
        Register: "Register",
        Validate: "Validate",
    }
    const [loginState, setLoginState] = useState(states.Login);

    useEffect(() => {
        // reset form on modal open
        setLoginState(states.Login);
    }, [reset]);

    function handleLogOut() {
        // log out user then:
        localStorage.removeItem("token");
        setLoginState(states.Login);
    }

    async function handleRegistration(data: any) {
        var isRegistered = false;
    await axios.post(`${API_URL}/auth/register`, data)
    .then(res => {
      console.log(res.data);
      if(res.data.isRegistered){
        isRegistered = true;
      }
    })
    .catch(err => {
      console.log(err)
      if(err.response.status == (400 || 401 || 409)){ //we can check for more status codes that we return
        isRegistered = false;
      }
    })
    if(!isRegistered){
      setLoginState(states.Register);
    }
    else{
      setLoginState(states.Validate)
    }
        // save form values and a generated validation code to database
        // email validation code to user
        // present form to enter validation code
        // setLoginState(states.Validate) when we use user email validation code;
    }

    return (
        <div className="flex flex-row items-start justify-items-center h-fit w-fit p-20 overflow-hidden">
            <div className="flex-1">
                {loginState === states.LoggedIn &&
                    <>
                        <h2 className="w-fit text-2xl font-semibold">Welcome!</h2>
                        <div className="flex flex-row justify-between w-full">
                            <button className="transition ease-in-out delay-150 w-1/3 bg-purple-700 hover:bg-purple-400 text-white text-xl p-2.5 rounded-md">Manage Stores</button>
                            <button className="transition ease-in-out delay-150 w-1/3 bg-purple-700 hover:bg-purple-400 text-white text-xl p-2.5 rounded-md">Browse Items</button>
                        </div>
                        <a href="#" onClick={handleLogOut} className="transition ease-in-out delay-150 w-max text-purple-600 hover:text-purple-300">Sign Out.</a>
                    </>
                }
                {loginState === states.Login && 
                    <LoginForm setLoginState={setLoginState} />
                }
                {loginState === states.ForgotPassword &&
                    <ForgotPasswordForm setLoginState={setLoginState} />
                }
                {loginState === states.ResetPassord &&
                    <ResetPasswordForm setLoginState={setLoginState} />
                }
                {loginState === states.Register &&
                    <RegistrationForm setLoginState={setLoginState} handleRegistration={handleRegistration}/>
                }
                {loginState === states.Validate &&
                    <ValidateEmailForm setLoginState={setLoginState} />
                }
            </div>
            <div className="flex-1 hidden sm:inline">
                <Image alt="No Image" src={no_image} className="w-[1024px] h-[1024pxobject-cover" />
            </div>
        </div>
    );
}

export default Login;