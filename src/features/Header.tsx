import React from "react";
import styles from "../styles/Header.module.scss";
import logo from "../assets/logo.svg";
import { Outlet, Link } from "react-router-dom";
import LanguageSelect from "../components/LanguageSelect";
import CurrancySelect from "../components/CurrancySelect";
import instagram from "../assets/social/insta.svg";
import facebook from "../assets/social/facebook.svg";
import telegram from "../assets/social/telegram.svg";
import whatsapp from "../assets/social/whatsapp.svg";
import menu from "../assets/darhboardMenu.svg";
import search from "../assets/Search_light.svg";
import favorite from "../assets/Favorite_light.svg";
import balance from "../assets/Balance.svg";
import shopBag from "../assets/Bag_alt_light.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_main}>
          <div>
            <img src={logo} width={165} height={50} alt="logo" />
          </div>
          <nav>
            <ul className={styles.header_ul}>
              <li>
                <Link to={"/about"}>About us</Link>
              </li>
              <li>
                <Link to={"/delivery"}>Delivery & Payment</Link>
              </li>
              <li>
                <Link to={"/lab-tests"}>Lab Tests</Link>
              </li>
              <li>
                <Link to={"/reviews"}>Reviews</Link>
              </li>
              <li>
                <Link to={"/promos"}>Promos</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/faq"}>FAQ</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.header_select}>
            <LanguageSelect />
            <CurrancySelect />

            <div className={styles.header_select_social}>
              <Link to={"/insta"}>
                <img src={instagram} width={24} height={24} alt="insta" />
              </Link>
              <Link to={"/insta"}>
                <img src={facebook} width={24} height={24} alt="facebook" />
              </Link>
              <Link to={"/insta"}>
                <img src={telegram} width={24} height={24} alt="telegram" />
              </Link>
              <Link to={"/insta"}>
                <img src={whatsapp} width={24} height={24} alt="whatsapp" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header_submain}>
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button className={styles.header_submain_button}>
            Products <img src={menu} width={32} height={32} alt="menu" />
          </button>
          <div className={styles.header_submain_input}>
            <input
              type="text"
              alt="search bar"
              id="search"
              placeholder="Search"
            />
            <label htmlFor="search">
              <img src={search} width={24} height={24} />
            </label>
          </div>
          <div className={styles.header_submain_actions}>
            <div className={styles.header_submain_actions_div}>
              <h2>Hi Borys</h2>
              <span>Your Bonuses:123</span>
            </div>

            <div className={styles.header_submain_actions_bag}>
              <button>
                <img src={favorite} width={32} height={32} alt="favorite" />
              </button>
              <button>
                <img src={balance} width={32} height={32} alt="balance" />
              </button>
              <button>
                <img src={shopBag} width={32} height={32} alt="shopBag" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
