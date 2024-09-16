import React from "react";
import menu from "../assets/darhboard_black.svg";
import favorite from "../assets/Favorite_light_black.svg";
import balance from "../assets/Balance_black.svg";
import user from "../assets/User_light.svg";
import styles from "../styles/Header.module.scss";

const HeaderNavigation = () => {
  return (
    <div className={styles.header_navigation}>
      <div
        style={{
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button>
          <img src={menu} width={32} height={32} alt="menu" />
        </button>
        <button>
          <img src={favorite} width={32} height={32} alt="menu" />
        </button>
        <button>
          <img src={balance} width={32} height={32} alt="menu" />
        </button>
        <button>
          <img src={user} width={32} height={32} alt="menu" />
        </button>
      </div>
    </div>
  );
};

export default HeaderNavigation;
