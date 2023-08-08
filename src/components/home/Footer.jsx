import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid1">
          <div className="box">
            <img src="./assets/logo1.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              blanditiis.
            </p>
            <div className="socialIcon">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-youtube"></i>
            </div>
          </div>
          <div className="box">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contact</li>
              <li>FAQ'S</li>
            </ul>
          </div>
          <div className="box">
            <h2>Recent posts</h2>
            <div className="text">
              <p>3 woocommerece plugins to boost sale</p>
              <span>28 Feb 2023</span>
            </div>
          </div>
          <div className="box">
            <h2>Get in Touch</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              dolorum.
            </p>
            <div className="icon">
              <i className="fa fa-location-dot"></i>
              <label htmlFor="">Location: 27 Division st,Newyork</label>
            </div>
            <div className="icon">
              <i className="fa fa-phone"></i>
              <label htmlFor="">Phone: +349791101</label>
            </div>
            <div className="icon">
              <i className="fa fa-envelope"></i>
              <label htmlFor="/">Email:k.faheem@yahoo.com</label>
            </div>
          </div>
        </div>
        <div className="legal container">
          <p>Copyright @2023. All rights reserved.</p>
          <label htmlFor="">
            Design & Developed by <span>Code With Faheem</span>
          </label>
        </div>
      </footer>
    </>
  );
};

export default Footer;
