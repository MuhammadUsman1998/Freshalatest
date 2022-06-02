import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { orderCreation } from '../../redux/Actions/userActions';
import service from "../../assets/images/service.webp"
import checked from "../../assets/images/check.png"
import moment from 'moment';
import img from "../../assets/images/service.webp";

export const LoginSuccess = () => {

    const dispatch = useDispatch()
    // const navigate = useNavigate();




    const userLogin = useSelector(state => state.userLogin?.Login?.data)
    const Data = JSON.parse(localStorage.getItem("user"))

    const services = JSON.parse(localStorage.getItem('selected_services'))
    const salonName = localStorage.getItem('salonTitle')
    const salonLocation = localStorage.getItem('branchLocation')
    const selectedTime = localStorage.getItem('selected_time')
    const BeginTime = JSON.parse(localStorage.getItem('selected_time'))

    const selectedDate = localStorage.getItem('selected_date')


    const endTimeCalculate = (startTime, endTime) => {
        const Initial = startTime;
        const durationInMinutes = endTime?.toString();

        const TotalTime = moment(Initial, "HH:mm")
            .add(durationInMinutes, "minutes")
            .format("HH:mm");

        return TotalTime;
    };


    Object.assign(services[0], JSON.parse(selectedTime));
    let AllServices = [];
    var servicePriceSum = 0;
    services.forEach((item, index) => {
        let obj = {};
        if (item?.startTime) {
            obj["startTime"] = item?.startTime;
            obj["duration"] = item?.duration;
        }
        else {
            var calculateStartTime = endTimeCalculate(
                AllServices[index - 1]?.startTime,
                AllServices[index - 1]?.duration
            );
            obj["startTime"] = calculateStartTime;
        }
        obj["serviceId"] = item?._id;
        obj["duration"] = item?.duration;
        obj["totalPrice"] = item?.price;
        obj["actualPrice"] = item?.price;
        servicePriceSum += parseInt(item?.price);
        AllServices.push(obj);
        // setSumData(servicePriceSum);
    });

    const calculateTotal = (array) => {
        if (!array.length) {
            return 0;
        } else {
            return array.reduce((accumulator, value) => accumulator + Number(value.price), 0);
        }
    }

    const user = JSON.parse(localStorage.getItem("user"))

    const handleClick = () => {
        var dateFormat = moment(selectedDate, "MMMM DD dddd").format('YYYY-MM-DD');
        const obj = {
            userId: user.id,
            branchId: user.branchId,
            createdBy: 'Client',
            orderDate: dateFormat,
            totalOrderPrice: servicePriceSum,
            actualOrderPrice: servicePriceSum,
            orderJob: AllServices
        }

        dispatch(orderCreation(obj))

    }

    return (

        <div>
            <div className='bg-slate-900 h-36'>
                <div className="max-w-7xl mx-auto px-32 sm:px-6 lg:px-8">
                    <div className=' p-4'>
                        <div className='flex justify-between '>
                            <div className='flex'>
                                <div className='pl-1'>
                                    <Link to="/loginContinue" className="hover:text-gray-600 text-white fa-solid fa-arrow-left float-left pr-4" ></Link>
                                </div>
                                <p className='text-white '>Step 3/3 </p>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-white pl-10">Login Success</h1>
                    </div>
                </div>
            </div >


            <div className='bg-gray-200 h-screen'>
                <div className="max-w-7xl mx-auto px-48 sm:px-6 lg:px-8">
                    <div className=" flex justify-between  sm:px-6 lg:px-8">
                        <div className="w-2/3  sm:mx-auto sm:w-full sm:max-w-md  xl:w-full">
                            <div className=" bg-white h-96 py-8 px-4 shadow rounded-lg sm:px-10 w-full ">
                                <div className='flex justify-center  h-28  '>
                                    <img className='rounded-full border-5 border-solid border-gray-200 p-3' src={checked} />
                                </div>
                                <div className='text-center py-20'>

                                    {Data && <h1 className='font-bold text-3xl'>Logged in as {Data?.fullName} </h1>}

                                </div>
                            </div>
                        </div >

                        <div className=" bg-white  w-64 shadow-lg rounded-lg sm:mt-5 lg:hidden mr-3 xl:ml-24 xl:w-3/4 ">
                            <div className='  flex justify-center rounded-lg shadow-fuchsia-100   '>
                                <img
                                    className=' rounded-lg shadow-md border-4 -mt-12  border-neutral-100  '
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


            <div className=' bg-white py-2 mt-4  sticky bottom-0'>
                <div className='flex justify-end '>
                    <Link to='/orderSuccess' >

                        <button
                            onClick={handleClick}
                            className='bg-slate-900 w-32 h-12 mr-16  rounded-lg sticky 
                     text-white  font-bold'
                        >
                            Book
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}