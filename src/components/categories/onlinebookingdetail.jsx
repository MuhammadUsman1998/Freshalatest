import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { getService } from "../../redux/Actions/serviceActions";
import { Link, useSearchParams } from "react-router-dom";
import img from "../../assets/images/service.webp";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import "../../assets/styles/app.css";

let arrayOfSelectedServices = [];


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
    const [search, setSearch] = useSearchParams();

    const salonId = search.get("salonId");
    const branchId = search.get("branchId");
    const userId = search.get("userId");
    var value = [{ branchId: branchId, salonId: salonId }]
    localStorage.setItem("info", JSON.stringify(value));

    const [selectedCategory, setSelectedCategory] = useState("");

    const myRef = useRef(null);
    const executeScroll = (_id) => {
        setSelectedCategory(_id);
        myRef.current.scrollIntoView();
    };
    useMountEffect(executeScroll);

    const userInfo = JSON.parse(localStorage.getItem("userData"));
    const service_info = useSelector((state) => state.getService);
    const service_data = service_info?.Services?.data[0]?.categories;

    const { loading } = service_info;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getService({ branchId, userId, salonId }));
    }, []);

    const serviceCategory = [];
    service_data?.forEach((cat) => {
        let obj = {};
        obj["_id"] = cat?._id;
        obj["categoryTitle"] = cat?.categoryTitle;
        serviceCategory.push(obj);
    });
    const [selectedServices, setSelectedServices] = useState([])
    const [showButton, setShowButton] = useState(false);
    // const [count, setCount] = useState(0)

    const clickButton = (e, serviceId) => {
        // setCount(prevCount => prevCount + 1);
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



    const handleChange = (e, selected_service_data) => {
        if (e.target.name === 'checkbox' && arrayOfSelectedServices.includes(selected_service_data)) {
            const newList = arrayOfSelectedServices.filter((item) => item !== selected_service_data)
            arrayOfSelectedServices = newList
            console.log(arrayOfSelectedServices);
        } else {
            arrayOfSelectedServices.push(selected_service_data)
        }
        console.log(arrayOfSelectedServices);
        setShowButton(!showButton)

    }

    const salonTitle =
        service_info?.Services?.data[0]?.salonInformation[0]?.salonTitle;
    const branchLocation = service_info?.Services?.data[0]?.branchLocation;

    return (
        <>
            <div className='bg-slate-900 h-48 text-white sticky top-0'>
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

                    <div className='bg-gray-300'>
                        <div className="sticky top-48">
                            <div className='max-w-7xl mx-auto px-44 sm:px-6 lg:px-8 '>
                                <div className='bg-white w-3/5  shadow-lg rounded-lg text-black  lg:w-full '>
                                    <Slider className='py-4 text-center  ' {...settings}>

                                        {serviceCategory?.map((cat1) => {
                                            return (
                                                <div className='hover:bg-gray-300 hover:text-black rounded-full '>
                                                    <h1
                                                        onClick={(_id) => executeScroll(cat1._id)}
                                                        className={`truncate cursor-pointer -top-1  rounded-full p-2 
                                                        ${selectedCategory ===
                                                                cat1?._id
                                                                ? "text-white bg-gray-900"
                                                                : "text-black"
                                                            }`}
                                                    >
                                                        {cat1?.categoryTitle}
                                                    </h1>
                                                </div>
                                            );
                                        })}
                                    </Slider>
                                </div>
                            </div>


                            <div className="float-right  -mt-20 mr-12 w-2/6">
                                <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 '>
                                    <div className="bg-white sticky shadow-lg rounded-lg text-black lg:hidden ">
                                        <div className='flex justify-center rounded-lg shadow-fuchsia-100 '>
                                            <img
                                                className='-mt-12 rounded-lg shadow-md border-4 border-neutral-100 '
                                                src={img}
                                            />
                                        </div>
                                        <h1 className='text-center font-bold pt-2'>{salonTitle}</h1>
                                        <p className='pt-3 text-center text-gray'> {branchLocation}</p>
                                        <hr className='mt-3'></hr>
                                        {
                                            arrayOfSelectedServices.map((serviceData) => {
                                                return (
                                                    <div className="">
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
                                            <h1>Free</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='max-w-7xl mx-auto px-44 sm:px-6 lg:px-8 '>
                            <div className='' ref={myRef}>
                                {service_data?.map((item) => (
                                    <div className=' lg:flex flex-wrap ' ref={myRef}>
                                        {item?.allServices?.length ? (
                                            <>
                                                <div className="flex">
                                                    <h1 className='text-2xl  font-bold pt-2'>
                                                        {item?.categoryTitle}
                                                    </h1>
                                                </div>
                                                <div className="mt-3 lg:w-full w-3/5 ">
                                                    <div className=' bg-white  p-7  rounded-lg  '>
                                                        <div
                                                            className='sm:w-full cursor-pointer '
                                                            ref={myRef}
                                                        >
                                                            {item?.allServices?.map((service, index) => (
                                                                <div ref={myRef}>
                                                                    <label>
                                                                        <div className='flex cursor-pointer'>
                                                                            <input
                                                                                name='checkbox'
                                                                                id={index}
                                                                                className='w-6 h-6 mt-1'
                                                                                type='checkbox'
                                                                                onClick={(e) => clickButton(e, service?._id)}
                                                                                onChange={(e) => handleChange(e, service)}
                                                                            />

                                                                            <p className='text-xl font-bold pl-6 '>
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

                                <Link to='/timeComponent' state={{ services: arrayOfSelectedServices }} >
                                    <button
                                        className='bg-slate-900 w-32 h-12 mr-16  rounded-lg  
                     text-white  font-bold'
                                    >
                                        Next
                                    </button>
                                </Link>
                            </div>
                        </div>}
                </>
            )}
        </>
    );
};
