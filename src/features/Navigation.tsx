import React from "react";
import styles from "../styles/Header.module.scss";
import { Link } from "react-router-dom";
import home from "../assets/Home_light.svg";
const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className="container">
        <div className={styles.navigation_up}>
          <Link to={"/"}>
            <img src={home} width={16} height={16} alt="home" />
          </Link>
          <span>/</span>
          <Link to={"/"}>Products</Link>
          <span>/</span>
          <Link to={"/"}>Peptides</Link>
          <span>/</span>
          <Link to={"/"}>Boldenone Undecylenate 250 mg/ml</Link>
        </div>
        <nav className={styles.navigation_down}>
          <li>
            <Link to={"/"} className={styles.navigation_down_active}>
              Overview
            </Link>
          </li>

          <li>
            <Link to={"/"}>Description</Link>
          </li>

          <li>
            <Link to={"/"}>Characteristics</Link>
          </li>

          <li>
            <Link to={"/"}>Reviews</Link>
          </li>

          <li>
            <Link to={"/"}>How to Use?</Link>
          </li>

          <li>
            <Link to={"/"}>Buy Too</Link>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
