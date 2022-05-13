import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Japan from "../../assets/images/japan.png";
import cape from "../../assets/images/cape.png";
import { Routes, Route, Link } from "react-router-dom";

import {
  CardComponent,
  ContentComponent,
  HeaderComponent,
  FooterComponent,

} from "../../components";
export const HomePage = () => {
  return (
    <>
      <div className=" bg-yellow-300  overflow-hidden">
        <HeaderComponent />
        <div className="max-w-7xl mx-auto  px-2 sm:px-6 lg:px-8 ">
          <div className="flex md:flex flex-wrap justify-center">
            <div className="flex items-center flex-col self-center py-4 bg-white
               text-black w-1/3 h-56 rounded-lg shadow-lg shadow-cyan-500/50 md:w-1/3 sm:w-56 sm:mt-2" >
              <div className="text-3xl text-center my-2 font-bold cursor-pointer 2xl:text-xlg md:text-lg">
                Instantly book salons and spas nearby
              </div>
              <div className="">
                <Link to="./venue">
                  <button className="bg-slate-900 hover:bg-slate-500 my-2 p-2 rounded-md 
               text-white cursor-pointer md:flex flex-wrap md:text-sm">
                    <i className="fa-solid fa-magnifying-glass mr-5 cursor-pointer  "> </i>
                    Discover venues near me
                  </button>
                </Link>
              </div>
            </div>
            <div className=" w-1/2  sm:mt-3">
              <img src={Japan} />
            </div>
            <div className="flex flex-col  md:flex justify-center">
              <h1 className="text-3xl my-2 font-bold">Excellent 5/5</h1>
              <div className="flex justify-between  text-lime-600 cursor-pointer">
                <i className="s1 fa-solid fa-star bg-white rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s2 fa-solid fa-star bg-white rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s3 fa-solid fa-star bg-white rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s4 fa-solid fa-star bg-white rounded-md w-8 h-8 text-center pt-2"></i>
                <i className="s5 fa-solid fa-star bg-white rounded-md w-8 h-8 text-center pt-2"></i>
              </div>
              <div className=" text-md mt-2 font-semibold">
                <p>Over 1,250 reviews on</p>
              </div>
              <div className="flex flex-row items-center ">
                <h4 className="text-lg font-bold ">Capterra</h4>
                <img className="w-8 h-8 mx-2 bg-transparent" src={cape} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardComponent />
      <ContentComponent />
      <FooterComponent />


    </>
  );
};
