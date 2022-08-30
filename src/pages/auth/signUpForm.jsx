import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userSignUp } from '../../redux/Actions/userActions';





export const SignFormPage = () => {

    const [inputForm, setInputForm] = useState({
        fullName: "",
        email: "",
        contactNumber: "",
        password: ""
    });


    // const { register } = useForm();


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            fullName: inputForm.fullName,
            contactNumber: inputForm.contactNumber,
            email: inputForm.email,
            password: inputForm.password,

        }
        dispatch(userSignUp(obj));
        navigate("/loginform")
    }




    return (

        <div className='bg-slate-900 h-44'>
            <div className="max-w-7xl mx-auto px-40 sm:px-6 lg:px-8">
                <div className=' p-4'>
                    <div className='flex justify-between '>
                        <div className='flex'>
                            <div className='pl-3'>
                                <Link to="/timeComponent" className="hover:text-gray-600 text-white fa-solid fa-arrow-left float-left pr-5" ></Link>
                            </div>
                            <p className='text-white '>Step 4/4 </p>
                        </div>
                        <Link to="/" className="fa-solid fa-xmark text-white"></Link>
                    </div>
                    <h1 className="text-4xl font-bold text-white pl-10">SignUp To Continue</h1>
                </div>
            </div>


            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Fresha</h2>
                </div>
                <div className="w-full mt-8 sm:mx-auto sm:w-full sm:max-w-md flex justify-center ">
                    <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10 2xl:w-2/5 lg:w-2/4 md:w-2/3 ">
                        <form className="space-y-4 grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-2 sm:flex flex-wrap " action="#"
                        >
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mt-3 ">
                                    Full Name
                                </label>
                                <div className=" ">
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="fullName"
                                        autoComplete="fullName"
                                        placeholder='Your Full Name'
                                        required="true"
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
                                        autoComplete="email"
                                        placeholder='Your Email'
                                        onChange={(e) => setInputForm({ ...inputForm, email: e.target.value })}
                                        value={inputForm.email}
                                        required
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
                                        type="text"
                                        id="depositedAmount"
                                        maxLength={11}
                                        pattern="[+-]?\d+(?:[.,]\d+)?"
                                        placeholder="Enter Number"
                                        required
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
                                        autoComplete="current-password"
                                        required
                                        value={inputForm.password}
                                        onChange={(e) => setInputForm({ ...inputForm, password: e.target.value })}
                                        placeholder='Enter Password'
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <br></br>
                        </form>
                        <div className="flex mt-3" >
                            <input className="mr-1 mt-2" type="checkbox" />
                            <p> I agree to the Privacy Policy, Terms of Use and Terms of Service</p>
                        </div>
                        <div className="flex mt-3" >
                            <input className="mr-1 mt-2 inline-flex" type="checkbox" />
                            <p>I agree to receive marketing notifications with offers and news</p>
                        </div>
                        <div>
                            <button
                                type="submit" onClick={handleSubmit}
                                className=" mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm
                             font-medium text-white bg-slate-900 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign Up
                            </button>
                        </div>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Already have a booker account?</span>
                                </div>
                            </div >
                            <Link to="/loginform" className="flex justify-center text-blue">Sign in now</Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md flex justify-center">
                    <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10 2xl:w-2/5 lg:w-2/4 md:w-2/3">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold">Become a partner</h1>
                            <p className="">Manage your business with Fresha by  signing up as a professional</p>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-4 text-gray-400">© 2022 Fresha.com SV Ltd</p>

            </div >
        </div>
    )
}