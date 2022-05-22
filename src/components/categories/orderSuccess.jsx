import { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);





export const OrderSuccess = () => {


    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
        window.history.go(1);
    };



    useEffect(() => {
        MySwal.fire({
            title: "APOINTMENT SUCCESSFULLY",
            icon: "success",
            allowOutsideClick: false,
            showConfirmButton: false,

        });
    }

        , []);


    return (
        <div className='bg-gray-300 h-screen'>
            {/* <div className='max-w-7xl mx-auto px-16  sm:px-6 lg:px-24'>
                <div className='flex justify-center '>
                    <div className='bg-white w-1/2 h-96 rounded-lg shadow-lg mt-32'>
                        <div className='flex justify-center mt-2 py-4 h-32 '>
                            <img className='border-solid border-2 border-black rounded-full ' src="https://img.icons8.com/color/48/000000/checkmark--v1.png" />
                        </div>
                        <div className='pt-16'>
                            <h1 className='text-center font-bold text-4xl'>APPOINTMENT SUCCESSFULLY</h1>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

