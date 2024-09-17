import React from "react";
import styles from "../styles/Footer.module.scss";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.footer_left}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img src={logo} />
            <img src={"https://i.ibb.co/HFBwcP5/Trustpilot-Mini.png"} />
            <img src={"https://i.ibb.co/YZY1wn9/Mask-group.png"} />
          </div>

          <p>
            Stay up to date with news and promotions by signing up for our
            newsletter
          </p>
          <div className={styles.footer_input}>
            <input placeholder="Email" />
          </div>
          <div className={styles.footer_checkbox}>
            <input type="checkbox" id="Privacy" />
            <label htmlFor="Privacy">
              I have read and agree to the Privacy Policy
            </label>
          </div>
        </div>

        <div className={styles.footer_right}>
          <div>
            <h2>About Apis</h2>
            <Link to={"/"}>About Us</Link>
            <Link to={"/"}>Terms of use</Link>
            <Link to={"/"}>Contact Us</Link>
            <Link to={"/"}>Blog</Link>
            <Link to={"/"}>FAQ</Link>
            <Link to={"/"}>Reviews</Link>
          </div>

          <div>
            <h2>Information</h2>
            <Link to={"/"}>Delivery & Payment</Link>
            <Link to={"/"}>Lab Tests</Link>
            <Link to={"/"}>Contact Us</Link>
            <Link to={"/"}>Verify product</Link>
            <Link to={"/"}>Price list</Link>
            <Link to={"/"}>Calculator</Link>
          </div>

          <div>
            <h2>Products</h2>
            <div className={styles.footer_right_div}>
              <Link to={"/"}>All Products</Link>
              <Link to={"/"}>Lab Tests</Link>
              <Link to={"/"}>Bundles</Link>
              <Link to={"/"}>Anabolic hormones</Link>
              <Link to={"/"}>Post Cycle therapy</Link>
              <Link to={"/"}>HGH</Link>

              <Link to={"/"}>All Products</Link>
              <Link to={"/"}>Lab Tests</Link>
              <Link to={"/"}>Bundles</Link>
              <Link to={"/"}>Anabolic hormones</Link>
              <Link to={"/"}>Post Cycle therapy</Link>
              <Link to={"/"}>HGH</Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          marginTop: "50px",
          borderTop: "1px solid #D7D7D7",
          paddingBottom: "5px",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            color: "#1F2736",
            fontWeight: "300",
            marginTop: "10px",
          }}
        >
          © 2024 Medical “Apis” - All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
