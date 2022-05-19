import { useState } from 'react'
import { Link } from "react-router-dom";
import "flatpickr/dist/themes/material_green.css";
import 'react-time-picker/dist/TimePicker.css';
import TimePicker from 'react-bootstrap-time-picker';
import img from "../../assets/images/clocks.png"
import service from "../../assets/images/service.webp"
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import Slider from "react-slick";



function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, backgroundColor: "black", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />
};


export const TimeComponent = () => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedTime, setSelectedTime] = useState(false)
    console.log('date is here', date)
    const clickDate = (e, index, value) => {
        setSelectedCategory(index)
        setSelectedTime(true)
        setDate(value)
    }

    let dateArray = [];
    const location = useLocation();
    const { services } = location?.state ? location.state : "";

    var a = moment();
    var b = moment(a).add(2, 'month').format('MM:DD:YYYY');
    while (a.format('MM:DD:YYYY') < b) {
        dateArray.push(a.format("MMMM DD dddd"))
        a.add(1, 'day');

    }


    const secondsToHms = (d) => {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        // if (h < 12) {
        //     var hDisplay = h > 0 ? h : ''
        //     var mDisplay = m > 0 ? m : '00am'
        // }
        // else {
        //     var hDisplay = h > 0 ? h : ''
        //     var mDisplay = m > 0 ? m : '00pm'
        // }
        var hDisplay = h > 0 ? h : ''
        var mDisplay = m > 0 ? m : '00'
        return `${hDisplay}:${mDisplay}`
    }

    console.log('time before', time)

    const handleTimeChange = (hours) => {
        const value = secondsToHms(hours);
        setTime(value)
    }

    return (
        <div className="">
            <div className='bg-slate-900 h-44'>
                <div className="max-w-7xl mx-auto px-40 sm:px-16 lg:px-32 ">
                    <div className=' p-4'>
                        <div className='flex '>
                            <div className='pr-2'>
                                <Link to="/online-booking/details?branchId=627bb85d9c360a41c4d352c7&userId=627bb85d9c360a41c4d352c8&salonId=627bb85d9c360a41c4d352c6" className="hover:text-gray-600 text-white fa-solid fa-arrow-left " ></Link>
                            </div>
                            <p className='text-white '>Step 2/3 </p>
                        </div>
                        <div className='flex'>
                            <h1 className="text-4xl font-bold text-white ">Select Time</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-gray-300 h-screen'>
                <div className="max-w-7xl mx-auto px-44 sm:px-16 lg:px-32">
                    <div className="flex justify-between -mt-12">
                        <div className=" bg-white  w-4/6 shadow-md rounded-lg xl:w-full pb-5">



                            <Slider className='' focusOnSelect={true}  {...settings}>
                                {
                                    dateArray?.length &&
                                    dateArray?.map((date, i) => {
                                        return (
                                            <div className='flex justify-around'>
                                                <div onClick={(e) => clickDate(e, i, date)}
                                                    className={`flex justify-center border-solid border-black border-2 rounded-lg hover:bg-gray-300 
                                                hover:text-black px-3 h-16 w-24 text-center pt-3 font-semibold cursor-pointer   ${selectedCategory ===
                                                        i
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
                            <div className='text-center font-bold p-3 mb-6'>
                                <h1>You can Book Your Time When Jocelyn Available</h1>
                            </div>

                            <div className='border-solid border-2 '>
                                <TimePicker onChange={handleTimeChange} value={time} step='10' start="09:00AM" end="05:00PM" className="text-center cursor-pointer" />
                            </div>
                            <h1 className='text-center pt-3 font-semibold text-blue-600 cursor-pointer'>Or Try With Another Time</h1>
                        </div>



                        <div className=" bg-white h-96  shadow-lg rounded-lg sm:mt-5 xl:hidden ml-12 xl:w-full">
                            <div className='-mt-7 flex justify-center  '>
                                <img className=' rounded-lg shadow-md border-4 border-neutral-100' src={service} />
                            </div>
                            <div className=''>
                                <h2 className=' mt-3 text-center font-bold '>Blush + Blow Parsons Green </h2>
                                <p className="pt-3 text-center"> 234A Upper Tooting Road, London (Tooting), England</p>
                                <hr className='mt-2'></hr>
                            </div>
                            <div className="flex justify-between p-2">
                                <p className=''>Half Head Highlights
                                    <br></br>
                                    1h 50min 2 services with Irina </p>
                                <p>$</p>
                            </div>
                            <hr className=''></hr>
                            <div className='flex justify-between p-2'>
                                <h1 className=''>Total</h1>
                                <p>$</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            {selectedTime &&
                <div className=' bg-white py-2 mt-4  sticky bottom-0'>
                    <div className='flex justify-end '>
                        <Link to='/signupcontinueComponent'  >
                            <button
                                className='bg-slate-900 w-32 h-12 mr-16  rounded-lg sticky 
                     text-white  font-bold'
                            >
                                Book
                            </button>
                        </Link>
                    </div>
                </div>
            }


        </div>
    )
}
