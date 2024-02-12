import React, { useState, useEffect } from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import Footer from "./HomeComponent/Footer"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faTimes,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function CartPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await axios.get(
          "https://costcocombackend-production.up.railway.app/cart",
          { withCredentials: true }
        );
        const data = response.data;

        let quantity = 0;
        data.forEach((item) => {
          quantity += item.products[0].quantity;
        });
        console.log("Cart items:", data);
        setItems(
          data.map((item) => ({
            ...item.products[0],
            id: item.id,
            quantity: 1,
          }))
        );
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    }

    fetchCartItems();
  }, []);

  const increaseQuantity = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = async (id) => {
    try {
      const response = await axios.delete(
        `https://costcocombackend-production.up.railway.app/cart/${id}`,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        // Check for success response
        setItems((currentItems) =>
          currentItems.filter((item) => item.id !== id)
        );
      } else {
        console.error("Failed to remove item:", response);
      }
    } catch (error) {
      console.log("Failed to remove item:", error);
    }
  };

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Box>
      <Box background={"#ECECEC"} p={"2em"}>
        <Image
          onClick={() => navigate("/")}
          cursor={"pointer"}
          w={"9.375em"}
          display={"block"}
          mx={"auto"}
          src="https://signin-ui.costco.com/ecomssoui/567/common/Images/logo-bc-us.svg"
          alt="main-logo"
        />
      </Box>
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "#d2c9ff" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {items.length} items
                          </h6>
                        </div>
                        <hr className="my-4" />
                        {items.map((item) => (
                          <React.Fragment key={item.id}>
                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={item.image}
                                  className="img-fluid rounded-3"
                                  alt={item.name}
                                />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">Product</h6>
                                <h6 className="text-black mb-0">{item.name}</h6>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button
                                  className="btn btn-link px-2"
                                  onClick={() => decreaseQuantity(item.id)}
                                >
                                  <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input
                                  min="0"
                                  name="quantity"
                                  value={item.quantity}
                                  type="number"
                                  className="form-control form-control-sm"
                                  readOnly
                                />
                                <button
                                  className="btn btn-link px-2"
                                  onClick={() => increaseQuantity(item.id)}
                                >
                                  <FontAwesomeIcon icon={faPlus} />
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">
                                  € {item.price.toFixed(2)}
                                </h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a
                                  href="#!"
                                  className="text-muted"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <FontAwesomeIcon icon={faTimes} />
                                </a>
                              </div>
                            </div>
                            <hr className="my-4" />
                          </React.Fragment>
                        ))}
                        <div className="pt-5">
                          <h6 className="mb-0">
                            <a
                              href="#!"
                              className="text-body"
                              onClick={() => navigate(-1)}
                            >
                              <FontAwesomeIcon
                                icon={faLongArrowAltLeft}
                                className="me-2"
                              />
                              Back to shop
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">
                            items {items.length}
                          </h5>
                          <h5>€ {totalPrice.toFixed(2)}</h5>
                        </div>
                        <h5 className="text-uppercase mb-3">Shipping</h5>
                        {/* Include shipping options here */}
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>€ {(totalPrice + 5).toFixed(2)}</h5>{" "}
                          {/* Adjust shipping cost as needed */}
                        </div>
                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          onClick={() => navigate("/checkout")}
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Box>
  );
}

export default CartPage;
