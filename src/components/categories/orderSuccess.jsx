import { useEffect, useState } from 'react'
import checked from "../../assets/images/check.png"
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import moment from 'moment';
import ClipLoader from "react-spinners/ClipLoader";
import { orderCreation } from '../../redux/Actions/userActions';


export const OrderSuccess = ({ IDRoute }) => {
    const [arrayOfSelectedServices, setArrayOfSelectedServices] = useState(JSON.parse(localStorage.getItem('selected_services')) || []);
    // const [userFromLocal, setUserFromLocal] = useState(() => {
    //     const user = localStorage.getItem("user");
    //     if (user) {
    //         return localStorage.getItem("user")
    //     } else {
    //         return null
    //     }
    // })
    const navigate = useNavigate()
    const services = JSON.parse(localStorage.getItem('selected_services'))
    const selectedTime = JSON.parse(localStorage.getItem('selected_time'))
    const selectedDate = JSON.parse(localStorage.getItem('selected_date'))
    localStorage.getItem('selected_date')

    const calculateTotal = (array) => {
        if (!array.length) {
            return 0;
        } else {
            const result = array.reduce((accumulator, value) => accumulator + Number(value.price), 0);
            return result
        }
    }






    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
        window.history.go(1);
    };

    const tConvert24hour = (time) => {
        time = time?.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
            time,
        ];

        if (time.length > 1) {
            time = time.slice(1);
            time[5] = +time[0] < 12 ? " AM" : " PM";
            time[0] = +time[0] % 12 || 12;
        }

        return time.join("");
    };

    const info = JSON.parse(localStorage.getItem("info"))
    const userProfileInfo = JSON.parse(localStorage.getItem("user"))



    const handleClick = () => {
        var myUser = localStorage.getItem('user');
        var token = localStorage.getItem('accessToken');
        localStorage.clear();
        localStorage.setItem('user', myUser);
        localStorage.setItem('accessToken', token)
        navigate(`/online-booking/details?branchId=${info[0].branchId}&salonId=${info[0].salonId}`)

    }
    var dateFormat = moment(selectedDate, "MMMM DD dddd").format('YYYY-MM-DD');
    const orderCode = JSON.parse(localStorage.getItem("orderCode"))

    const shortcode = orderCode



    const orderCreation = useSelector((state) => state.orderCreation)
    const { loading } = orderCreation;
    // /online-booking/details ? branchId = ${ IDRoute?.BranchId }& salonId=${ IDRoute?.SalonId }

    const total = localStorage.getItem('salonTitle')
    const myTotal = localStorage.getItem('branchLocation')


    const branch = localStorage.getItem("branchCode")

    return (
        <div>
            {loading ? (
                <div className='flex justify-center mt-56 '>
                    <ClipLoader loading={loading} size={40} />
                </div>
            ) : (
                <>
                    <div className='bg-gray-200 ' >
                        <div className="max-w-7xl mx-auto sm:px-0 lg:py-0 lg:px-0 flex justify-center">

                            <div className='bg-white p-6 shadow-md rounded-md w-2/3   xl:w-full'>
                                <div className=" sm:mx-auto sm:w-full sm:max-w-md  ">
                                    <div className="  rounded-lg sm:px-10  ">
                                        <div className='flex justify-center h-28 '>
                                            <img className='rounded-full border-5 border-solid border-gray-200 p-3 sm:rounded-full' src={checked} />
                                        </div>
                                        <div className='text-center py-8'>
                                            <h1 className='font-bold text-2xl '>APPOINTMENT SUCCESSFULL</h1>
                                        </div>
                                    </div>

                                    <div className="flex justify-between sm:flex sm:flex-col ">
                                        <div className=' text-lg '>
                                            {userProfileInfo && <h1><b>Name: </b> {userProfileInfo?.fullName}</h1>}
                                            {shortcode && <h1><b>Order Id:# </b> {shortcode}</h1>}
                                            {userProfileInfo && <h1><b>Email: </b> {userProfileInfo?.email}</h1>}
                                            {userProfileInfo && <h1><b>ContactNumber: </b> {userProfileInfo?.contactNumber}</h1>}
                                        </div>
                                        <div className=' text-lg sm:pt-5'>
                                            {<h1><b>Salon </b> {total}</h1>}
                                            {<h1><b>Location: </b> {myTotal}</h1>}
                                            {<h1><b>BranchCode: </b> {branch}</h1>}
                                        </div>
                                    </div>



                                </div >
                                <div className='border-solid border-2 border-black rounded-sm mt-3'>
                                    <div className=' p-3 flex justify-between font-bold'>
                                        <h1>Time</h1>
                                        {services?.length > 1 ? (<h1>Services</h1>) : "Service"}
                                        <h1>Price</h1>
                                    </div>
                                </div>
                                <div className='flex sm:text-xs mt-4 font-semibold '>
                                    <h1 className=' '>{dateFormat}</h1>
                                    <h1 className=' ml-2'>  {tConvert24hour(selectedTime?.startTime)}</h1>
                                </div>
                                <div className='-mt-5 '>
                                    {
                                        services?.map((serviceData) => {
                                            return (
                                                <div className="flex justify-between sm:text-xs sm:mt-1.5 font-semibold ml-20" >
                                                    <div></div>
                                                    <h1 className='inline sm:truncate '> {serviceData?.serviceTitle}</h1>
                                                    <div className=''>
                                                        <h1 className='ml-3 ' >{serviceData?.price} Rs</h1>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>


                                <hr className='mt-4 w-full'></hr>
                                <div className='font-bold px-1'>
                                    <h1 className='pt-3 text-gray-500'>Payment Details</h1>
                                </div>
                                <div className=' flex justify-between px-1 py-1 font-bold'>
                                    <h1>Total Payment</h1>
                                    <h1 className=''>{calculateTotal(arrayOfSelectedServices)} Rs</h1>
                                </div>


                            </div>

                        </div>

                    </div>
                    <div className=' bg-white py-2 mt-96 sticky bottom-0 '>
                        <div className='flex justify-end '>

                            <button
                                onClick={handleClick}
                                className='bg-slate-900 w-60 h-12 mr-10  rounded-lg 
                                text-white  font-bold sticky'
                            >
                                Add Another Appointment
                            </button>

                        </div>
                    </div>
                </>
            )}
        </div>

    )
}

