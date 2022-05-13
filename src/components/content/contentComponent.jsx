import React from 'react'
export const ContentComponent = () => {
    return (
        <div className="relative bg-slate-200 overflow-hidden mt-5 h-1/2">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                                Summer styles are finally here
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">
                                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                                if you live or die.
                            </p>
                        </div>
                        <div>
                            <div className=" ">
                                {/* Decorative image grid */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                                >
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 sm:flex-wrap">
                                        <div className="flex items-center space-x-6 lg:space-x-8 ">
                                            <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="bg-white rounded-lg w-1/2 h-28  ">
                                        <a href="#" className="text-4xl font-bold pl-4 pt-3">London, United Kingdom</a>
                                        <div className="float-right">
                                            <a href="#" className="fa-solid fa-arrow-right text-2xl pr-3" ></a>
                                        </div>
                                        <br></br>
                                        <a href="#" className="text-sky-600 text-2xl pl-4">16 jobs</a>
                                    </div>

                                    <div className="bg-white rounded-lg w-1/2 h-28 mt-5 ">
                                        <a href="#" className="text-4xl font-bold pl-4 pt-3">NewYork, United States</a>
                                        <div className="float-right">
                                            <a href="#" className="fa-solid fa-arrow-right text-2xl pr-3" ></a>
                                        </div>
                                        <br></br>
                                        <a href="#" className="text-sky-600 text-2xl pl-4">5 jobs</a>
                                    </div>

                                    <div className="bg-white rounded-lg w-1/2 h-28 mt-5 ">
                                        <a href="#" className="text-4xl font-bold pl-4 pt-3">Warsaw, Poland</a>
                                        <div className="float-right">
                                            <a href="#" className="fa-solid fa-arrow-right text-2xl pr-3" ></a>
                                        </div>
                                        <br></br>
                                        <a href="#" className="text-sky-600 text-2xl pl-4">4 jobs</a>
                                    </div>
                                    <div className="bg-white rounded-lg w-1/2 h-28 mt-5 ">

                                        <a href="#" className="text-4xl font-bold pl-4 pt-3">Sydney, Australia</a>
                                        <div className="float-right">
                                            <a href="#" className="fa-solid fa-arrow-right text-2xl pr-3" ></a>
                                        </div>
                                        <br></br>
                                        <a href="#" className="text-sky-600 text-2xl pl-4">2 jobs</a>
                                    </div>
                                    <div className="sm:visible">
                                        <a href="#"
                                            className="mt-5 inline-block text-center bg-white border border-transparent rounded-md py-3 px-8 font-medium text-black"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}
