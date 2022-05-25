import { useEffect, useRef, useState, useLayoutEffect } from "react";
import Slider from "react-slick";
import { getService } from "../../redux/Actions/serviceActions";
import { Link, useSearchParams } from "react-router-dom";
import img from "../../assets/images/service.webp";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import "../../assets/styles/app.css";
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


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
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />
};

const useMountEffect = (fun) => useEffect(fun, []);

export const OnlineBookingDetail = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useSearchParams();
    const [selectedServices, setSelectedServices] = useState([])
    const [showButton, setShowButton] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [arrayOfSelectedServices, setArrayOfSelectedServices] = useState(JSON.parse(localStorage.getItem('selected_services')) || [])
    const userInfo = JSON.parse(localStorage.getItem("userData"));

    const service_info = useSelector((state) => state.getService);

    const service_data = service_info?.Services?.data[0]?.categories;
    const { loading } = service_info;
    const salonId = search.get("salonId");
    const branchId = search.get("branchId");
    const userId = search.get("userId");
    var value = [{ branchId: branchId, salonId: salonId }]
    localStorage.setItem("info", JSON.stringify(value));



    const myRef = useRef(null);
    const executeScroll = (_id) => {
        setSelectedCategory(_id);
        myRef.current.scrollIntoView();
    };

    useEffect(() => {
        dispatch(getService(branchId, salonId));
    }, []);


    const clickButton = (e, serviceId) => {
        if (e.target.checked) {
            setSelectedServices(prevState => [
                ...prevState,
                { _id: serviceId, checked: e.target.checked }
            ])
        }
        else {
            const filtered = selectedServices.filter((item) => item._id !== serviceId)
            setSelectedServices(filtered)
        }
    };

    const selectedServiceFromLocalStorage = localStorage.getItem('selected_services')

    const handleChange = (e, selected_service_data) => {

        if (e.target.name === 'checkbox' && arrayOfSelectedServices.some(e => e._id === selected_service_data._id)) {
            console.log('filtered Data')
            const newList = arrayOfSelectedServices.filter((item) => item !== selected_service_data)
            setArrayOfSelectedServices(newList)
            localStorage.setItem('selected_services', JSON.stringify(newList))
        } else {

            setArrayOfSelectedServices(prevState => [...prevState, selected_service_data])

            localStorage.setItem('selected_services', JSON.stringify([...arrayOfSelectedServices, selected_service_data]))
        }
        setShowButton(!showButton)

    }

    const salonTitle = service_info?.Services?.data[0]?.salonInformation[0]?.salonTitle;
    localStorage.setItem("salonTitle", salonTitle);
    const branchLocation = service_info?.Services?.data[0]?.branchLocation;
    localStorage.setItem("branchLocation", branchLocation);

    const calculateTotal = (array) => {
        if (!array.length) {
            return 0;
        } else {
            return array.reduce((accumulator, value) => accumulator + Number(value.price), 0);
        }
    }

    const total = localStorage.getItem('salonTitle')
    const myTotal = localStorage.getItem('branchLocation')


    return (
        <>
            <div className='bg-slate-900 h-36 text-white sticky top-0'>
                <div className='max-w-7xl mx-auto px-40 sm:px-6 lg:px-24'>
                    <div className='flex flex-col p-4'>
                        <div className='flex'>
                            <p className='text-white '>Step 1/3 </p>
                        </div>
                        <div className="flex">
                            <h1 className='text-4xl font-bold text-white '>
                                Select Services
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className='flex justify-center mt-32 '>
                    <ClipLoader color='gray' loading={loading} size={70} />
                </div>
            ) : (
                <>

                    <div className='bg-gray-200'>
                        <div className="sticky top-36">
                            <div className='max-w-7xl mx-auto px-44 sm:px-6 lg:px-8 '>
                                <div className='bg-white w-2/3  shadow-lg rounded-lg text-black  lg:w-full '>
                                    {/* focusOnSelect={true} */}
                                    <Slider className='py-4 px-1 text-center'  {...settings}>

                                        {service_data?.map((cat1) => {

                                            return (
                                                <div className='hover:bg-gray-300 hover:text-black rounded-full '>
                                                    <div
                                                        onClick={(_id) => executeScroll(cat1?._id)}
                                                        className={`truncate cursor-pointer   rounded-full p-2 
                                                        ${selectedCategory ===
                                                                cat1?._id
                                                                ? "text-white bg-gray-900"
                                                                : "text-black"
                                                            }`}
                                                    >
                                                        {cat1?.categoryTitle}

                                                    </div>
                                                </div>

                                            );
                                        })}
                                    </Slider>
                                </div>
                            </div>
                        </div>



                        <div className="float-right -mt-20 w-1/4 mr-44  sticky top-12">
                            <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 '>
                                <div className="bg-white  shadow-lg rounded-lg text-black lg:hidden xl:ml-20 xl:w-full">
                                    <div className='  flex justify-center rounded-lg shadow-fuchsia-100 '>
                                        <img
                                            className=' -mt-12 rounded-lg shadow-md border-4 border-neutral-100 '
                                            src={img}
                                        />
                                    </div>
                                    <h1 className='text-center font-bold pt-2'>{total}</h1>
                                    <p className='pt-3 text-center text-gray'> {myTotal}</p>
                                    <hr className='mt-3'></hr>
                                    {
                                        arrayOfSelectedServices.map((serviceData) => {
                                            return (
                                                <div className="" >
                                                    <div className="flex justify-between p-4 ">
                                                        <h1> {serviceData.serviceTitle}</h1>
                                                        <h1> ${serviceData.price}</h1>
                                                    </div>
                                                    <div className="text-gray-500 pl-6 pb-2">
                                                        <h1> {serviceData.duration}Min</h1>
                                                    </div>
                                                    <hr></hr>
                                                </div>

                                            )
                                        })
                                    }
                                    <div className='flex justify-between p-4 font-bold '>
                                        <h1>Total </h1>
                                        <h1>${calculateTotal(arrayOfSelectedServices)}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='max-w-7xl mx-auto px-44 sm:px-6 lg:px-8 '>
                            <div>
                                {service_data?.map((item) => (
                                    <div className=' lg:flex flex-wrap' >
                                        {item?.allServices?.length ? (
                                            <>
                                                <div className="flex"  >
                                                    <h1 className='text-2xl  font-bold pt-2'>
                                                        {item?.categoryTitle}
                                                    </h1>
                                                </div>
                                                <div className="mt-3 lg:w-full w-2/3 ">
                                                    <div className=' bg-white p-7 rounded-lg'>
                                                        <div
                                                            className='sm:w-full cursor-pointer' >
                                                            {item?.allServices?.map((service, index) => (
                                                                <div >
                                                                    <label>
                                                                        <div className='flex cursor-pointer'>
                                                                            <input
                                                                                // checked={checkedIfExisted(service?._id) ? true : false}
                                                                                name='checkbox'
                                                                                id={index}
                                                                                className='w-6 h-6 mt-1'
                                                                                type='checkbox'
                                                                                onClick={(e) => clickButton(e, service?._id)}
                                                                                onChange={(e) => handleChange(e, service)}
                                                                            />

                                                                            <p className='text-xl font-bold pl-6 ' name="test1" ref={myRef}>
                                                                                {service?.serviceTitle}
                                                                            </p>
                                                                        </div>
                                                                        <p className='pl-12 text-gray-400'>
                                                                            {service?.duration}min
                                                                        </p>
                                                                    </label>
                                                                    <hr className='my-3 w-full '></hr>
                                                                    <div className='flex justify-end lg:flex flex-wrap'>
                                                                        <p className='-mt-20 font-medium '>
                                                                            ${service?.price}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    {selectedServices.some((item) => item.checked === true) &&
                        <div className=' bg-white py-2 mt-4  sticky bottom-0'>
                            <div className='flex justify-end '>
                                <Link to="/timeComponent">
                                    <button

                                        className='bg-slate-900 w-32 h-12 mr-16  rounded-lg  text-white  font-bold cursor-pointer'
                                    >
                                        Next
                                    </button>
                                </Link>
                            </div>
                        </div>}
                </>
            )
            }
        </>
    );
};
