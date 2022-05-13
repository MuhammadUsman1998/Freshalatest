import React from 'react'
import Slider from "react-slick";
import { Routes, Route, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import MobImg from "../../assets/images/mobfresha.png"
import Logo from "../../assets/images/fresha.png"
import menu from "../../assets/images/business-menu.jpg"
import salon from "../../assets/images/pic.jpg"
import salon1 from "../../assets/images/pic1.jpg"
import salon2 from "../../assets/images/pic2.jpg"
import salon3 from "../../assets/images/pic3.jpg"
import salon4 from "../../assets/images/pic4.jpg"
import salon5 from "../../assets/images/pic5.jpg"
import salon6 from "../../assets/images/pic6.webp"
import salon7 from "../../assets/images/pic7.webp"
import salon8 from "../../assets/images/pic10.jpg"
import salon9 from "../../assets/images/pic20.jpg"
import salon10 from "../../assets/images/pic16.jpg"
import salon11 from "../../assets/images/pic17.jpg"
import salon12 from "../../assets/images/pic18.jpg"
import salon13 from "../../assets/images/pic1.jpg"
import salon14 from "../../assets/images/pic20.jpg"
import salon15 from "../../assets/images/pic21.jpg"
import pic8 from "../../assets/images/pic8.webp"
import pic9 from "../../assets/images/pic9.webp"
import pic11 from "../../assets/images/pic11.webp"
import pic12 from "../../assets/images/pic12.webp"
import pic13 from "../../assets/images/pic13.webp"
import pic14 from "../../assets/images/pic14.webp"
import cape from "../../assets/images/cape.png"
const products = [
  {
    id: 1,
    name: 'Massage',
    href: 'signUpForm',
    imageSrc: salon,
    // imageAlt: "Front of men's Basic Tee in black.",
    // price: '$35',
    // color: 'Black',
  },
  {
    id: 2,
    name: 'Hair Salon',
    href: 'signUpForm',
    imageSrc: salon1,
    // imageAlt: "Front of men's Basic Tee in black.",
    // price: '$35',
    // color: 'Black',
  },
  {
    id: 3,
    name: 'Aesthetics',
    href: 'signUpForm',
    imageSrc: salon2,
    // imageAlt: "Front of men's Basic Tee in black.",
    // price: '$35',
    // color: 'Black',
  },
  {
    id: 4,
    name: 'Eyebrows & Lashes',
    href: 'signUpForm',
    imageSrc: salon3,
    // imageAlt: "Front of men's Basic Tee in black.",
    // price: '$35',
    // color: 'Black',
  },
  {
    id: 5,
    name: 'Beauty Salon',
    href: 'signUpForm',
    imageSrc: salon4,
    // imageAlt: "Front of men's Basic Tee in black.",
    // price: '$35',
    // color: 'Black',
  },
  {
    id: 6,
    name: 'Shave',
    href: 'signUpForm',
    imageSrc: salon5,
    // imageAlt: "Front of men's Basic Tee in black.",
    // price: '$35',
    // color: 'Black',
  },
  // {
  //   id: 7,
  //   name: 'Barbershop',
  //   href: 'categoriesComponent',
  //   imageSrc: salon6,
  //   // imageAlt: "Front of men's Basic Tee in black.",
  //   // price: '$35',
  //   // color: 'Black',
  // },
  // {
  //   id: 8,
  //   name: 'Therapy Center',
  //   href: 'categoriesComponent',
  //   imageSrc: salon7,
  //   // imageAlt: "Front of men's Basic Tee in black.",
  //   // price: '$35',
  //   // color: 'Black',
  // },
]
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  // responsive: [
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 1,
  //       centerMode: false,
  //       dots: false,
  //     },
  //   },
  // ],
};

const callouts = [
  {
    name: 'Decadance hair and beauty',
    description: '36 Store Street London',
    imageSrc: pic8,
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Balance Massage & Wellness',
    description: '152 Cavendish Street London',
    imageSrc: pic9,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'ELP Barbershop',
    description: '67 Amwell Street London',
    imageSrc: pic11,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Douce London New Location',
    description: 'UK Telephone House 69 Paul Street',
    imageSrc: pic12,
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Chelsea hair and Skin Clinic',
    description: '50 Harington Road London',
    imageSrc: pic13,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Masaj',
    description: '10 Charlotte Road London',
    imageSrc: pic14,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Bond',
    description: '44b Cheshire',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'LINEDIT',
    description: '226 Fulham Road London',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },

]

