import { useEffect, useState } from 'react'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal);





export const OrderSuccess = () => {
    const [arrayOfSelectedServices, setArrayOfSelectedServices] = useState(JSON.parse(localStorage.getItem('selected_services')) || [])

    const services = JSON.parse(localStorage.getItem('selected_services'))
    const salonName = localStorage.getItem('salonTitle')
    const salonLocation = localStorage.getItem('branchLocation')
    const selectedTime = localStorage.getItem('selected_time')
    const selectedDate = localStorage.getItem('selected_date')
    console.log(salonName);
    const calculateTotal = (array) => {
        if (!array.length) {
            return 0;
        } else {
            return array.reduce((accumulator, value) => accumulator + Number(value.price), 0);
        }
    }



    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
        window.history.go(1);
    };



    // useEffect(() => {
    //     MySwal.fire({
    //         title: "APOINTMENT SUCCESSFULL",
    //         icon: "success",
    //         allowOutsideClick: false,
    //         showConfirmButton: false,


    //     });
    // }

    //     , []);


    return (
        <div className='bg-gray-200 ' >
            <div className="max-w-7xl mx-auto px-96 py-10 sm:px-6 lg:px-8">
                <div className='bg-white p-6 shadow-md rounded-md '>
                    <div className=" sm:mx-auto sm:w-full sm:max-w-md  xl:w-full">
                        <div className=" py-8 px-4 rounded-lg sm:px-10 w-full mt-3">
                            <div className='flex justify-center  h-28  '>
                                <img className='rounded-full border-5 border-solid border-gray-200 p-3' src="https://img.icons8.com/fluency/48/000000/checkmark.png" />
                            </div>
                            <div className='text-center py-10'>
                                <h1 className='font-bold text-2xl '>APPOINTMENT SUCCESSFULL</h1>
                            </div>
                        </div>
                    </div >
                    <div className='border-solid border-2 border-black rounded-sm'>
                        <div className=' p-3 flex justify-between font-bold'>
                            <h1>Time</h1>
                            <h1>Service</h1>
                            <h1>Price</h1>
                        </div>
                    </div>
                    <h1 className=''> {selectedTime}</h1>
                    <div className='-mt-5'>
                        {
                            services?.map((serviceData) => {
                                return (
                                    <div className="flex justify-between " >
                                        <div></div>
                                        <h1> {serviceData.serviceTitle}</h1>
                                        <h1 className='px-2' >{serviceData?.price}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>


                    <hr className='mt-4 w-full'></hr>
                    <div className='font-bold px-3'>
                        <h1 className='pt-3'>Payment Details</h1>
                    </div>
                    <div className=' flex justify-between px-3  font-bold'>
                        <h1>Total Payment</h1>
                        <h1 className=' '>${calculateTotal(arrayOfSelectedServices)}</h1>
                    </div>
                </div>







            </div>
        </div>
    )
}

