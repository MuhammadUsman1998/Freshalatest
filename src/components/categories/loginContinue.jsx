import { Component, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/Actions/userActions';
import service from "../../assets/images/service.webp"
// import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    LOGIN_ADD_RESET
} from "../../redux/Constants/userConstants";
import img from "../../assets/images/service.webp";


export const LoginContinue = () => {
    const [inputForm, setInputForm] = useState({
        contactNumber: "",
        password: ""
    });
    const [disabledButton, setDisabledButton] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.userLogin);

    // console.log('userLogin', user)


    const services = JSON.parse(localStorage.getItem('selected_services'))
    const salonName = localStorage.getItem('salonTitle')
    const salonLocation = localStorage.getItem('branchLocation')
    const selectedDate = localStorage.getItem('selected_date')
    const selectedTime = localStorage.getItem('selected_time')
    const beginTime = JSON.parse(localStorage.getItem('selected_time'))
    const info = JSON.parse(localStorage.getItem('info'))

    // console.log('user error', user.error)


    useEffect(() => {
        if (user.success) {
            navigate("/loginSuccess")
        }
        else if (user.error) {
            toast("Login Failed!")
        }
        return () => {

            dispatch({ type: LOGIN_ADD_RESET })
        }
    }, [user.success, user.error])

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            contactNumber: inputForm.contactNumber,
            password: inputForm.password,
        }

        dispatch(userLogin(obj));

        // navigate("/loginSuccess")
    }

    const handleFormDisabled = () => {
        if (!inputForm.contactNumber || !inputForm.password) {
            return true
        } else {
            return false
        }
    }


    const calculateTotal = (array) => {
        if (!array.length) {
            return 0;
        } else {
            return array.reduce((accumulator, value) => accumulator + Number(value.price), 0);
        }
    }

    return (

        <div>
            <ToastContainer />


            <div className='bg-slate-900 h-36'>
                <div className="max-w-7xl mx-auto px-32 sm:px-6 lg:px-8">
                    <div className=' p-4'>
                        <div className='flex justify-between '>
                            <div className='flex'>
                                <div className=''>
                                    <Link to="/signupcontinueComponent" className="hover:text-gray-600 text-white fa-solid fa-arrow-left float-left pr-8" ></Link>
                                </div>
                                <p className='text-white '>Step 3/3 </p>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-white pl-11">Login To Continue</h1>
                    </div>
                </div>
            </div >


            <div className='bg-gray-200 h-screen'>
                <div className="max-w-7xl mx-auto px-48 sm:px-6 lg:px-8">
                    <div className=" flex justify-between  sm:px-6 lg:px-8">
                        <div className="w-2/3  sm:mx-auto sm:w-full sm:max-w-md  xl:w-full">
                            <div className=" bg-white py-8 px-4 shadow rounded-lg sm:px-10 w-full ">

                                <form className="space-y-2 " action="#  ">
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
                                    <button
                                        disabled={handleFormDisabled()}
                                        style={{ cursor: handleFormDisabled() ? "not-allowed" : "pointer" }}
                                        type="submit" onClick={handleSubmit}
                                        className=" mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Log in
                                    </button>
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

                        <div className=" bg-white  w-64 shadow-lg rounded-lg sm:mt-5 lg:hidden mr-3 xl:ml-24 xl:w-3/4 ">
                            <div className='  flex justify-center rounded-lg shadow-fuchsia-100'>
                                <img
                                    className=' rounded-lg shadow-md border-4 -mt-12  border-neutral-100'
                                    src={img}
                                />
                            </div>
                            <div className='text-center font-bold pt-3'>
                                {salonName}
                                <br></br>
                                <h1 className=' pt-2'>  {salonLocation}</h1>
                                <hr className='mt-4'></hr>
                            </div>
                            <div className='overflow-y-scroll h-72'>
                                <div className='px-4 py-3 font-bold flex justify-between'>
                                    <h1>{selectedDate}</h1>
                                    <h1> {beginTime?.startTime}</h1>
                                </div>
                                <hr></hr>
                                {
                                    services?.map((serviceData) => {
                                        return (
                                            <>
                                                <div className="">

                                                    <div className="flex justify-between px-4 py-3 ">
                                                        <h1> {serviceData.serviceTitle}</h1>
                                                        <h1> {serviceData.price}Rs</h1>
                                                    </div>
                                                    <div className="text-gray-500 px-4">
                                                        <h1> {serviceData.duration}Min</h1>
                                                    </div>
                                                    <hr className='mt-3'></hr>

                                                </div>

                                            </>

                                        )
                                    })
                                }
                                <div className=' flex justify-between px-4 py-3 font-bold'>
                                    <h1>Total</h1>
                                    <h1>{calculateTotal(services)}Rs</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=' bg-white py-2 mt-56 sticky bottom-0 '>
                    <div className='flex justify-end '>
                        <button
                            style={{ cursor: disabledButton ? "not-allowed" : "pointer" }}
                            disabled={disabledButton}
                            className='bg-slate-400  w-32 h-12 mr-16  rounded-lg 
                     text-white  font-bold'
                        >
                            Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}