export const CardComponent = () => {
  return (

    // <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-20 ">
    //   <div className=" h-24">
    //     <div className="flex flex-col border w-28">
    //       <h4><b>John Doe</b></h4>
    //       <h4><b>John Doe</b></h4>
    //       <h4><b>John Doe</b></h4>
    //     </div>
    //   </div>
    // </div>
    <div className="">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-5xl font-extrabold tracking-tight text-gray-900">Top Categories in London </h2>
        <div className='flex justify-between text-center lg:flex flex-wrap'>
          {/* <Slider classname {...settings} > */}
          <Link to="/signUpForm">
            <Card className='shadow-md hover:shadow-2xl' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon1} />
              <Card.Body>
                <Card.Text>Beauty Salon</Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/signUpForm">
            <Card className='shadow-md' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon2} />
              <Card.Body>
                <Card.Text>Aesthetics</Card.Text>
              </Card.Body>
            </Card>
          </Link>

          <Link to="/signUpForm">
            <Card className='shadow-md' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon3} />
              <Card.Body>
                <Card.Text>Massage</Card.Text>
              </Card.Body>
            </Card>
          </Link>

          <Link to="/signUpForm">
            <Card className='shadow-md' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon4} />
              <Card.Body>
                <Card.Text>Facial</Card.Text>
              </Card.Body>
            </Card>
          </Link>

          <Link to="/signUpForm">
            <Card className='shadow-md' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon5} />
              <Card.Body>
                <Card.Text>Beard</Card.Text>
              </Card.Body>
            </Card>
          </Link>

          <Link to="/signUpForm">
            <Card className='shadow-md' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon6} />
              <Card.Body>
                <Card.Text>Salon Shop</Card.Text>
              </Card.Body>
            </Card>
          </Link>

          {/* <Link to="/signUpForm">
            <Card className='shadow-md' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon7} />
              <Card.Body>
                <Card.Text>Hair Cutting</Card.Text>
              </Card.Body>
            </Card>
          </Link> */}
          {/* <Link to="/signUpForm">
            <Card className='shadow-md' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon8} />
              <Card.Body>
                <Card.Text>Tattoo</Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/signUpForm">
            <Card className='shadow-md' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon9} />
              <Card.Body>
                <Card.Text>Body Aesthetics</Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/signUpForm">
            <Card className='shadow-md' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon10} />
              <Card.Body>
                <Card.Text>Eyebrows & Lashes</Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/signUpForm">
            <Card className='shadow-md' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon11} />
              <Card.Body>
                <Card.Text>Nail Salon</Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/signUpForm">
            <Card className='shadow-md' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon12} />
              <Card.Body>
                <Card.Text>Exercise Salon</Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/signUpForm">
            <Card className='shadow-md' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon13} />
              <Card.Body>
                <Card.Text>Hair Salon</Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/signUpForm">
            <Card className='shadow-md' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon14} />
              <Card.Body>
                <Card.Text>Body Aesthetics</Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/signUpForm">
            <Card className='shadow-md' style={{ width: "11rem", marginTop: "30px" }}>
              <Card.Img img src={salon15} />
              <Card.Body>
                <Card.Text>Plunking Salon</Card.Text>
              </Card.Body>
            </Card>
          </Link> */}
        </div>
        {/* </Slider>  */}
        {/* <Slider className="flex flex-row" {...settings} > */}
        {/* <div className="  mt-6 grid gap-y-10 gap-x-2 sm:grid-cols-2 lg:grid-cols-6  text-center">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="flex w-56 h-32 rounded-lg"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 text-center">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className=" text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900" >{product.price}</p>
              </div>
            </div>
          ))}
        </div> */}
        {/* </Slider> */}
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 mt-10">Features Venue In London</h2>
          <div className="mt-6 grid space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-4 p-4 cursor-pointer">
            {/* <div className='flex'> */}
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1
               sm:h-64 lg:aspect-w-1 lg:aspect-h-1 mt-5">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 font-bold text-md text-gray-500 ">
                  <a href={callout.href}>
                    <span className="absolute inset-0  " />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base text-gray-900">{callout.description}</p>
                <p className='bg-blue-200 text-blue-500 rounded-lg w-24 text-center font-bold'>FEATURED</p>
              </div>
            ))}
          </div>
          {/* </div> */}
        </div>


        {/* Top Rated Destination */}
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between sm:flex flex-wrap">
            <div className="mt-10">
              <h1 className="text-5xl font-bold text-black">The top-rated<br></br> destination for beauty<br></br> and wellness </h1>
              <p className="text-black">One solution, one software. Trusted by the best in the beauty and<br></br> wellness industry</p>
            </div>
            <div className="counter mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 cursor-pointer ">
              <div>
                <h1 className="text-4xl font-bold text-black">60,000+</h1>
                <p className="text-black">partner businesses</p>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-black">150,000+</h1>
                <p className="text-black">stylists and professionals</p>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-black">400 million+</h1>
                <p className="text-black">appointments booked</p>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-black">120+ countries</h1>
                <p className="text-black">with Fresha available</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="mobimg bg-gray-200  rounded-t-full rounded-r-none">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex">
          <div className="h-1/2 ">
            <img src={MobImg} />
          </div>
          <div className="mt-32 ">
            <div className="w-96">
              <img src={Logo} />
            </div>
            <h1 className="text-4xl font-bold mt-2">
              Download our app</h1>
            <p className="font-bold mt-2">
              Book unforgettable beauty and wellness experiences with the Fresha
              mobile app – the best way to dicover top-rated salons and spas</p>
            <div className="flex justify-between mt-10 sm:flex-wrap text-sm ">

              <Link to="./https://apps.apple.com/us/app/fresha/id1297230801" className="bg-black text-white h-24 p-4 rounded-lg hover:bg-slate-400 sm:pr-5">
                <i className=" text-white fa-brands fa-apple pr-2"></i>
                Download On The<br></br> App Store
              </Link>
              <br></br>
              <button className="bg-black text-white h-24 p-4 w-44 rounded-lg hover:bg-slate-400">
                <i className="text-white pr-2 fa-brands fa-google-play "></i>
                Get In On<br></br> Google Play</button>
            </div>
          </div>
        </div>
      </div>
      {/* Bussiness Software */}

      <div className="bg-slate-900 ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <h1 className="text-white font-bold text-5xl ml-14 pt-5">Business software<br></br> without limits, 100%<br></br> subscription-free</h1>
          <p className="text-white text-1xl ml-14 pt-5">Supercharge your business for free with the world's top booking<br></br> platform for salons and spas. Independently voted no. 1 by<br></br> industry professionals. Stop paying subscription fees and join the<br></br> revolution!</p>
          <button className="bg-sky-600 text-white rounded-lg w-32 h-12  ml-14 mt-5 hover:bg-sky-300 cursor-pointer">Learn More</button>
          <div className="flex justify-end">
            <img className="mt-5" src={menu} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="text-black font-bold text-5xl mt-10">Book with the best</h1>
        <div className="flex justify-between m-2 sm:flex flex-wrap">
          <div className="bg-gray-300 w-60 mt-5 p-3 rounded-lg mr-2 ">
            <div className="flex">
              <div className=" text-sm flex justify-between text-white cursor-pointer">
                <i className="s1 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s2 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s3 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s4 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s5 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
              </div>
              <h1 className="pl-2">08Aug</h1>
            </div>
            <h1 className="text-black font-bold">Shedul is top notch!</h1>
            <p className="text-black pt-2">Easy to navigate, aesthetically pleasing, awesome features<br></br> and handy  for on the go!</p>
            <p className=" w-20 h-10 font-bold mt-2">AlliRovensky<img className="rounded-full" src={salon} /></p>
          </div>

          <div className="bg-gray-300 w-60 mt-5 p-3 rounded-lg ml-2">
            <div className="flex">
              <div className=" text-sm flex justify-between text-white cursor-pointer">
                <i className="s1 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s2 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s3 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s4 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s5 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
              </div>
              <h1 className="pl-2">29Aug</h1>
            </div>
            <h1 className="text-black font-bold">Love this Software</h1>
            <p className="text-black pt-2">Amazing customer service, I<br></br> love how easy it is to use!</p>
            <p className=" w-20 h-10 font-bold mt-16">TaylinBeechey <i className="fa-solid fa-person rounded-full w-28 h-22"></i></p>
          </div>
          <div className="bg-gray-300 w-60 mt-5 p-3 rounded-lg ml-2">
            <div className="flex">
              <div className=" text-sm flex justify-between text-white cursor-pointer">
                <i className="s1 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s2 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s3 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s4 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s5 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
              </div>
              <h1 className="pl-2">13Aug</h1>
            </div>
            <h1 className="text-black font-bold">The creators know what we need</h1>
            <p className="text-black pt-2">The app is so organized with every possible feature you need for running your business.</p>
            <p className=" w-20 h-10 font-bold">BriannaMariePetersen<i className="fa-solid fa-person rounded-full w-28 h-22"></i></p>
          </div>
          <div className="bg-gray-300 w-60 mt-5 p-3 rounded-lg ml-2 ">
            <div className="flex">
              <div className=" text-sm flex justify-between text-white cursor-pointer">
                <i className="s1 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s2 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s3 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s4 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s5 fa-solid fa-star bg-green-500 rounded-md w-8 h-8 text-center pt-2"></i>
              </div>
              <h1 className="pl-2">02Sep</h1>
            </div>
            <h1 className="text-black font-bold">Been using for over a year</h1>
            <p className="text-black pt-2">Support has been great and<br></br> updates into development has created a fantastic database</p>
            <div className="flex">
              <p className=" w-20 h-10 font-bold mt-4">-tyb-<i className="fa-solid fa-person rounded-full w-28 h-22"></i></p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 ">
        <div className=" sm: flex-wrap">
          <div className="text-4xl  mt-5">
            Rated
            <b>
              Excellent 5/5</b>
            over 1,250 reviews on Capterra<img className="w-8 h-8 mt-2" src={cape} />
          </div>
        </div>
      </div>



    </div >


  )
}
