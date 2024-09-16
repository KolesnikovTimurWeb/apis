import React from "react";
import styles from "../styles/Header.module.scss";
import logo from "../assets/small_logo.svg";
import search from "../assets/Search_light.svg";
import bag from "../assets/Bag_alt_light.svg";

const HeaderMobile = () => {
  return (
    <div className={styles.headerMobile}>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.headerMobile_menu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <img src={logo} alt="logo" width={38} height={38} />

        <div className={styles.headerMobile_input}>
          <input type="text" placeholder="Search" id="search" />
          <label htmlFor="search">
            <img src={search} alt="Search" />
          </label>
        </div>

        <img src={bag} alt="shopping Bag" />
      </div>
    </div>
  );
};

export default HeaderMobile;
