import { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
export const LoginResetPage = () => {


    const [showPassword, setShowPassword] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);

    const handleToggle = () => {
        setShowPassword(!showPassword)
    }
    const handleToggle1 = () => {
        setPasswordShown(!passwordShown)
    }
    const services = JSON.parse(localStorage.getItem('selected_services'))
    const salonName = localStorage.getItem('salonTitle')
    const salonLocation = localStorage.getItem('branchLocation')
    const selectedDate = JSON.parse(localStorage.getItem('selected_date'))
    const beginTime = JSON.parse(localStorage.getItem('selected_time'))


    const calculateTotal = (array) => {
        if (!array.length) {
            return 0;
        } else {
            return array.reduce((accumulator, value) => accumulator + Number(value.price), 0);
        }
    }

    const service_info = useSelector((state) => state.getService);

    const image = service_info?.Services?.data[0].image;
    localStorage.setItem("image", image)

    localStorage.getItem("image")

    return (

        <div>
            <div className='bg-slate-900 h-36'>
                <div className="max-w-7xl mx-auto px-14 sm:px-0 lg:px-0">
                    <div className=' p-4'>
                        <div className='flex justify-between '>
                            <div className='flex'>
                                <div className='pr-0'>
                                    <Link to="/auth-login" className="hover:text-gray-600 text-white fa-solid fa-arrow-left float-left pr-2.5" ></Link>
                                </div>
                                <p className='text-white '>Step 3/3 </p>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-white pl-4 ">Forgot Password</h1>
                    </div>
                </div>
            </div >



            <div className="max-w-7xl mx-auto  sm:px-0  lg:px-0">
                <div className=" flex  justify-evenly ">
                    <div className="bg-white  w-1/2  lg:w-full  py-8 px-4 shadow rounded-lg sm:px-10 ">
                        <h1 className=" text-2xl font-bold">Forgot password?</h1>
                        <p className="">Enter your registered email address and we'll send you a secure link to setup a new password.</p>
                        <form className="space-y-4 " action="#">
                            <div>
                                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mt-4">
                                    Code
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="code"
                                        name="code"
                                        type="code"
                                        autoComplete="code"
                                        placeholder='Enter Code'
                                        required
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
                                        // value={inputForm.password}
                                        // onChange={(e) => setInputForm({ ...inputForm, password: e.target.value })}
                                        placeholder='Enter Password'
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className='text-2xl float-right -mt-8 mr-6 cursor-pointer' onClick={handleToggle} >
                                    {!showPassword ? <AiFillEyeInvisible /> :
                                        <AiFillEye />}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 ">
                                    Confirm Password
                                </label>
                                <div className="mt-1 ">
                                    <input
                                        type={passwordShown ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        // value={inputForm.password}
                                        // onChange={(e) => setInputForm({ ...inputForm, password: e.target.value })}
                                        placeholder='Confirm Password'
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className='text-2xl float-right -mt-8 mr-6 cursor-pointer ' onClick={handleToggle1}>
                                    {!passwordShown ? <AiFillEyeInvisible /> :
                                        <AiFillEye />}
                                </div>
                            </div>
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
                            <Link to="/auth-login" className=" flex justify-center text-blue-400 cursor-pointer">Back To Login</Link>

                        </div>
                    </div>

                    <div className="bg-white w-1/4 h-1/4 shadow-lg rounded-lg text-black lg:hidden ">
                        <div className='flex justify-center rounded-lg shadow-fuchsia-100   '>
                            {image ? <img
                                className=' rounded-lg shadow-md border-4 -mt-12 w-20 h-20  border-neutral-100 '
                                src={image} alt=""
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
                        <hr className='mt-3'></hr>
                        <div className="overflow-y-scroll h-72">
                            <div className='px-4 py-4 font-bold flex justify-between'>
                                <h1>{selectedDate}</h1>
                                <h1> {beginTime?.startTime}</h1>
                            </div>

                            <hr className='mt-3'></hr>

                            {
                                services?.map((serviceData) => {
                                    return (

                                        <div>
                                            <div className="flex justify-between p-4 ">

                                                <h1> {serviceData.serviceTitle}</h1>
                                                <h1> {serviceData.price} Rs</h1>
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
                </div>
            </div>
        </div>




    )
}