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
import CartPadge from "../Components/CartPadge";
import CheckoutPage from "../Components/CheckoutPadge";
import OrderSuccessful from "../Components/OrderSecessfull";
import VaryFiForgotData from "../Components/VaryFiForgotData";
import YourOrder from "../Components/YourOrder";
import NewPassward from "../Components/NewPassward";
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
        <Route path="/cart" element={<CartPadge />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/ordersuccessfull" element={<OrderSuccessful />} />
        <Route path="/forgot-password-varify" element={<VaryFiForgotData />} />
        <Route path="/your-order" element={<YourOrder />} />
        <Route path="/new-password" element={<NewPassward />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
