import React from "react";
import styles from "../styles/Components.module.scss";
import star from "../assets/Star.svg";
import heart from "../assets/Favorite_light_black.svg";
import balance from "../assets/Balance_black.svg";

interface RecommendProductProps {
  size: "big" | "small";
}

const RecommendProduct = ({ size = "big" }: RecommendProductProps) => {
  return (
    <div
      style={{
        padding: size === "big" ? "4px" : "12px",
        border: size === "big" ? "" : "1px solid #ECECEC",
      }}
      className={styles.recommend_product}
    >
      <div className={styles.recommend_product_heading}>
        <img
          src="https://i.ibb.co/CPqqh3n/image-268.png"
          width={80}
          height={80}
          alt="image"
        />

        <div>
          <h3
            style={{
              fontSize: size === "small" ? "16px" : "16px",
            }}
          >
            Recommend
          </h3>
          <h2
            style={{
              fontSize: size === "small" ? "18px" : "18px",
              margin: size === "small" ? "0" : "0",
            }}
          >
            Boldenone Undecylenate 250 mg/ml
          </h2>

          <div className={styles.recommend_product_stars}>
            <img src={star} width={12} height={12} alt="star" />
            <img src={star} width={12} height={12} alt="star" />
            <img src={star} width={12} height={12} alt="star" />
            <img src={star} width={12} height={12} alt="star" />
            <img src={star} width={12} height={12} alt="star" />

            <span>24 reviews</span>
          </div>
        </div>
      </div>
      {size === "big" && (
        <div className={styles.recommend_product_actions}>
          <div className={styles.recommend_product_price}>
            <span>349€</span>
            <p>299€</p>
          </div>
          <button className={styles.recommend_product_cart}>Add to cart</button>
          <button className={styles.recommend_product_button}>
            <img src={heart} width={28} height={28} alt="heart" />
          </button>
          <button className={styles.recommend_product_button}>
            <img src={balance} width={28} height={28} alt="balance" />
          </button>
        </div>
      )}

      {size === "small" && (
        <div className={styles.recommend_product_actions}>
          <div
            style={{
              margin: "0",
            }}
            className={styles.recommend_product_price}
          >
            <span>349€</span>
            <p>299€</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendProduct;
