import React from "react";

function Footer() {
  return (
    <div style={{ width: "97.8%", margin: "auto" }}>
      <footer className="footer-one">
        <div className="footer-one-container">
          <div className="footer-one-section footer-one-1">
            <h4 className="footer-one-title">Customer Service</h4>
            <div className="help-circle-container">
              <ion-icon name="help-circle"></ion-icon>
              <p>Get Help Or Contact Us</p>
            </div>
          </div>
          <div className="footer-one-section footer-one-2">
            <h4 className="footer-one-title">Find a Warehouse</h4>
            <div className="findAWarehouse">
              <input type="text" placeholder="Enter your email" />
              <ion-icon name="search-outline"></ion-icon>
            </div>
          </div>
          <div className="footer-one-section footer-one-3">
            <h4 className="footer-one-title">Get Email Offers</h4>
            <div className="emailOffers">
              <div className="emailOffers1">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="emailOffers2">
                <p>Go</p>
              </div>
            </div>
          </div>
          <div className="footer-one-section footer-one-4">
            <h4 className="footer-one-title">Follow Us</h4>
            <div className="socialMediaIcons">
              <ion-icon
                name="logo-facebook"
                className="facebookIcon"
              ></ion-icon>
              <ion-icon
                name="logo-pinterest"
                className="pinterestIcon"
              ></ion-icon>
              <ion-icon
                name="logo-instagram"
                className="instagramIcon"
              ></ion-icon>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-one-hidden">
        <div className="footer-one-container-hidden">
          <h4 className="footer-one-title-hidden">Get Email Offers</h4>
          <div className="footer-one-input-hidden">
            <div className="footer-one-input1-hidden">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="footer-one-input2-hidden">
              <p>Go</p>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-two">
        <section className="footer-two-container">
          <div className="footer-two-section footer-two-section1">
            <h4 className="footer-two-title">About Us</h4>
            <ul className="footer-two-items">
              <li className="footer-two-item">Charitable Contributions</li>
              <li className="footer-two-item">Company Information</li>
              <li className="footer-two-item">Sustainability Commitment</li>
              <li className="footer-two-item">Investor Relations</li>
              <li className="footer-two-item">Jobs</li>
              <li className="footer-two-item">Kirkland Signature</li>
              <li className="footer-two-item">Logo and Media Requests</li>
              <li className="footer-two-item">Product Videos</li>
              <li className="footer-two-item">The Costco Connection</li>
              <li className="footer-two-item">Quick & Easy Recipe Videos</li>
              <li className="footer-two-item">Costco Blog</li>
              <li className="footer-two-item">Employee Site</li>
            </ul>
          </div>
          <div className="footer-two-section">
            <h4 className="footer-two-title">Membership</h4>
            <ul className="footer-two-items">
              <li className="footer-two-item">Join Now</li>
              <li className="footer-two-item">Member Privileges</li>
              <li className="footer-two-item">Executive Membership Terms</li>
              <li className="footer-two-item">Sign In or Register</li>
              <li className="footer-two-item">Credit Card</li>
            </ul>
            <br />
            <h4 className="footer-two-title">Vendors & Suppliers</h4>
            <ul className="footer-two-items">
              <li className="footer-two-item">Supply Chain Disclosure</li>
              <li className="footer-two-item">Ethics Hotline for Suppliers</li>
              <li className="footer-two-item">Supplier Diversity</li>
            </ul>
          </div>
          <div className="footer-two-section">
            <h4 className="footer-two-title">Customer Service</h4>
            <ul className="footer-two-items">
              <li className="footer-two-item">Costco Shop Card Balance</li>
              <li className="footer-two-item">Order By Item Number</li>
              <li className="footer-two-item">
                Concierge Tech Support & Warranty
              </li>
              <li className="footer-two-item">
                Export & Domestic Volume Sales
              </li>
              <li className="footer-two-item">Order Status</li>
              <li className="footer-two-item">Preventing Fraud</li>
              <li className="footer-two-item">Shipping</li>
              <li className="footer-two-item">Rebates</li>
              <li className="footer-two-item">Recalls & Product Notices</li>
              <li className="footer-two-item">Returns and Exchanges</li>
              <li className="footer-two-item">Returns Policy</li>
              <li className="footer-two-item">Accessibility </li>
            </ul>
          </div>
          <div className="footer-two-section">
            <h4 className="footer-two-title">Locations & Services</h4>
            <ul className="footer-two-items">
              <li className="footer-two-item">Find a Warehouse</li>
              <li className="footer-two-item">Locations Coming Soon</li>
              <li className="footer-two-item">Hours and Holiday Closures</li>
              <li className="footer-two-item">Gasoline</li>
              <li className="footer-two-item">Hearing Aid Center</li>
              <li className="footer-two-item">Optical</li>
              <li className="footer-two-item">Special Events</li>
              <li className="footer-two-item">CostcoGrocery</li>
              <li className="footer-two-item">Grocery by Instacart</li>
            </ul>
          </div>
        </section>
      </footer>

      <footer className="footer-two-mobile"></footer>

      <footer className="footer-three">
        <div className="footer-three-container">
          <ul className="footer-three-items">
            <li className="footer-three-item">Site</li>
            <li className="footer-three-item">Map</li>
            <li className="footer-three-item">Terms and Conditions</li>
            <li className="footer-three-item">Your Privacy Right</li>
            <li className="footer-three-item">CA Notice</li>
            <li className="footer-three-item">Cookie Settings</li>
            <li className="footer-three-item">
              Do Not Sell My Personal Information
            </li>
            <li className="footer-three-item">Feedback</li>
          </ul>
          <p className="footer-three-text">
            © 1998 — 2021 Costco Wholesale Corporation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
