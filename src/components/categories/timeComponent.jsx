import { useState } from 'react'
import { Link } from "react-router-dom";
import "flatpickr/dist/themes/material_green.css";
import "flatpickr/dist/flatpickr.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css';
import TimePicker from 'react-bootstrap-time-picker';
import img from "../../assets/images/clocks.png"
import service from "../../assets/images/service.webp"
import moment from 'moment';


var moment1 = moment().format();
var moment2 = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var moment3 = moment().format("ddd, hA");
import { useLocation } from 'react-router-dom';



export const TimeComponent = () => {

    let dateArray = [];

    const location = useLocation();

    const { services } = location?.state ? location.state : "";

    console.log('array from first component', services);


    var a = moment();

    var b = moment(a).add(2, 'month').format('MM:DD:YYYY');
    while (a.format('MM:DD:YYYY') < b) {
        dateArray.push(a.format("YYYY MMM DD dddd"));
        a.add(1, 'day');
    }



    const [showCalendar, setShowCalendar] = useState("");
    const handleChange = (date) => {
        setShowCalendar(date);
    }

    const [time, setTime] = useState("")
    const handleTimeChange = (time) => {
        setTime(time)
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"];
    var d = new Date();
    var monthName = months[d.getMonth()];



    return (
        <div className>

            <div className='bg-slate-900 h-44'>
                <div className="max-w-7xl mx-auto px-40 sm:px-16 lg:px-32 ">
                    <div className=' p-4'>
                        <div className='flex justify-between '>
                            <div className='flex'>
                                <div className='pl-3'>
                                    <Link to="/online-booking/details?branchId=627bb85d9c360a41c4d352c7&userId=627bb85d9c360a41c4d352c8&salonId=627bb85d9c360a41c4d352c6" className="hover:text-gray-600 text-white fa-solid fa-arrow-left float-left pr-5" ></Link>

                                </div>
                                <p className='text-white '>Step 2/3 </p>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-white pl-10">Select Time</h1>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-56 sm:px-16 lg:px-32">

                    <div className="flex justify-between ">
                        <div className=" bg-white  w-3/5 shadow-lg rounded-lg lg:w-full mb-16">

                            <div className="flex justify-end pr-3 pt-12">
                                <Link to="/signupcontinueComponent" className="fa-solid fa-circle-right "></Link>
                            </div>
                            <div className='text-center'>
                                {monthName}
                            </div>
                            <div className='flex justify-center pt-12'>
                                <Calendar
                                    onChange={handleChange}
                                />
                                <moment />

                            </div>

                            <div className='flex justify-center pt-3'>
                                <img src={img} />
                            </div>
                            <div className='flex justify-center mb-12 mt-2'>

                                <TimePicker onChange={handleTimeChange} value={time} step='5' start="06:00" end="24:00" className="text-center pt-2" />

                            </div>
                        </div>
                        <div className=" bg-white h-96 w-72  shadow-lg rounded-lg sm:mt-5 lg:hidden ml-12 ">
                            <div className='-mt-7 flex justify-center  '>
                                <img className=' rounded-lg shadow-md border-4 border-neutral-100' src={service} />
                            </div>
                            <div className=''>
                                <h2 className=' mt-3 text-center font-bold '>Blush + Blow Parsons Green </h2>
                                <p className="pt-3 text-center"> 234A Upper Tooting Road, London (Tooting), England</p>
                                <hr className='mt-5'></hr>
                            </div>
                            <div className="flex justify-between p-2">
                                <p className=''>Half Head Highlights
                                    <br></br>
                                    1h 50min 2 services with Irina </p>
                                <p>$</p>
                            </div>
                            <hr className='mt-5'></hr>
                            <div className='flex justify-between p-2'>
                                <h1 className=''>Total</h1>
                                <p>$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
