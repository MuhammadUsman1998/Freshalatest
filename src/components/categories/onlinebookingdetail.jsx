import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getService } from "../../redux/Actions/serviceActions";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import "../../assets/styles/app.css";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, backgroundColor: "gray", borderRadius: "50%" }}
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
    const [selectedCategory, setSelectedCategory] = useState("");
    const [arrayOfSelectedServices, setArrayOfSelectedServices] = useState(() => {
        const items = localStorage.getItem('selected_services')
        if (items) {
            return JSON.parse(items)
        } else {
            return []
        }
    })

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


    useEffect(() => {
        localStorage.setItem('selected_services', JSON.stringify(arrayOfSelectedServices))
    }, [arrayOfSelectedServices])

    const setCheckedList = (e, value) => {
        if (e.target.name === "service" && arrayOfSelectedServices.some(e => e._id === value._id)) {
            const newList = arrayOfSelectedServices.filter((item) => item._id !== value._id);
            setArrayOfSelectedServices([...newList])


        }
        else if (e.target.name === "service" && !arrayOfSelectedServices.some(e => e._id === value._id)) {
            setArrayOfSelectedServices([...arrayOfSelectedServices, value]);
        }
    };

    const salonTitle = service_info?.Services?.data[0]?.salonInformation[0]?.salonTitle;
    localStorage.setItem("salonTitle", salonTitle);
    const branchLocation = service_info?.Services?.data[0]?.branchLocation;
    localStorage.setItem("branchLocation", branchLocation);

    const image = service_info?.Services?.data[0].image;
    localStorage.setItem("image", image)


    const calculateTotal = (array) => {
        if (!array.length) {
            return 0;
        } else {
            return array.reduce((accumulator, value) => accumulator + Number(value.price), 0);
        }
    }

    const total = localStorage.getItem('salonTitle')
    const myTotal = localStorage.getItem('branchLocation')

    localStorage.getItem("image")

    return (
        <>
            <div className='bg-slate-900 h-36 text-white sticky top-0'>
                <div className='max-w-7xl mx-auto px-40 sm:px-0 lg:px-24'>
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
                            <div className='max-w-7xl mx-auto px-44 lg:px:32 sm:px-0 lg:px-0 '>
                                <div className='bg-white w-2/3  shadow-lg rounded-lg text-black  lg:w-full '>
                                    <Slider className='py-4 px-1 text-center' focusOnSelect={true} slidesToShow={service_data?.length <= 2 ? 2 : 3}
                                        slidesToScroll={service_data?.length <= 1 ? 2 : 3}  {...settings}>

                                        {service_data?.map((cat1, index) => {

                                            return (
                                                <div className='   py-2 rounded-full   hover:py-2'>
                                                    <a href={`#${cat1?._id}`}
                                                        key={index}
                                                        onClick={(_id) => selectColor(cat1?._id)}
                                                        className={`truncate cursor-pointer hover:no-underline hover:text-black sm:text-sm sm:truncate sm:px-1 sm:1 md:truncate md:px-4 
                                                        ${selectedCategory ===
                                                                cat1?._id
                                                                ? "text-white bg-gray-900 px-10 py-2 rounded-full truncate"
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




                        <div className=" float-right -mt-24 w-1/4 mr-40  sticky top-32">
                            <div className="bg-white  shadow-lg rounded-lg text-black lg:hidden xl:ml-20 xl:w-full  ">
                                <div className='flex justify-center rounded-lg shadow-fuchsia-100   '>
                                    <img
                                        className=' rounded-lg shadow-md border-4 -mt-12 w-20 h-20 border-neutral-100  '
                                        src={image}
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



                        <div className='max-w-7xl mx-auto px-44  sm:px-0 lg:px-0 '>
                            <div>
                                {service_data?.map((item) => (
                                    <div className=' lg:flex flex-wrap mt-6' >
                                        {item?.allServices?.length ? (
                                            <>
                                                <div className="flex"  >
                                                    <h1 className='text-2xl  font-bold pt-2 px-8' name="Service One" id={item._id}>
                                                        {item.categoryTitle}

                                                    </h1>
                                                </div>
                                                <div className="mt-3 lg:w-full w-2/3 ">
                                                    <div className=' bg-white  p-7 rounded-lg mb-12'>
                                                        <div
                                                            className='sm:w-full cursor-pointer divide-y-2 divide-slate-200' >
                                                            {

                                                                item?.allServices?.map((service, index) => (
                                                                    <div >
                                                                        <label>
                                                                            <div className='flex cursor-pointer pt-3'>
                                                                                <input
                                                                                    name='service'
                                                                                    id={index}
                                                                                    className='w-6 h-6 mt-1'
                                                                                    type='checkbox'


                                                                                    onChange={(e) => setCheckedList(e, service)}

                                                                                    checked={arrayOfSelectedServices.some(e => e._id === service?._id) ? true : false}
                                                                                />

                                                                                <p className='text-xl font-bold pl-6 '>
                                                                                    {service?.serviceTitle}

                                                                                </p>
                                                                            </div>
                                                                            <p className='pl-12 text-gray-400'>
                                                                                {service?.duration} Min
                                                                            </p>
                                                                        </label>
                                                                        {/* <hr className='my-3 w-full '></hr> */}
                                                                        <div className='flex justify-end lg:flex flex-wrap'>
                                                                            <p className='-mt-12 font-medium '>
                                                                                {service?.price} Rs
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


                    {arrayOfSelectedServices.length ?
                        <div className=' bg-white py-2 mt-4  sticky bottom-0'>
                            <div className='flex justify-end '>
                                <button
                                    onClick={routeChange}
                                    className='bg-slate-900 w-32 h-12 mr-10  rounded-lg  text-white  font-bold cursor-pointer'
                                >
                                    Next
                                </button>
                            </div>
                        </div> : ""}

                </>
            )
            }
        </>
    );
};
