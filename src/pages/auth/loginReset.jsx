import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import service from "../../assets/images/service.webp"

export const LoginResetPage = () => {
    return (


        <div className='bg-slate-900 h-36'>
            <div className="max-w-7xl mx-auto px-32 sm:px-6 lg:px-8">
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



            <div className="max-w-7xl mx-auto px-48 sm:px-6 lg:px-8">
                <div className=" flex  justify-between py-12 sm:px-6 lg:px-8 -mt-10 mr-12">
                    <div className=" mt-6 sm:mx-auto sm:w-full sm:max-w-md flex justify-between w-11/12">
                        <div className="bg-white py-4 px-4 shadow rounded-lg w-full lg:w-2/3 md:w-3/4 sm:w-screen">
                            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                                <h2 className="text-center text-3xl font-extrabold text-gray-900">Fresha</h2>
                            </div>
                            <h1 className="mt-5 text-2xl font-bold">Forgot password?</h1>
                            <p className="">Enter your registered email address and we'll send you a secure link to setup a new password.</p>
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

                    <div className=" bg-white mt-4  w-72 shadow-lg rounded-lg sm:mt-5 ml-7 lg:hidden ">
                        <div className='-mt-7 flex justify-center  '>
                            <img className=' rounded-lg shadow-md border-4 border-neutral-100' src={service} />
                        </div>
                        <div className='text-center font-bold pt-3'>
                            <h1>Salon</h1>
                            <h1 className='pt-2'>LHR</h1>
                        </div>
                    </div>


                </div>
            </div>


        </div >
    )
}