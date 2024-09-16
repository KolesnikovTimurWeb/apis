import React from "react";
import styles from "../styles/ProductPage.module.scss";
import star from "../assets/Star.svg";
import RecommendProduct from "./RecommendProduct";
import heart from "../assets/Favorite_light_black.svg";
import balance from "../assets/Balance_black.svg";
import arrow from "../assets/Arrow_right_light.svg";

const effects = [
  "Muscle growth",
  "Protein synthesis",
  "Nitrogen retention",
  "Strength enhancement",
  "Red blood cell production",
  "Appetite stimulation",
];

const Characteristics = [
  "Anabolic steroid",
  "Injections",
  "Sesame oil",
  "250 mg/ml",
  "10ml /vial",
];

const ProductText = () => {
  return (
    <div className={styles.product_text}>
      <div>
        <h3>BOLDELAD</h3>
        <h2>Boldenone Undecylenate 10ml/vial</h2>
        <div className={styles.product_stars}>
          <img src={star} width={20} height={20} alt="star" />
          <img src={star} width={20} height={20} alt="star" />
          <img src={star} width={20} height={20} alt="star" />
          <img src={star} width={20} height={20} alt="star" />
          <img src={star} width={20} height={20} alt="star" />
          <span>24 reviews</span>
        </div>
        <p>
          Boldenone has a scientific name 1-dihydrotestosterone. By its chemical
          composition, it’s a synthetic anabolic-androgenic steroid (AAS)
          derived from testosterone. Originally, the drug was synthesized for
          veterinary purposes when scientists wanted to improve appetite and
          affect muscle gain in horses. Boldenone Undecylenate (Boldelad) is an
          esterified form of the medication.
        </p>

        <div className={styles.product_effect}>
          <h4>Effects</h4>
          <div className={styles.product_effect_div}>
            {effects.map((item: string, index: number) => (
              <div>{item}</div>
            ))}
          </div>
        </div>

        <div className={styles.product_characteristics}>
          <h4>Characteristics</h4>
          <div className={styles.product_characteristics_div}>
            {Characteristics.map((item: string, index: number) => (
              <div>{item}</div>
            ))}
          </div>
        </div>

        <RecommendProduct size="small" />

        <div className={styles.product_price}>
          <div>
            <span>In stock</span>

            <div className={styles.product_price_num}>
              <h6>349€</h6>
              <h5>299€</h5>
            </div>
          </div>

          <div className={styles.product_price_buttons}>
            <button className={styles.product_price_cart}>Add to cart</button>

            <button>
              <img src={heart} width={28} height={28} alt="heart" />
            </button>
            <button>
              <img src={balance} width={28} height={28} alt="balance" />
            </button>
          </div>
        </div>

        <div className={styles.product_faq}>
          <div className={styles.product_faq_div}>
            <h2>
              Delivery <img src={arrow} width={14} height={14} alt="arrow" />
            </h2>
            <p>
              Boldenone has a scientific name 1-dihydrotestosterone. By its
              chemical composition, it’s a synthetic anabolic-androgenic
            </p>
          </div>
        </div>

        <div className={styles.product_faq}>
          <div className={styles.product_faq_div}>
            <h2>
              Payment <img src={arrow} width={14} height={14} alt="arrow" />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductText;
