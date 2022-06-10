import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "flatpickr/dist/themes/material_green.css";
import 'react-time-picker/dist/TimePicker.css';
import moment from 'moment';
import Slider from "react-slick";

var settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
};


export const TimeComponent = () => {



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

    const info = JSON.parse(localStorage.getItem("info"))

    let dateArray = [];
    const services = JSON.parse(localStorage.getItem('selected_services'))
    const total = localStorage.getItem('salonTitle')
    const myTotal = localStorage.getItem('branchLocation')


    var a = moment();
    var b = moment(a).add(2, 'month').format('MM:DD:YYYY');
    while (a.format('MM:DD:YYYY') < b) {
        dateArray.push(a.format("MMMM DD "))
        a.add(1, 'day');
    }

    useEffect(() => {
        localStorage.setItem('selected_time', JSON.stringify({ "startTime": time }))
    }, [time])

    const timeDiv = (event, timeData) => {
        event.preventDefault();
        setTime(timeData)

        // const convertTime12to24 = (time12h) => {
        //     const [time, modifier] = time12h.split(' ');

        //     let [hours, minutes] = time.split(':');

        //     if (hours === '12') {
        //         hours = '00';
        //     }

        //     if (modifier === 'PM') {
        //         hours = parseInt(hours, 10) + 12;
        //     }

        //     return `${hours}:${minutes}`;
        // }


    }
    const converter = (hours) => {
        const splitHours = hours.split(":")[0];
        const suffix = splitHours >= 12 ? "PM" : "AM"
        const newTime = splitHours + ":" + hours.split(":")[1] + suffix;
        return newTime;
    }




    // let timeArray = ["9:00 AM", "9:15 AM", "9:30 AM", "9:45 AM", "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM", "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM", "12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM", "1:00 PM", "1:15 PM", "1:30 PM", "1:45 PM", "2:00 PM", "2:15 PM", "2:30 PM", "2:45 PM", "3:00 PM", "3:15 PM", "3:30 PM", "3:45 PM", "4:00 PM", "4:15 PM", "4:30 PM", "4:45 PM", "5:00 PM"]
    let timeArray = ["09:00", "09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15 ", "16:30 ", "16:45 ", "17:00 "]


    const calculateTotal = (array) => {
        if (!array.length) {
            return 0;
        } else {
            return array.reduce((accumulator, value) => accumulator + Number(value.price), 0);
        }
    }

    // const image = "https://fresha-ag-staging.s3.eu-central-1.amazonaws.com/0a934130-e644-11ec-8fdc-1bab29ade56f-download%20%281%29.jpg";
    // localStorage.setItem("image", image)
    const image = localStorage.getItem("image")
    return (
        <div className="">
            <div className='bg-slate-900 h-36 '>
                <div className="max-w-7xl mx-auto px-40 sm:px-0 lg:px-32 ">
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
                <div className="max-w-7xl mx-auto px-48 sm:px-0 xl:px-0 ">
                    <div className='flex justify-between sticky -inset-96'>
                        <div className=" bg-white  w-4/6 shadow-md  xl:w-full">
                            <Slider className='' focusOnSelect={true}  {...settings}>
                                {
                                    dateArray?.map((date, i) => {
                                        return (
                                            <div className='flex justify-center'>
                                                <div onClick={(e) => clickDate(e, i, date)}
                                                    className={`flex justify-center border-solid border-black border-2 rounded-lg hover:bg-gray-300 
                                                hover:text-black px-3 h-20 w-24 text-center text-2xl pt-2 font-semibold cursor-pointer lg:w-20
                                                 md:w-16 md:h-16 md:text-lg sm:w-12 sm:h-16 sm:text-ellipsis  ${selectedCategory ===
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
                                <h1>You can Book Your Time When Jocelyn is Available</h1>
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


                        <div className=' flex ml-4 '>
                            <div className=" bg-white h-96 w-80 shadow-lg rounded-lg sm:mt-5 xl:hidden " >
                                <div className='  flex justify-center rounded-lg shadow-fuchsia-100   '>
                                    <img
                                        className=' rounded-lg shadow-md border-4 -mt-12 w-20 h-20 border-neutral-100  '
                                        src={image}
                                    />
                                </div>
                                <div className='text-center  pt-3'>
                                    <h1 className='font-bold'>{total}</h1>
                                    <h1 className='pt-2 '>{myTotal}</h1>
                                </div>
                                <hr></hr>
                                <div className='overflow-y-scroll h-64'>
                                    <div className='font-bold  flex justify-between px-4 py-4 '>
                                        <h1>{myDate}</h1>
                                        <h1>{time}</h1>
                                    </div>
                                    <hr className='mt-3'></hr>

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

                                    <div className='flex justify-between px-4 py-3 font-bold'>
                                        <h1 className=''>Total</h1>
                                        <p>{calculateTotal(services)}Rs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {
                selectedTime &&
                <div className=' bg-white py-2 mt-4  sticky bottom-0'>
                    <div className='flex justify-end '>
                        <Link to='/signupcontinueComponent' >
                            <button
                                className='bg-slate-900 w-32 h-12 mr-10  rounded-lg sticky 
                     text-white  font-bold'
                            >
                                Book
                            </button>
                        </Link>
                    </div>
                </div>
            }


        </div >
    )
}
