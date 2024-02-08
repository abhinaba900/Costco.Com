import React from "react";
import "./OrderSecessfull.css";
import { useNavigate } from "react-router-dom";
function OrderSuccessful() {
  const navigate = useNavigate();
  return (
    <section class="mail-seccess section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-12">
            <div class="success-inner">
              <h1>
                <i class="fa fa-envelope"></i>
                <span>Your Order Has Been Successfully Placed!</span>
              </h1>
              <p>
                We're thrilled to let you know that your order has been
                successfully placed and is now being processed with the utmost
                care. In the spirit of the elegance and dedication that defines
                our service, rest assured that every detail of your order is
                being handled with precision and attention.
              </p>
              <a onClick={() => navigate("/")} class="btn btn-primary btn-lg">
                Go Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSuccessful;
