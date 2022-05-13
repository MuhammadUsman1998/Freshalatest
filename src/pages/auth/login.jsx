import React from 'react'
import { Routes, Route, Link } from "react-router-dom";


export const LoginPage = () => {


    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Fresha</h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ">

                    <h1 className="text-2xl font-bold">Login as a customer</h1>
                    <p className="pt-3">Log in or sign up to book your first treatment today!</p>

                    <form className="space-y-6" action="#" >
                        <div>
                            <Link to="/signUpForm">
                                <button className=' w-full mt-3 p-2  bg-slate-900 hover:bg-slate-600 text-white text-xl rounded-lg'>Login with Email</button>
                            </Link>
                        </div>
                        <div>
                            <button className='w-full flex justify-center p-2 bg-white-100
                             text-black border-2 border-grey-600 text-xl rounded-lg '>
                                <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                                <a href="http://www.google.com" className='pt-2 '>Continue with Google </a>
                            </button>
                        </div>
                        <div>
                            <button className='w-full flex justify-center p-2 bg-white-100 
                            text-black border-2 border-grey-600 text-xl rounded-lg '>
                                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                                <a href="http://www.facebook.com" className='pt-2 '>Continue with facebook</a>
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                        </div>


                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-center">
                                <span className="px-2 bg-white text-gray-500">Dont Have a Customer Account</span>
                            </div>
                        </div>
                        <Link to="/signUpForm" className="flex justify-center text-blue">Sign up now</Link>
                    </div>
                </div>
            </div>


            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Login for business</h1>
                        <p className="">Manage your business with Fresha by  signing up as a professional</p>
                    </div>
                </div>
            </div>
            <p className="text-center mt-4 text-gray-400">© 2022 Fresha.com SV Ltd</p>
        </div>
    )
}
