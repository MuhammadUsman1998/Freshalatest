import { useEffect } from 'react'
import { Link } from "react-router-dom";
import img from "../../assets/images/service.webp"
import { getStaff } from '../../redux/Actions/staffActions';
import { useDispatch, useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";


export const StaffComponent = () => {



    const staff_info = useSelector((state) => state?.getStaff);
    const staff_data = staff_info?.Staff?.data;
    const { loading } = staff_info;


    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getStaff({ branchId: "625913f1ce98370016716ae4", isActive: "" }))
    }, [])

    return (
        <div>
            <div className='bg-slate-900 h-32 md:w-full'>
                <div className="max-w-7xl mx-auto px-40 sm:px-6 lg:px-8">
                    <div className=' p-4'>
                        <div className='flex justify-between '>
                            <div className='flex'>
                                <div className='pl-3'>
                                    <Link to="/online-booking/details?branchId=627bb85d9c360a41c4d352c7&userId=627bb85d9c360a41c4d352c8&salonId=627bb85d9c360a41c4d352c6" className="hover:text-gray-600 text-white fa-solid fa-arrow-left float-left pr-5" ></Link>
                                </div>
                                <p className='text-white '>Step 2/4 </p>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-white pl-10">Select Staff</h1>
                    </div>
                    {loading ?
                        (
                            <div className='flex justify-center mt-32'>
                                <ClipLoader color='gray' loading={loading} size={70} />
                            </div>
                        ) : (

                            <>
                                <div className="flex justify-evenly md:flex flex-wrap">
                                    <div className="shadow-lg rounded-lg">

                                        <Link to="/timeComponent">
                                            <div className='p-3 text-lg flex justify-between '>
                                                <div className='pt-2'>
                                                    <i className=" rounded-full h-16 w-16 p-4 bg-gray-200 text-black fa-solid fa-user-group"></i>
                                                </div>
                                                <h1 className='pr-40 pt-4 md:pl-8 pl-3'>
                                                    <b> No Preference</b><br></br>
                                                    Maximum Availability
                                                </h1>
                                                <i className="fa-solid fa-angle-right pt-4 cursor-pointer "></i>
                                            </div>
                                        </Link>

                                        <div className='mt-2'>
                                            {staff_data?.map((item) => {
                                                return (
                                                    <Link to="/timeComponent"> <div className='bg-slate-50 rounded-sm shadow-lg my-1 px-3 h-24 text-lg flex justify-between pt-3 cursor-pointer  hover:bg-gray-200 md:w-full '>
                                                        <div className=' rounded-full h-16 w-16 p-4 bg-blue-200 text-blue-500 font-bold'>
                                                            <h1 className='text-center items-center '>{item?.fullName?.split("").splice(0, 1).join("")}</h1>
                                                        </div>
                                                        <label>
                                                            <div className='cursor-pointer pr-56  inline md:pl-8'>
                                                                <Link to="/timeComponent">{item?.fullName}</Link>
                                                                <p className='text-gray-400 md:pl-8'> beautician</p>
                                                            </div>
                                                        </label>
                                                        <div className='flex justify-between p'>
                                                            <i className="fa-solid fa-star pr-5 pt-2 text-yellow-300 "></i>
                                                            <h1 className='pr-7 pt-2 font-bold'>4.8</h1>
                                                            <Link to="/timeComponent" className="fa-solid fa-angle-right pt-2  "></Link>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>


                                    <div>
                                        <div className=" bg-slate-50 shadow-lg rounded-lg w-80 lg:hidden">
                                            <div className=' flex justify-center'>
                                                <img className=' rounded-lg shadow-md border-4 border-neutral-100 -mt-12' src={img} />
                                            </div>
                                            <div className=''>
                                                <h2 className=' mt-3 text-center font-bold'>Sajna Hair & Beauty Tooting </h2>
                                                <p className="pt-3 text-center"> 234A Upper Tooting Road, London
                                                    <br></br> (Tooting), England</p>
                                                <hr className='mt-5'></hr>
                                            </div>
                                            <div className="flex justify-between p-2">
                                                <p className=''>Eyebrows Wax </p>
                                                <p>$</p>
                                            </div>
                                            <hr className='mt-5'></hr>
                                            <div className='flex justify-between p-2 font-medium'>
                                                <h1 className=''>Total</h1>
                                                <p>$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                </div>


            </div>
        </div>
    )
}
