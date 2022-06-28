import { useEffect, useState } from 'react'
import checked from "../../assets/images/check.png"
import { useNavigate } from 'react-router-dom'




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
    localStorage.getItem('salonTitle')
    localStorage.getItem('branchLocation')
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

    const handleClick = () => {
        var myUser = localStorage.getItem('user');
        var token = localStorage.getItem('accessToken');
        localStorage.clear();
        localStorage.setItem('user', myUser);
        localStorage.setItem('accessToken', token)
        navigate(`/online-booking/details?branchId=${info[0].branchId}&salonId=${info[0].salonId}`)

    }
    // /online-booking/details ? branchId = ${ IDRoute?.BranchId }& salonId=${ IDRoute?.SalonId }

    return (
        <div>
            <div className='bg-gray-200 ' >
                <div className="max-w-7xl mx-auto px-96 py-10 sm:px-0  lg:py-0 lg:px-0">
                    <div className='bg-white p-6 shadow-md rounded-md w-full  xl:w-full'>
                        <div className=" sm:mx-auto sm:w-full sm:max-w-md  ">
                            <div className="  rounded-lg sm:px-10  mt-3">
                                <div className='flex justify-center h-28 '>
                                    <img className='rounded-full border-5 border-solid border-gray-200 p-3 sm:rounded-full' src={checked} />
                                </div>
                                <div className='text-center py-10'>
                                    <h1 className='font-bold text-2xl '>APPOINTMENT SUCCESSFULL</h1>
                                </div>
                            </div>
                        </div >
                        <div className='border-solid border-2 border-black rounded-sm'>
                            <div className=' p-3 flex justify-between font-bold'>
                                <h1>Time</h1>
                                <h1>Service(s)</h1>
                                <h1>Price</h1>
                            </div>
                        </div>
                        <h1 className='mt-4 font-semibold ml-3 '>  {tConvert24hour(selectedTime?.startTime)}</h1>
                        <div className='-mt-5'>
                            {
                                services?.map((serviceData) => {
                                    return (
                                        <div className="flex justify-between mt-1 font-semibold ml-5" >
                                            <div></div>
                                            <h1 className='inline '> {serviceData.serviceTitle}</h1>
                                            <div className=''>
                                                <h1 className='mr-1' >{serviceData?.price} Rs</h1>
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

            <div className=' bg-white py-2 mt-80 sticky bottom-0'>
                <div className='flex justify-end '>

                    <button
                        onClick={handleClick}
                        className='bg-slate-900 w-60 h-12 mr-10  rounded-lg 
                                text-white  font-bold'
                    >
                        Add Another Appointment
                    </button>

                </div>
            </div>
        </div>


    )
}

