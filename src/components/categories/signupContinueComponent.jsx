import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userSignUp } from '../../redux/Actions/userActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";
import {
    SIGNUP_ADD_RESET
} from "../../redux/Constants/userConstants";

export const SignUpContinueComponent = () => {

    const [inputForm, setInputForm] = useState({
        fullName: "",
        email: "",
        contactNumber: "",
        password: "",
        gender: "",

    });
    const [disabledButton, setDisabledButton] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state?.userSignUp)
    const SignupError = user?.SignUp?.error
    const SignupSuccess = user?.SignUp?.success
    useEffect(() => {

        if (SignupSuccess) {
            navigate("/loginContinue")
        }
        else if (SignupError) {
            toast(user?.SignUp?.message)
        }
        return () => {

            dispatch({ type: SIGNUP_ADD_RESET })
        }
    }, [SignupSuccess, SignupError])




    const services = JSON.parse(localStorage.getItem('selected_services'))
    const salonName = localStorage.getItem('salonTitle')
    const salonLocation = localStorage.getItem('branchLocation')
    const selectedDate = JSON.parse(localStorage.getItem('selected_date'))
    const selectedTime = localStorage.getItem('selected_time')
    const BeginTime = JSON.parse(localStorage.getItem('selected_time'))


    const userData = JSON.parse(localStorage.getItem("info"));


    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            fullName: inputForm.fullName,
            contactNumber: inputForm.contactNumber,
            email: inputForm.email,
            password: inputForm.password,
            gender: inputForm.gender,
            salonId: userData[0].salonId,
            branchId: userData[0].branchId,
        }
        // console.log({ obj });
        dispatch(userSignUp(obj));
    }

    const handleFormDisabled = () => {
        if (!inputForm.fullName || !inputForm.email || !inputForm.contactNumber || !inputForm.password) {
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
    Object.assign(services[0], JSON.parse(selectedTime));


    const image = localStorage.getItem("image")





    return (
        <div>
            <div className='bg-slate-900 h-36 '>
                <div className="max-w-7xl mx-auto px-36 sm:px-0 lg:px-8">
                    <div className=' p-4 '>
                        <div className='flex'>
                            <div className='pr-0'>
                                <Link to="/timeComponent" className="hover:text-gray-600 text-white fa-solid fa-arrow-left float-left pr-2" ></Link>
                            </div>
                            <p className='text-white sm:pr-4 '>Step 3/3 </p>
                        </div>
                        <h1 className="text-4xl font-bold text-white pl-3 sm:pl-4 ">SignUp To Continue</h1>
                    </div>
                </div>
            </div>

            <div className='bg-gray-200'>
                <div className="max-w-7xl mx-auto px-44 sm:px-0 md:px-0 lg:px-0 ">
                    <div className=" flex">
                        <div className="bg-white py-8 px-4 shadow-md rounded-lg  w-3/4 xl:w-full ">
                            <form className="space-y-4 grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-2" action="#"
                            >
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700  mt-3">
                                        Full Name
                                    </label>
                                    <div className=" ">
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="fullName"
                                            autoComplete="fullName"
                                            placeholder='Your Full Name'
                                            value={inputForm.fullName}
                                            onChange={(e) => setInputForm({ ...inputForm, fullName: e.target.value })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                                    placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>



                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className=" ">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder='Your Email'
                                            onChange={(e) => setInputForm({ ...inputForm, email: e.target.value })}
                                            value={inputForm.email}
                                            required={true}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>


                                <div>
                                    <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
                                        Mobile Number
                                    </label>
                                    <div className=''>
                                        <input
                                            id="depositedAmount"
                                            maxLength={11}
                                            pattern="[+-]?\d+(?:[.,]\d+)?"
                                            placeholder="0300 XXXX XXX"
                                            mask="0300 1234 567"
                                            required={true}
                                            onChange={(e) => setInputForm({ ...inputForm, contactNumber: e.target.value })}
                                            value={inputForm.contactNumber}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className=" ">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required={true}
                                            value={inputForm.password}
                                            onChange={(e) => setInputForm({ ...inputForm, password: e.target.value })}
                                            placeholder='Enter Password'
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <br></br>
                            </form>
                            <div>
                                <label htmlFor="Gender" id='gender' className="block text-sm font-medium text-gray-700">
                                    Gender
                                </label>

                                <input type="radio" id="Male" name="fav_language" value="M" onChange={(e) => setInputForm({ ...inputForm, gender: e.target.value })} />
                                <label className='ml-2' for="Male"> Male</label>
                                <br></br>
                                <input type="radio" id="Female" name="fav_language" value="F" onChange={(e) => setInputForm({ ...inputForm, gender: e.target.value })} />
                                <label className='ml-2' for="Female"> Female</label>
                            </div>


                            <label>
                                <div className="flex mt-3 cursor-pointer" >
                                    <input className="mr-1 mt-1" type="checkbox" />
                                    <p > I agree to the Privacy Policy, Terms of Use and Terms of Service</p>
                                </div>
                            </label>
                            <label>
                                <div className="flex mt-3 cursor-pointer" >
                                    <input className="mr-1 mt-1 inline-flex" type="checkbox" />
                                    <p>I agree to receive marketing notifications with offers and news</p>
                                </div>
                            </label>
                            <div>
                                <button
                                    disabled={handleFormDisabled() || user?.loading}
                                    style={{ cursor: handleFormDisabled() ? "not-allowed" : "pointer" }}
                                    type="submit" onClick={handleSubmit}
                                    className=" mt-2 w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm
                             font-medium text-white bg-slate-900 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span>
                                        {
                                            user?.loading && <div className='flex' ><ClipLoader color='white' loading={user?.loading} size={20} /> </div>
                                        }

                                    </span>
                                    <span>
                                        Sign Up

                                    </span>
                                </button>
                            </div>
                            <ToastContainer />
                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Already have a booker account?</span>
                                    </div>
                                </div >
                                <Link to="/loginContinue" className="flex justify-center text-blue">Sign in now</Link>
                            </div>
                        </div>

                        <div className=' ml-4'>
                            <div className=" bg-white sticky  shadow-lg rounded-lg w-80  lg:hidden  xl:full ">
                                <div className='  flex justify-center rounded-lg shadow-fuchsia-100   '>
                                    <img
                                        className=' rounded-lg shadow-md border-4 -mt-12 w-20 h-20 border-neutral-100  '
                                        src={image}
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
                                        <h1> {BeginTime?.startTime}</h1>
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
                                        <h1 className=' '>{calculateTotal(services)}Rs</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=' bg-white py-2 mt-60 sticky bottom-0'>
                    <div className='flex justify-end '>

                        <button
                            style={{ cursor: disabledButton ? "not-allowed" : "pointer" }}
                            disabled={disabledButton}
                            className='bg-slate-500  w-32 h-12 mr-10  rounded-lg sticky 
                     text-white  font-bold' >
                            Book
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}
