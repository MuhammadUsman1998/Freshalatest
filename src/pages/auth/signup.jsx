import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import SocialLogin from "react-social-login";
// import { FacebookLoginButton } from "react-social-login-buttons";
// import SocialButton from "./SocialButton";
export const SignUpPage = () => {


    const handleSocialLogin = (user) => {
        console.log(user);
    };

    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">

                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Fresha</h2>

            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md 2xl:flex justify-center">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10  ">

                    <h1 className="text-2xl font-bold">Sign up as a customer</h1>
                    <p className="pt-3">Log in or sign up to book your first treatment today!</p>

                    <form className="space-y-6" action="# " >
                        <div>
                            <Link to="/signUpForm">
                                <button className=' w-full mt-3 p-2  bg-slate-900 hover:bg-slate-600 text-white text-xl rounded-lg'>Sign Up with Email</button>
                            </Link>
                        </div>
                        <div>
                            <button className='w-full flex justify-center p-2 bg-white-100
                             text-black border-2 border-grey-600 text-xl rounded-lg '>
                                {/* <div className='flex'> */}
                                <img src="https://img.icons8.com/color/48/000000/google-logo.png" />

                                <a href=" http://www.google.com" className='pt-2 '>Continue with Google </a>

                                {/* </div> */}
                                {/* <SocialButton
                                    provider="google"
                                    appId="YOUR_APP_ID"
                                    onLoginSuccess={handleSocialLogin}
                                    onLoginFailure={handleSocialLoginFailure}>
                                    Login with Google
                                </SocialButton> */}

                            </button>
                            <SocialLogin provider="google"
                                appId="YOUR_APP_ID"
                                onLoginSuccess={handleSocialLogin}
                                onLoginFailure={handleSocialLoginFailure}>
                                Login with Google

                            </SocialLogin>
                        </div>
                        <div className='sm:flex flex-wrap sm:text-sm'>
                            <button className='w-full flex justify-center p-2 bg-white-100 
                            text-black border-2 border-grey-600 text-xl rounded-lg '>
                                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                                <a href='http://www.facebook.com' className='pt-2 '>Continue with facebook</a>
                                {/* <FacebookLoginButton onClick={() => alert("Hello")} /> */}
                            </button>
                        </div>
                        {/* <div className="flex items-center justify-between">
                        </div> */}

                        {/* <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Login
                            </button>
                        </div> */}
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center ">
                                <span className="px-2 bg-white text-gray-500">Already Have an Account</span>
                            </div>
                        </div>
                        <Link to="/loginform" className="flex justify-center text-blue">Login in now</Link>
                    </div>
                </div>
            </div>


            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="text-center ">
                        <h1 className="text-2xl font-bold">Become a partner</h1>
                        <p className="">Manage your business with Fresha by  signing up as a professional</p>
                    </div>
                </div>
            </div>
            <p className="text-center mt-4 text-gray-400">© 2022 Fresha.com SV Ltd</p>
        </div>
    )
}


