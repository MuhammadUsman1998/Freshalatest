import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getService } from "../../redux/Actions/serviceActions";
import { useNavigate, useSearchParams } from "react-router-dom";
import img from "../../assets/images/service.webp";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import "../../assets/styles/app.css";


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

    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />
};


export const OnlineBookingDetail = ({ IdSet }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useSearchParams();
    const [selectedServices, setSelectedServices] = useState([])
    const [showButton, setShowButton] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [service, setService] = useState("")
    const [data, setData] = useState([])
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

    const routeChange = () => {
        IdSet({ BranchId: branchId, SalonId: salonId })
        let path = "/timeComponent";
        navigate(path);
    }

    const selectColor = (_id) => {
        setSelectedCategory(_id);
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
            setSelectedCategory(filtered)
        }
    };

    const selectedServiceFromLocalStorage = localStorage.getItem('selected_services')

    const handleChange = (e, selected_service_data) => {

        if (e.target.name === 'checkbox' && arrayOfSelectedServices.some(e => e._id === selected_service_data._id)) {
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
                                    <Slider className='py-4 px-1 text-center' focusOnSelect={true} slidesToShow={service_data?.length <= 2 ? 2 : 3}
                                        slidesToScroll={service_data?.length <= 2 ? 2 : 3}  {...settings}>

                                        {service_data?.map((cat1) => {

                                            return (
                                                <div className='   py-2 rounded-full   hover:py-2'>
                                                    <a href={`#${cat1?._id}`}

                                                        onClick={(_id) => selectColor(cat1?._id)}
                                                        className={`truncate cursor-pointer hover:no-underline hover:text-black  
                                                        ${selectedCategory ===
                                                                cat1?._id
                                                                ? "text-white bg-gray-900 px-10 py-2 rounded-full"
                                                                : "text-black"
                                                            }`}
                                                    >
                                                        {cat1?.categoryTitle}
                                                    </a>
                                                </div>

                                            );
                                        })}
                                    </Slider>
                                </div>
                            </div>
                        </div>




                        <div className=" float-right -mt-24 w-1/5 mr-52  sticky top-32">
                            <div className="bg-white  shadow-lg rounded-lg text-black lg:hidden xl:ml-20 xl:w-full  ">
                                <div className='flex justify-center rounded-lg shadow-fuchsia-100   '>
                                    <img
                                        className=' rounded-lg shadow-md border-4 -mt-12  border-neutral-100  '
                                        src={img}
                                    />
                                </div>
                                <h1 className='text-center font-bold pt-2'>{total}</h1>
                                <p className='pt-3 text-center text-gray-400'> {myTotal}</p>
                                <hr className='mt-3'></hr>
                                <div className="overflow-y-scroll h-72">
                                    {
                                        arrayOfSelectedServices.length === 0 ? (<p className="text-center pt-4 text-gray-400">No Service Selected Yet</p>) : arrayOfSelectedServices.map((serviceData) => {
                                            return (

                                                <div>
                                                    <div className="flex justify-between p-4 ">
                                                        <h1> {serviceData.serviceTitle}</h1>
                                                        <h1> {serviceData.price}Rs</h1>
                                                    </div>
                                                    <div className="text-gray-500 pl-6 ">
                                                        <h1> {serviceData.duration}Min</h1>
                                                    </div>
                                                    <hr className="mt-2"></hr>

                                                </div>

                                            )
                                        })
                                    }
                                    <div className='flex justify-between p-4 font-bold '>
                                        <h1>Total </h1>
                                        <h1>{calculateTotal(arrayOfSelectedServices)}Rs</h1>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='max-w-7xl mx-auto px-44 sm:px-6 lg:px-8 '>
                            <div>
                                {service_data?.map((item) => (
                                    <div className=' lg:flex flex-wrap mt-6' >
                                        {item?.allServices?.length ? (
                                            <>
                                                <div className="flex"  >
                                                    <h1 className='text-2xl  font-bold pt-2' name="Service One" id={item._id}>
                                                        {item.categoryTitle}

                                                    </h1>
                                                </div>
                                                <div className="mt-3 lg:w-full w-2/3 ">
                                                    <div className=' bg-white p-7 rounded-lg mb-12'>
                                                        <div
                                                            className='sm:w-full cursor-pointer divide-y-2 divide-slate-200' >
                                                            {item?.allServices?.map((service, index) => (
                                                                <div >
                                                                    <label>
                                                                        <div className='flex cursor-pointer pt-3'>
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
                                                                                {index}
                                                                            </p>
                                                                        </div>
                                                                        <p className='pl-12 text-gray-400'>
                                                                            {service?.duration}min
                                                                        </p>
                                                                    </label>
                                                                    {/* <hr className='my-3 w-full '></hr> */}
                                                                    <div className='flex justify-end lg:flex flex-wrap'>
                                                                        <p className='-mt-12 font-medium '>
                                                                            {service?.price}Rs
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
                                <button
                                    onClick={routeChange}
                                    className='bg-slate-900 w-32 h-12 mr-16  rounded-lg  text-white  font-bold cursor-pointer'
                                >
                                    Next
                                </button>
                            </div>
                        </div>}
                </>
            )
            }
        </>
    );
};
