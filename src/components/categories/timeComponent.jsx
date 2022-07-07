import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "flatpickr/dist/themes/material_green.css";
import 'react-time-picker/dist/TimePicker.css';
import moment from 'moment';
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { orderCreation } from '../../redux/Actions/userActions';
var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
};


export const TimeComponent = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [arrayOfSelectedServices, setArrayOfSelectedServices] = useState(() => {
        const items = localStorage.getItem('selected_services')
        if (items) {
            return JSON.parse(items)
        } else {
            return []
        }
    })
    const [time, setTime] = useState(() => {
        const timeFromLocalStorage = JSON.parse(localStorage.getItem('selected_time'))
        if (timeFromLocalStorage) {
            return timeFromLocalStorage?.startTime
        } else {
            return ''
        }
    });
    const [myDate, setMyDate] = useState(() => {
        const items = localStorage.getItem('selected_date')
        if (items) {
            return JSON.parse(items)
        } else {
            return ''
        }
    });
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedTime, setSelectedTime] = useState(false)



    useEffect(() => {
        localStorage.setItem('selected_date', JSON.stringify(myDate))
        if (myDate) {
            setSelectedCategory(myDate)
            setSelectedTime(true)
        }
    }, [myDate])
    const clickDate = (e, index, value) => {

        setSelectedCategory(index)
        setSelectedTime(true)
        setMyDate(value)

    }


    const services = JSON.parse(localStorage.getItem('selected_services'))
    const total = localStorage.getItem('salonTitle')
    const myTotal = localStorage.getItem('branchLocation')


    let dateArray = [];
    var a = moment();
    var b = moment(a).add(2, 'month').format('MM:DD:YYYY');
    while (a.format('MM:DD:YYYY') < b) {
        dateArray.push(a.format("MMM DD"))
        // dateArray.push(a.format()?.split("").splice(0, 2).join(""))
        a.add(1, 'day');
    }

    useEffect(() => {
        localStorage.setItem('selected_time', JSON.stringify({ "startTime": time }))
    }, [time])

    const timeDiv = (event, timeData) => {
        event.preventDefault();
        setTime(timeData)



    }
    const converter = (hours) => {
        const splitHours = hours.split(":")[0];
        const suffix = splitHours >= 12 ? "PM" : "AM"
        const newTime = splitHours + ":" + hours.split(":")[1] + suffix;
        return newTime;
    }


    let timeArray = ["09:00", "09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"]


    const calculateTotal = (array) => {
        if (!array.length) {
            return 0;
        } else {
            return array.reduce((accumulator, value) => accumulator + Number(value.price), 0);
        }
    }


    const user = JSON.parse(localStorage.getItem("user"))
    const info = JSON.parse(localStorage.getItem("info"))
    const selectedDate = JSON.parse(localStorage.getItem('selected_date'))
    console.log("user", user);



    const endTimeCalculate = (startTime, endTime) => {
        const Initial = startTime;
        const durationInMinutes = endTime?.toString();

        const TotalTime = moment(Initial, "HH:mm")
            .add(durationInMinutes, "minutes")
            .format("HH:mm");

        return TotalTime;
    };

    Object.assign(services[0], time);
    let AllServices = [];
    var servicePriceSum = 0;
    services.forEach((item, index) => {
        let obj = {};
        if (item?.startTime) {
            obj["startTime"] = time;
            obj["duration"] = item?.duration;
        }
        else {
            var calculateStartTime = endTimeCalculate(
                time,
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
    });


    // var myUser = localStorage.getItem('user');
    // localStorage.setItem('user', myUser);


    const handleCreateOrder = () => {
        var dateFormat = moment(selectedDate, "MMMM DD dddd").format('YYYY-MM-DD');
        const obj = {
            userId: user.id,
            branchId: info[0].branchId,
            createdBy: 'Client',
            orderDate: dateFormat,
            totalOrderPrice: servicePriceSum,
            actualOrderPrice: servicePriceSum,
            orderJob: AllServices
        }

        dispatch(orderCreation(obj))


        navigate('/orderSuccess')

    }
    const service_info = useSelector((state) => state.getService);
    const image = service_info?.Services?.data[0].image;
    localStorage.setItem("image", image)

    localStorage.getItem("image")
    return (
        <div className="">
            <div className='bg-slate-900 h-36 '>
                <div className="max-w-7xl mx-auto px-20 sm:px-0 lg:px-0 ">
                    <div className=' p-4'>
                        <div className='flex '>
                            <div className='pr-2'>
                                <Link to={`/online-booking/details?branchId=${info[0].branchId}&salonId=${info[0].salonId}`} className="hover:text-gray-600 text-white fa-solid fa-arrow-left " ></Link>
                            </div>
                            <p className='text-white '>Step 2/3 </p>
                        </div>
                        <div className='flex'>
                            <h1 className="text-4xl font-bold text-white pl-3">Select Time</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-gray-200 h-screen '>
                <div className="max-w-7xl mx-auto  sm:px-0 lg:px-0 ">
                    <div className='flex justify-evenly sticky '>
                        <div className=" bg-white  w-1/2  shadow-md  lg:w-full">
                            <Slider className='' focusOnSelect={true}  {...settings}>
                                {
                                    dateArray?.map((date, i) => {
                                        console.log("date", date)

                                        return (
                                            <div className='flex justify-center'>
                                                <div onClick={(e) => clickDate(e, i, date)}
                                                    className={`flex justify-center border-solid border-black border-2 rounded-lg hover:bg-gray-300 
                                                hover:text-black px-3 h-20 w-20 text-center text-2xl pt-2 font-semibold cursor-pointer xl:w-16 xl:h-16 xl:text-xl lg:w-20
                                                 md:w-16 md:h-16 md:text-lg sm:w-12   ${selectedCategory ===
                                                        date
                                                        && "text-white bg-blue-600"

                                                        }`}
                                                >
                                                    <h1 className=''>{date}</h1>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </Slider>

                            <div className='flex justify-center pt-3'>
                                <img src="https://img.icons8.com/ios/50/000000/time--v1.png" />
                            </div>
                            <div className='text-center font-bold p-3 '>
                                <h1>You can book time as per your availability</h1>
                            </div>
                            <div className='w-full h-96 xl:w-full  overflow-y-auto '>

                                {
                                    timeArray?.map((Arr, index, i) => {
                                        return (
                                            <div onClick={(event, i) => timeDiv(event, Arr, i)} key={index} className={` border-solid border-1 border-black px-3 py-4 
                                          flex justify-between   hover:text-black 
                                          font-bold cursor-pointer ${time === Arr && "text-white bg-blue-600"
                                                }`}
                                            >
                                                <h1>
                                                    {converter(Arr)}
                                                </h1>

                                                <h1 className="fa-solid fa-angle-right pt-2  px-3"></h1>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>


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
                            <h1 className='text-center font-bold pt-2'>{total}</h1>
                            <p className='pt-3 text-center text-gray-400'> {myTotal}</p>
                            <hr className='mt-3'></hr>
                            {/* <div className='flex justify-between  p-4'>
                            <h1 className=''>{myDate}</h1>
                            <h1 className=''>{time}</h1>
                        </div> */}

                            {/* <hr className='mt-3'></hr> */}

                            <div className="overflow-y-scroll h-72">
                                <div className='font-bold  flex justify-between px-4 py-4 '>
                                    <h1>{myDate}</h1>
                                    <h1>{time}</h1>
                                </div>
                                <hr className='mt-3'></hr>

                                {
                                    arrayOfSelectedServices.map((serviceData) => {
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
                                    <h1>{calculateTotal(arrayOfSelectedServices)} Rs</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {
                selectedTime &&
                <div className=' bg-white py-2 mt-4 flex justify-between sticky bottom-0'>
                    <div className='flex px-6 3xl:invisible 2xl:invisible xl:invisible lg:visible'>
                        <div className="font-bold  px-4 ">
                            <h1 className="text-gray-500">{arrayOfSelectedServices?.length + " "}{arrayOfSelectedServices?.length == 1 ? "Service" : "Services"}</h1>
                            <h1>{calculateTotal(arrayOfSelectedServices)} Rs</h1>
                        </div>
                        <div className="font-bold">
                            <h1 className="text-gray-500">{selectedDate}</h1>
                            <h1>{time}</h1>
                        </div>
                    </div>
                    {
                        user &&
                            user?.salonId === info[0]?.salonId ? (<button
                                onClick={handleCreateOrder}
                                className='bg-slate-900 w-32 h-12  mr-10 rounded-lg sticky 
                                        text-white  font-bold'
                            >
                                Book
                            </button>) : (

                            <div className='flex  '>
                                <Link to='/signupcontinueComponent'>
                                    <button
                                        className='bg-slate-900 w-32 h-12 mr-10 rounded-lg sticky 
                                        text-white  font-bold'
                                    >
                                        Book
                                    </button>
                                </Link>
                            </div>
                        )
                    }

                </div>
            }


        </div >
    )
}
