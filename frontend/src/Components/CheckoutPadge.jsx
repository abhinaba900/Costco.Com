import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CheckoutPadge.css";

function CheckoutPage() {
  // Example useState usage
  // const [name, setName] = useState('');

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row">
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <ol className="activity-checkout mb-0 px-4 mt-3">
                <li className="checkout-item">
                  <div className="avatar checkout-icon p-1">
                    <div className="avatar-title rounded-circle bg-primary">
                      <i className="bx bxs-receipt text-white font-size-20"></i>
                    </div>
                  </div>
                  <div className="feed-item-list">
                    <div>
                      <h5 className="font-size-16 mb-1">Billing Info</h5>
                      <p className="text-muted text-truncate mb-4">
                        Sed ut perspiciatis unde omnis iste
                      </p>
                      <div className="mb-3">
                        <form>
                          <div>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-name"
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="billing-name"
                                    placeholder="Enter name"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-email-address"
                                  >
                                    Email Address
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="billing-email-address"
                                    placeholder="Enter email"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-phone"
                                  >
                                    Phone
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="billing-phone"
                                    placeholder="Enter Phone no."
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="billing-address"
                              >
                                Address
                              </label>
                              <textarea
                                className="form-control"
                                id="billing-address"
                                rows="3"
                                placeholder="Enter full address"
                              ></textarea>
                            </div>

                            <div className="row">
                              <div className="col-lg-4">
                                <div className="mb-4 mb-lg-0">
                                  <label className="form-label">Country</label>
                                  <select
                                    className="form-control form-select"
                                    title="Country"
                                  >
                                    <option value="0">Select Country</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    {/* Add more countries as needed */}
                                  </select>
                                </div>
                              </div>

                              <div className="col-lg-4">
                                <div className="mb-4 mb-lg-0">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-city"
                                  >
                                    City
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="billing-city"
                                    placeholder="Enter City"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-4">
                                <div className="mb-0">
                                  <label
                                    className="form-label"
                                    htmlFor="zip-code"
                                  >
                                    Zip / Postal code
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="zip-code"
                                    placeholder="Enter Postal code"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Shipping Info and Payment Info sections follow similar structure */}
                {/* Additional JSX for Shipping Info */}
                {/* Additional JSX for Payment Info */}
                <div className="feed-item-list">
                  <div>
                    <h5 className="font-size-16 mb-1">Payment Info</h5>
                    <p className="text-muted text-truncate mb-4">
                      Duis arcu tortor, suscipit eget
                    </p>
                  </div>
                  <div>
                    <h5 className="font-size-14 mb-3">Payment method :</h5>
                    <div className="row">
                      <div className="col-lg-4 col-sm-6">
                        <label className="card-radio-label mb-3">
                          <input
                            type="radio"
                            name="paymentMethod"
                            id="paymentMethodCard"
                            className="card-radio-input"
                          />
                          <div className="card-radio text-center p-3">
                            <i className="bx bxs-credit-card front-size-24 mb-2"></i>
                            <span>Credit / Debit Card</span>
                          </div>
                        </label>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <label className="card-radio-label mb-3">
                          <input
                            type="radio"
                            name="paymentMethod"
                            id="paymentMethodPaypal"
                            className="card-radio-input"
                          />
                          <div className="card-radio text-center p-3">
                            <i className="bx bxl-paypal front-size-24 mb-2"></i>
                            <span>Paypal</span>
                          </div>
                        </label>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <label className="card-radio-label mb-3">
                          <input
                            type="radio"
                            name="paymentMethod"
                            id="paymentMethodCOD"
                            className="card-radio-input"
                          />
                          <div className="card-radio text-center p-3">
                            <i className="bx bx-money front-size-24 mb-2"></i>
                            <span>Cash on Delivery</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </ol>
            </div>
          </div>

          <div className="row my-4">
            <div className="col">
              <a
                href="ecommerce-products.html"
                className="btn btn-link text-muted"
              >
                <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping
              </a>
            </div>
            <div className="col">
              <div className="text-end mt-2 mt-sm-0">
                <a href="#" className="btn btn-success">
                  <i className="mdi mdi-cart-outline me-1"></i> Proceed
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">{/* Order Summary section */}</div>
      </div>
    </div>
  );
}

export default CheckoutPage;
