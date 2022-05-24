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



// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, backgroundColor: "black", borderRadius: "50%" }}
//             onClick={onClick}
//         />
//     );
// }

var settings = {
    // infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    // nextArrow: <SamplePrevArrow />,
    // prevArrow: <SamplePrevArrow />
};


export const TimeComponent = () => {
    const [time, setTime] = useState('');
    const [myDate, setMyDate] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedTime, setSelectedTime] = useState(false)
    console.log('date is here', myDate)
    const clickDate = (e, index, value) => {
        setSelectedCategory(index)
        setSelectedTime(true)
        setMyDate(value)
    }

    console.log('time is here', time)

    let dateArray = [];
    const location = useLocation();
    const { services, total, myTotal, myfunction } = location?.state ? location.state : "";
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
        var hDisplay = h > 0 ? h : ''
        var mDisplay = m > 0 ? m : '00'
        return `${hDisplay}:${mDisplay}`
    }

    const timeDiv = (event, timeData) => {
        event.preventDefault();
        setTime(timeData)
    }

    let timeArray = ["9:00AM", "9:15AM", "9:30AM", "9:45AM", "10:00AM", "10:15AM", "10:30AM", "10:45AM", "11:00AM", "11:15AM", "11:30AM", "11:45AM", "12:00PM", "12:15PM", "12:30PM", "12:45PM", "1:00PM", "1:15PM", "1:30PM", "1:45PM", "2:00PM", "2:15PM", "2:30PM", "2:45PM", "3:00PM", "3:15PM", "3:30PM", "3:45PM", "4:00PM", "4:15PM", "4:30PM", "4:45PM", "5:00PM"]

    return (
        <div className="">
            <div className='bg-slate-900 h-36 sticky top-0'>
                <div className="max-w-7xl mx-auto px-40 sm:px-16 lg:px-32 ">
                    <div className=' p-4'>
                        <div className='flex '>
                            <div className='pr-2'>
                                <Link to="/online-booking/details?branchId=628651b852d22a5b700eb2fa&salonId=628651b852d22a5b700eb2f9" className="hover:text-gray-600 text-white fa-solid fa-arrow-left " ></Link>
                            </div>
                            <p className='text-white '>Step 2/3 </p>
                        </div>
                        <div className='flex'>
                            <h1 className="text-4xl font-bold text-white pl-4">Select Time</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-gray-200 h-auto pb-12'>
                <div className="max-w-7xl mx-auto px-48 sm:px-16 lg:px-32 sticky top-36">
                    {/* <div className="flex justify-between bg-red-300  "> */}
                    <div className=" bg-white  w-4/6 shadow-md  xl:w-full  ">



                        <Slider className='' focusOnSelect={true}  {...settings}>
                            {
                                dateArray?.length &&
                                dateArray?.map((date, i) => {
                                    return (
                                        <div className='flex   xl:flex justify-center '>
                                            <div onClick={(e) => clickDate(e, i, date)}
                                                className={`flex justify-center border-solid border-black border-2 rounded-lg hover:bg-gray-300 
                                                hover:text-black px-3 h-16 w-24 text-center pt-3 font-semibold cursor-pointer md:w-20 md:h-14 md:text-sm sm:w-12  ${selectedCategory ===
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
                            <h1>You can Book Your Time When Jocelyn is Available</h1>
                        </div>
                    </div>
                    {/* </div> */}


                    <div className='flex justify-end -mt-60 -mr-3 '>
                        <div className=" bg-white h-1/2 w-72 shadow-lg rounded-lg sm:mt-5 xl:hidden ">
                            <div className=' flex justify-center  '>
                                <img className='-mt-10 rounded-lg shadow-md border-4 border-neutral-100' src={service} />
                            </div>
                            <div className='text-center  pt-3'>
                                <h1>{total}</h1>
                                <h1 className='pt-2 text-gray-400'>{myTotal}</h1>
                            </div>
                            <hr></hr>
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
                                                    <h1> ${serviceData.price}</h1>
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
                                <p>${myfunction}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-48 sm:px-16 lg:px-32">
                    <div className='w-2/3  xl:w-full '>
                        {timeArray.map((Arr, index) => {
                            return (
                                <div onClick={(event) => timeDiv(event, Arr)} key={index} className=' border-solid border-1 border-black px-3 py-4  bg-zinc-50 flex justify-between cursor-pointer hover:bg-slate-200 font-bold'>
                                    <h1>
                                        {Arr}
                                    </h1>

                                    <h1 className="fa-solid fa-angle-right pt-2  px-3"></h1>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

            {selectedTime &&
                <div className=' bg-white py-2 mt-4  sticky bottom-0'>
                    <div className='flex justify-end '>
                        <Link to='/signupcontinueComponent' state={{
                            selectedTime: time, selectedDate: myDate, salonName: total, salonLocation: myTotal, serviceTotal: myfunction, services
                        }} >
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
