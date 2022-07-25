import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/Actions/userActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    LOGIN_ADD_RESET
} from "../../redux/Constants/userConstants";
import ClipLoader from "react-spinners/ClipLoader";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import MaskedInput from 'react-text-mask';
import { LoginResetPage } from '../../pages/auth/loginReset';
export const LoginContinue = () => {
    const [inputForm, setInputForm] = useState({
        contactNumber: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.userLogin);
    const LoginError = user?.Login?.error
    const LoginSuccess = user?.Login?.success


    const services = JSON.parse(localStorage.getItem('selected_services'))
    const salonName = localStorage.getItem('salonTitle')
    const salonLocation = localStorage.getItem('branchLocation')
    const selectedDate = JSON.parse(localStorage.getItem('selected_date'))
    const selectedTime = localStorage.getItem('selected_time')
    const beginTime = JSON.parse(localStorage.getItem('selected_time'))
    const info = JSON.parse(localStorage.getItem('info'))



    useEffect(() => {
        if (LoginSuccess) {
            navigate("/auth-success")

        }
        else if (LoginError) {
            toast(user?.Login?.message)
        }
        return () => {

            dispatch({ type: LOGIN_ADD_RESET })
        }
    }, [LoginSuccess, LoginError])

    const handleSubmit = (e) => {
        e.preventDefault();

        const info = JSON.parse(localStorage.getItem("info"))

        const obj = {
            contactNumber: inputForm.contactNumber,
            password: inputForm.password,
        }

        dispatch(userLogin(obj, info[0]?.branchId));

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


    const image = localStorage.getItem("image")


    const branchCode = localStorage.getItem("branchCode")

    const handleToggle = () => {
        setShowPassword(!showPassword)
    }
    return (

        <div>
            <ToastContainer />
            <div className='bg-slate-900 h-36'>
                <div className="max-w-7xl mx-auto px-14 sm:px-0 lg:px-0">
                    <div className=' p-4'>
                        <div className='flex justify-between '>
                            <div className='flex'>
                                <div className='pr-0'>
                                    <Link to="/auth-signup" className="hover:text-gray-600 text-white fa-solid fa-arrow-left float-left pr-2.5" ></Link>
                                </div>
                                <p className='text-white '>Step 3/3 </p>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-white pl-4 ">Login To Continue</h1>
                    </div>
                </div>
            </div >


            <div className='bg-gray-200 h-screen'>
                <div className="max-w-7xl mx-auto  sm:px-0  lg:px-0">
                    <div className=" flex justify-evenly ">
                        <div className=" bg-white w-1/2 lg:w-full py-8 px-4 shadow rounded-lg sm:px-0  ">

                            <form className="space-y-2 " action="#  ">
                                <div>
                                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                                        Contact Number
                                    </label>
                                    <div className="mt-1">
                                        <MaskedInput
                                            id="contactNumber"
                                            name="contactNumber"
                                            type="contactNumber"
                                            // maxLength={11}
                                            guide={false}
                                            mask={[/[0-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/]}
                                            placeholder="0300 XXXX XXX"
                                            value={inputForm.contactNumber}
                                            onChange={(e) => setInputForm({ ...inputForm, contactNumber: e.target.value })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 ">
                                        Password
                                    </label>
                                    <div className="mt-1 ">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            value={inputForm.password}
                                            onChange={(e) => setInputForm({ ...inputForm, password: e.target.value })}
                                            placeholder='Enter Password'
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className='text-2xl float-right -mt-8 mr-6 cursor-pointer ' onClick={handleToggle}>
                                        {!showPassword ? <AiFillEyeInvisible /> :
                                            <AiFillEye />}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-sm">
                                        <Link to="/auth-resetPassword" href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </div>
                                <br></br>
                            </form>
                            <div>
                                <button
                                    disabled={handleFormDisabled() || user?.loading}
                                    style={{ cursor: handleFormDisabled() ? "not-allowed" : "pointer" }}
                                    type="submit" onClick={handleSubmit}
                                    className=" mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span>
                                        {
                                            user?.loading && <div className='flex'><ClipLoader color='white' loading={user?.loading} size={20} /></div>
                                        }

                                    </span>
                                    <span> Log in</span>
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
                                <Link to="/auth-signup" className=" cursor-pointer flex justify-center text-blue-400">Sign up now</Link>

                            </div>
                        </div>

                        {/* <div className='ml-4'> */}
                        <div className="bg-white w-1/4 h-1/4 shadow-lg rounded-lg text-black lg:hidden ">
                            <div className='flex justify-center rounded-lg shadow-fuchsia-100   '>
                                {image ? <img
                                    className=' rounded-lg shadow-md border-4 -mt-12 w-20 h-20  border-neutral-100 '
                                    src={image}
                                /> : <svg className="-mt-12 w-20 h-20 rounded-lg border-slate-900 bg-slate-900 border-3" xmlns="http://www.w3.org/2000/svg" width="91.761" height="76.86" viewBox="0 0 91.761 106.86">
                                    <g id="Group_15959" data-name="Group 15959" transform="translate(-167.191 -185.3)">
                                        <path id="Path_11025" data-name="Path 11025" d="M378.264,110.2c-3.83,0-11.025.3-20.9.3-8.471,0-17.827-.147-22.924-.443v3.021c9.517.441,11.285,1.988,11.285,12.979V140.1s21.307-18.292,25.545-21.532a80.082,80.082,0,0,0,9.054-8.337C379.65,110.216,378.971,110.2,378.264,110.2Z" transform="translate(-167.253 75.246)" fill="#f68d2f" />
                                        <path id="Path_11026" data-name="Path 11026" d="M388.252,160.667v-.294c21.068-3.9,30.143-15.838,30.143-26.519,0-12.627-10.164-21.849-30.556-23.454-.236,4.6-1.37,13.008-8,19.461-10.358,10.107-17.312,12.67-17.665,20.465a6.6,6.6,0,0,0,.117,1.133v.06a6.085,6.085,0,0,0,2.844,4.39,10.8,10.8,0,0,0,4.612.972s.1,0,1.061.015c.176-.015.368-.015.545-.015.236,0,.5-.015.8-.029l.015-.015c.353-.015.737-.06,1.193-.1a7.576,7.576,0,0,0,6.777-6.217c-2.887,2.357-11.374,2.872-12.169-2.048s2.224-6.57,12.817-15.852a30.084,30.084,0,0,0,10.194-21.834c6.822,9.384,4.17,18.357,3.963,21.907s5.392,6.321,5.392,8.4c0,1.016-3.815,2.386-3.815,2.386v3.079l-2.137.825v2.092c-3.8,1.312-2.358,6.409-3.4,7.587S380,156.144,380,156.144a11.918,11.918,0,0,0-6.247,6.527H376.1c17.9,0,25.045,8.914,25.045,24.236,0,16.956-6.261,26.46-20.993,26.46-8.633,0-10.4-1.99-10.4-12.523V158.517a62.233,62.233,0,0,0-7.764,6.615c-4.125,4.272-12.493,13.127-16.25,23.409v12.3c0,10.976-1.694,12.523-11.286,12.964v3.021c5.1-.3,14.306-.443,23.22-.443,12.817,0,22.186.443,26.9.443,25.855,0,41.635-10.239,41.635-29.259C426.2,175.341,416.48,162.819,388.252,160.667Z" transform="translate(-167.252 75.331)" fill="#f68d2f" />
                                        <path id="Path_11027" data-name="Path 11027" d="M384.333,110.705s.939,10.394-12.658,21.183-32.246,26.537-34.035,40.67c0,0-4.114-14.848,6.44-25.94S380.755,117.37,384.333,110.705Z" transform="translate(-166.659 75.407)" fill="#f68d2f" />
                                        <path id="Path_11028" data-name="Path 11028" d="M342.344,177.972c-6.792-12.8,8.839-29.053,14.512-34.342a9.606,9.606,0,0,0,3.992,6.718C341.651,166.657,342.344,177.972,342.344,177.972Z" transform="translate(-165.718 83.529)" fill="#f68d2f" />
                                    </g>
                                </svg>
                                }
                            </div>
                            <h1 className='text-center font-bold pt-2'>{salonName}</h1>
                            <p className='pt-3 text-center text-gray-400'>  {salonLocation}</p>
                            <p className='text-center text-gray-400'>{branchCode}</p>
                            <hr className='mt-3'></hr>
                            <div className="overflow-y-scroll h-72">
                                <div className='px-4 pt-2 font-bold flex justify-between'>
                                    <h1>{selectedDate}</h1>
                                    <h1> {beginTime?.startTime}</h1>
                                </div>

                                <hr className='mt-3'></hr>

                                {
                                    services?.map((serviceData) => {
                                        return (

                                            <div>
                                                <div className="flex justify-between pl-4 pt-2 ">

                                                    <h1> {serviceData.serviceTitle}</h1>
                                                    <h1 className='pr-2'> {serviceData.price} Rs</h1>
                                                </div>
                                                <div className="text-gray-500 pl-6 ">
                                                    <h1> {serviceData.duration} Min</h1>
                                                </div>
                                                <hr className="mt-2"></hr>

                                            </div>

                                        )
                                    })
                                }
                                <div className='flex justify-between p-4 font-bold '>
                                    <h1>Total </h1>
                                    <h1>{calculateTotal(services)} Rs</h1>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>


            <div className=' bg-white py-2  sticky bottom-0 '>
                <div className='flex justify-between '>
                    <div className='flex px-6 3xl:invisible 2xl:invisible xl:invisible lg:visible'>
                        <div className='font-bold'>
                            <h1 className="text-gray-500">{services?.length + " "}{services?.length == 1 ? "Service" : "Services"}</h1>
                            <h1>{calculateTotal(services)} Rs</h1>
                        </div>
                        <div className='font-bold pl-4'>
                            <h1 className="text-gray-500">{selectedDate}</h1>
                            <h1>{beginTime?.startTime}</h1>                        </div>
                    </div>
                    <button
                        style={{ cursor: disabledButton ? "not-allowed" : "pointer" }}
                        disabled={disabledButton}
                        className='bg-slate-400  w-32 h-12 mr-10  rounded-lg 
                     text-white  font-bold'
                    >
                        Book
                    </button>
                </div>
            </div>

        </div>
    )
}