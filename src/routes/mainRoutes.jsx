import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginContinue, OrderSuccess, SignUpContinueComponent, StaffComponent, TimeComponent } from "../components";
import { OnlineBookingDetail } from "../components/categories/onlinebookingdetail";
// import all pages
import { LoginPage, LoginResetPage, SignFormPage, SignUpPage } from "../pages";
import { LoginFormPage } from "../pages/auth/loginForm";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/online-booking/detail" element={<OnlineBookingDetail />} /> */}
      <Route exact path="/online-booking/details" element={<OnlineBookingDetail />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route exact path="/signUpForm" element={<SignFormPage />} />
      <Route exact path="/loginform" element={<LoginFormPage />} />
      <Route exact path="/loginreset" element={<LoginResetPage />} />
      <Route exact path="/staffComponent" element={<StaffComponent />} />
      <Route exact path="/timeComponent" element={<TimeComponent />} />
      <Route exact path="/signupcontinueComponent" element={<SignUpContinueComponent />} />
      <Route exact path="/loginContinue" element={<LoginContinue />} />
      <Route exact path="/orderSuccess" element={<OrderSuccess />} />
    </Routes>
  );
};
