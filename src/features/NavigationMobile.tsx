import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import styles from "../styles/Header.module.scss";

const NavigationMobile = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "8px 0",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
        }}
        className="container"
      >
        <img
          src={arrow}
          style={{
            transform: "rotate(90deg)",
          }}
          alt="arrow"
        />
        <Link
          style={{
            fontSize: "14px",
            color: "#626262",
          }}
          to={"/"}
        >
          Boldenone Undecylenate 10ml/vial
        </Link>
      </div>

      <div className="container">
        <div className={styles.navigationMobile}>
          <a href="/#overview">Overview</a>
          <a href="/#overview">Description</a>
          <a href="/#overview">Characteristics</a>
          <a href="/#overview">Reviews</a>
          <a href="/#overview">Characteristics</a>

          <a href="/#overview">Characteristics</a>
        </div>
      </div>
    </div>
  );
};

export default NavigationMobile;
