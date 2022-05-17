import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { getService } from "../../redux/Actions/serviceActions";
import { Link, useSearchParams } from "react-router-dom";
import img from "../../assets/images/service.webp";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import "../../assets/styles/app.css";

// import ReactLoading from 'react-loading';
var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    color: "black",
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
    const service_info = useSelector((state) => state?.getService);
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
    const handleChange = (e) => {
        setShowButton(!showButton)
    }

    const salonTitle =
        service_info?.Services?.data[0]?.salonInformation[0]?.salonTitle;
    const branchLocation = service_info?.Services?.data[0]?.branchLocation;

    return (
        <>
            <div className='bg-slate-900 h-48 text-white '>
                <div className='max-w-7xl mx-auto px-28 sm:px-6 lg:px-24'>
                    <div className='flex flex-col p-4'>
                        <div className='flex justify-between '>
                            <div className='flex'>
                                <p className='text-white pl-12'>Step 1/3 </p>
                            </div>
                        </div>
                        <h1 className='text-4xl font-bold text-white px-5'>
                            Select Services
                        </h1>
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
                        <div className="">
                            <div className='max-w-7xl mx-auto px-44 sm:px-6 lg:px-8 '>
                                <div className='bg-gray-200 w-3/5  shadow-lg rounded-lg text-black  lg:w-full '>
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
                        </div>


                        <div className="float-right -mt-20">
                            <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 '>
                                <div className="bg-white w-2/3 shadow-lg rounded-lg text-black lg:hidden mr-56">
                                    <div className='flex justify-center rounded-lg shadow-fuchsia-100 '>
                                        <img
                                            className='-mt-12 rounded-lg shadow-md border-4 border-neutral-100 '
                                            src={img}
                                        />
                                    </div>
                                    <h1 className='text-center font-bold pt-2'>{salonTitle}</h1>
                                    <p className='pt-3 text-center text-gray'> {branchLocation}</p>
                                    <hr className='mt-3'></hr>
                                    <div className='flex justify-between p-5 font-bold'>
                                        <h1>Total </h1>
                                        <h1>Free</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="flex justify-end ">
                            <div className=' bg-white flex-col shadow-lg rounded-lg text-black p-2  lg:hidden '>
                                <div className='flex justify-center rounded-lg shadow-fuchsia-100 '>
                                    <img
                                        className=' rounded-lg shadow-md border-4 border-neutral-100 '
                                        src={img}
                                    />
                                </div>
                                <h1 className='text-center font-bold pt-3'>{salonTitle}</h1>
                                <p className='pt-3 text-center text-gray'> {branchLocation}</p>
                                <hr className='mt-3'></hr>
                                <p className='pt-10 text-center'>No services selected yet </p>
                                <hr className='mt-3'></hr>
                                <div className='flex justify-between p-5'>
                                    <h1>Total Free</h1>
                                    <h1>Free</h1>
                                </div>
                            </div>
                        </div> */}

                        <div className='max-w-7xl mx-auto px-44 sm:px-6 lg:px-8 '>
                            <div className='' ref={myRef}>
                                {service_data?.map((item) => (
                                    <div className='md:w-full lg:flex flex-wrap ' ref={myRef}>
                                        {item?.allServices?.length ? (
                                            <>
                                                <h1 className='text-2xl pt-5 font-bold  '>
                                                    {item?.categoryTitle}
                                                </h1>
                                                {/* sm:-mt-12 */}
                                                <div className='mt-3 bg-white w-3/5  p-7 shadow-lg rounded-lg lg:w-full '>
                                                    <div
                                                        className='sm:w-full cursor-pointer '
                                                        ref={myRef}
                                                    >
                                                        {item?.allServices?.map((service) => (
                                                            <div ref={myRef}>
                                                                <label>
                                                                    <div className='flex cursor-pointer'>
                                                                        <input
                                                                            className='w-6 h-6 mt-1 '
                                                                            type='checkbox'
                                                                            onClick={(e) => clickButton(e, service?._id)}
                                                                            onChange={(e) => handleChange(e)}
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
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {selectedServices.some((item) => item.checked === true) && <div className=' bg-white shadow-md '>
                        <div className='flex justify-end mr-36 mt-3  pt-6 h-24 '>
                            <Link to='/timeComponent'>
                                <button
                                    className='bg-slate-900 w-32 h-12 shadow-lg rounded-lg
                     text-white hover:bg-slate-500 font-bold'
                                >
                                    Book Now
                                </button>
                            </Link>
                        </div>
                    </div>}
                </>
            )}
        </>
    );
};
