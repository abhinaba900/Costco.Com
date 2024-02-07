import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import ForgotPasswoard from "../Components/ForgotPasswoard";
import Products from "../Components/HomeComponent/Products";
import SingleProductData from "../Components/SingleProductData";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPasswoard />} />
        <Route path="*" element={<Error />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:_id" element={<SingleProductData />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
