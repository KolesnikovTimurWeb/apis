import React from "react";
import styles from "../styles/Components.module.scss";
import heart from "../assets/Favorite_light_black.svg";
import balance from "../assets/Balance_black.svg";
import star from "../assets/Star.svg";
const ProductCard = () => {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card_img}>
        <img src="https://i.ibb.co/tscChcG/image-287.png" alt="product Image" />

        <div className={styles.product_card_save}>
          <span>SAVE 15%</span>
        </div>

        <div className={styles.product_card_actions}>
          <button>
            <img src={heart} alt="heart" />
          </button>
          <button>
            <img src={balance} alt="balance" />
          </button>
        </div>
      </div>
      <div className={styles.product_card_heading}>
        <h3>BOLDELAD</h3>
        <h2>Boldenone Undecylenate 250 mg/ml</h2>

        <div className={styles.product_card_stars}>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />

          <span>24 reviews</span>
        </div>

        <span>In stock</span>
        <div className={styles.product_card_price}>
          <h4>349€</h4>
          <h5>299€</h5>
        </div>

        <button>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
