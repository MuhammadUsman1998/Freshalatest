import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
export const LoginResetPage = () => {
    return (


        <div className='bg-slate-900 h-44'>
            <div className="max-w-7xl mx-auto px-40 sm:px-6 lg:px-8">
                <div className=' p-4'>
                    <div className='flex justify-between '>
                        <div className='flex'>
                            <div className='pl-3'>
                                <Link to="/loginContinue" className="hover:text-gray-600 text-white fa-solid fa-arrow-left float-left pr-5" ></Link>
                            </div>
                            <p className='text-white '>Step 3/3 </p>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white pl-10">Forgot Password</h1>
                </div>
            </div>



            <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div className=" mt-6 sm:mx-auto sm:w-full sm:max-w-md 2xl:flex justify-center">
                    <div className="bg-white py-4 px-4 shadow sm:rounded-lg w-2/4 sm:w-2/3">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                            <h2 className="text-center text-3xl font-extrabold text-gray-900">Fresha</h2>
                        </div>
                        <h1 className="text-2xl font-bold">Forgot password?</h1>
                        <p className="mt-5">Enter your registered email address and we'll send you a secure link to setup a new password.</p>
                        <form className="space-y-4 " action="#">
                            <div>
                                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder='Your Email'
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <br></br>
                        </form>
                        <div>
                            <button
                                type="submit"
                                className=" mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Reset Password
                            </button>
                        </div>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                </div>

                            </div>
                            <Link to="/loginContinue" className=" flex justify-center text-blue-400 cursor-pointer">Back To Login</Link>

                        </div>
                    </div>
                </div >

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md 2xl:flex justify-center">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 w-2/4 sm:w-2/3">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold">Login for businesses</h1>
                            <p className="">To access your business account please go to the business login page</p>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-4 text-gray-400">© 2022 Fresha.com SV Ltd</p>
            </div>
        </div >
    )
}