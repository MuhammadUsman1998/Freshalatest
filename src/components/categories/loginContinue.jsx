import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/Actions/userActions';
import service from "../../assets/images/service.webp"




export const LoginContinue = () => {

    const [inputForm, setInputForm] = useState({
        contactNumber: "03023456789",
        password: "123456"
    });


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            contactNumber: inputForm.contactNumber,
            password: inputForm.password,

        }
        dispatch(userLogin(obj));
        navigate("/orderSuccess")
    }
    localStorage.setItem("user", JSON.stringify(""));

    return (


        <div className='bg-slate-900 h-36'>
            <div className="max-w-7xl mx-auto px-32 sm:px-6 lg:px-8">
                <div className=' p-4'>
                    <div className='flex justify-between '>
                        <div className='flex'>
                            <div className='pl-3'>
                                <Link to="/signupcontinueComponent" className="hover:text-gray-600 text-white fa-solid fa-arrow-left float-left pr-5" ></Link>
                            </div>
                            <p className='text-white '>Step 3/3 </p>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-white pl-10">Login To Continue</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-48 sm:px-6 lg:px-8">
                <div className=" flex justify-between  sm:px-6 lg:px-8">
                    <div className="w-2/3  sm:mx-auto sm:w-full sm:max-w-md ">
                        <div className=" bg-white py-8 px-4 shadow rounded-lg sm:px-10 w-full mt-9">
                            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                                <h2 className=" text-center text-3xl font-extrabold text-gray-900">Fresha</h2>
                            </div>
                            <form className="space-y-4 " action="#  ">
                                <div>
                                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                                        Contact Number
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="contactNumber"
                                            name="contactNumber"
                                            type="contactNumber"
                                            maxLength={11}
                                            placeholder="0300 XXXX XXX"
                                            required
                                            value={inputForm.contactNumber}
                                            onChange={(e) => setInputForm({ ...inputForm, contactNumber: e.target.value })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            value={inputForm.password}
                                            onChange={(e) => setInputForm({ ...inputForm, password: e.target.value })}
                                            placeholder='Enter Password'
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-sm">
                                        <Link to="/loginreset" href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </div>
                                <br></br>
                            </form>
                            <div>
                                <Link to="/orderSuccess">
                                    <button
                                        type="submit" onClick={handleSubmit}
                                        className=" mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Log in
                                    </button>
                                </Link>
                            </div>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Don't have a booker account?</span>
                                    </div>
                                </div>
                                <Link to="/signupcontinueComponent" className=" cursor-pointer flex justify-center text-blue-400">Sign up now</Link>

                            </div>
                        </div>
                    </div >

                    <div className=" bg-white mt-8 w-64 shadow-lg rounded-lg sm:mt-5 lg:hidden mr-3">
                        <div className='-mt-10 flex justify-center  '>
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