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
        let path = "/time";
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



    const calculateTotal = (array) => {
        if (!array.length) {
            return 0;
        } else {
            return array.reduce((accumulator, value) => accumulator + Number(value.price), 0);
        }
    }

    const total = localStorage.getItem('salonTitle')
    const myTotal = localStorage.getItem('branchLocation')

    const image = service_info?.Services?.data[0]?.image;
    localStorage.setItem("image", image)
    localStorage.getItem("image")

    const branch = service_info?.Services?.data[0]?.branchCode
    localStorage.setItem("branchCode", branch)
    const branchCode = localStorage.getItem("branchCode")

    return (
        <>
            <div className='bg-slate-900 h-36 text-white sticky top-0'>
                <div className='max-w-7xl mx-auto px-20 sm:px-0  lg:px-0'>
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
                <div className='flex justify-center mt-56 '>
                    <ClipLoader loading={loading} size={40} />
                </div>
            ) : (
                <>

                    <div className='bg-gray-200'>
                        <div className='max-w-7xl mx-auto  sm:px-0 lg:px-0 '>
                            <div className=" flex justify-evenly">
                                <div className=" w-1/2 lg:w-full ">
                                    <div className='bg-white shadow-lg rounded-lg text-black  lg:w-full sticky top-36'>
                                        <Slider className='py-4 px-1 text-center' focusOnSelect={true} slidesToShow={service_data?.length <= 1 ? 1 : service_data?.length <= 2 ? 2 : 3}
                                            slidesToScroll={service_data?.length <= 1 ? 2 : 3}  {...settings}>

                                            {service_info?.Services?.data[0]?.categories.length > 0 ?
                                                <div>
                                                    {service_data?.map((cat1, index) => {

                                                        return (
                                                            <div className='  py-2 rounded-full '>
                                                                <a href={`#${cat1?._id}`}
                                                                    key={index}
                                                                    onClick={(_id) => selectColor(cat1?._id)}
                                                                    className={`truncate cursor-pointer hover:no-underline hover:text-black sm:text-sm sm:truncate sm:px-1  md:truncate md:px-4 
                                                        ${selectedCategory ===
                                                                            cat1?._id
                                                                            ? "text-white bg-gray-900 px-6 py-2 rounded-full truncate"
                                                                            : "text-black"

                                                                        }`}
                                                                >
                                                                    {cat1?.categoryTitle}
                                                                </a>
                                                            </div>

                                                        );
                                                    })}
                                                </div> : <div>No Categories Available</div>}
                                        </Slider>
                                    </div>


                                    <div className="">
                                        {service_data?.map((item) => (
                                            <div className='  mt-6' >
                                                {item?.allServices?.length ? (
                                                    <>
                                                        <div className="flex"  >
                                                            <h1 className='text-2xl  font-bold pt-2 px-8' name="Service One" id={item._id}>
                                                                {item.categoryTitle}
                                                            </h1>
                                                        </div>
                                                        <div className="mt-3  lg:w-full ">
                                                            <div className='mt-3  bg-white p-7  rounded-lg mb-12'>
                                                                <div
                                                                    className='sm:w-full cursor-pointer divide-y-2 divide-slate-200' >
                                                                    {

                                                                        item?.allServices?.map((service, index) => (
                                                                            <div >
                                                                                <label>
                                                                                    <div className='flex cursor-pointer  pt-3'>
                                                                                        <input
                                                                                            name='service'
                                                                                            id={index}
                                                                                            className='w-6 h-6 mt-1'
                                                                                            type='checkbox'


                                                                                            onChange={(e) => setCheckedList(e, service)}

                                                                                            checked={arrayOfSelectedServices.some(e => e._id === service?._id) ? true : false}
                                                                                        />

                                                                                        <p className='text-lg  font-bold pl-3 sm:text-sm'>
                                                                                            {service?.serviceTitle}

                                                                                        </p>
                                                                                    </div>
                                                                                    <p className='text-gray-400 pl-10 sm:text-sm'>
                                                                                        {service?.duration} Min
                                                                                    </p>
                                                                                </label>
                                                                                <div className='flex justify-end lg:flex flex-wrap sm:text-sm'>
                                                                                    <p className='-mt-14 font-medium '>
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


                                <div className="bg-white w-1/4 h-1/4 shadow-lg rounded-lg text-black lg:hidden sticky top-36  ">
                                    <div className='flex justify-center rounded-lg shadow-fuchsia-100  '>
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
                                    <p className="text-center text-gray-400">{branchCode}</p>
                                    <hr className='mt-3'></hr>
                                    <div className="overflow-y-scroll h-72">
                                        {
                                            arrayOfSelectedServices?.length === 0 ? (<p className="text-center pt-4 text-gray-400">No Service Selected Yet</p>) : arrayOfSelectedServices.map((serviceData) => {
                                                return (

                                                    <div>
                                                        <div className="flex justify-between pl-4 pt-2 ">

                                                            <h1> {serviceData.serviceTitle}</h1>
                                                            <h1 className="pr-2"> {serviceData.price} Rs</h1>
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


                    {arrayOfSelectedServices.length ?
                        <div className=' bg-white py-2 mt-6  sticky bottom-0'>

                            <div className=" flex justify-between ">
                                <div className="font-bold px-4 3xl:invisible 2xl:invisible xl:invisible lg:visible">
                                    <h1 className="text-gray-500">{arrayOfSelectedServices?.length} {arrayOfSelectedServices?.length == 1 ? "Service" : "Services"}</h1>
                                    <h1>{calculateTotal(arrayOfSelectedServices)} Rs</h1>
                                </div>
                                {/* <div className='flex justify-end '> */}
                                <button
                                    onClick={routeChange}
                                    className='bg-slate-900 w-32 h-12 mr-10  rounded-lg  text-white  font-bold cursor-pointer'
                                >
                                    Next
                                </button>
                            </div>
                            {/* </div> */}
                        </div> : ""}

                </>
            )
            }
        </>
    );
};
