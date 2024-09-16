import React from "react";
import styles from "../styles/Components.module.scss";
import star from "../assets/Star.svg";
import PaymentMobile from "./PaymentMobile";
import AccardionMobile from "./AccardionMobile";
import ReviewsMobile from "./ReviewsMobile";

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

const ProductCardMobile = () => {
  return (
    <div className={styles.product_card_mobile}>
      <div className={styles.product_card_mobile_img}>
        <img
          src="https://i.ibb.co/ByfkvQn/Large-Photo-1.png"
          alt="Product Image"
        />

        <div className={styles.product_card_mobile_save}>
          <span>Save 15%</span>
        </div>
      </div>
      <div className={styles.product_card_mobile_heading}>
        <div className={styles.product_card_mobile_stars}>
          <h3>BOLDELAD</h3>

          <div>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />

            <span>24 reviews</span>
          </div>
        </div>
        <div className={styles.product_card_mobile_title}>
          <h2>Boldenone Undecylenate 10ml/vial</h2>
          <p>
            Boldenone has a scientific name 1-dihydrotestosterone. By its
            chemical composition, it’s a synthetic anabolic-androgenic steroid
            (AAS) derived from testosterone. Originally, the drug was
            synthesized for veterinary purposes when scientists wanted to
            improve appetite and affect muscle gain in horses. Boldenone
            Undecylenate (Boldelad) is an esterified form of the medication.
          </p>

          <div className={styles.product_card_mobile_effect}>
            <h4>Effects</h4>
            <div className={styles.product_card_mobile_effect_div}>
              {effects.map((item: string, index: number) => (
                <div>{item}</div>
              ))}
            </div>
          </div>

          <div className={styles.product_card_mobile_characteristics}>
            <h4>Characteristics</h4>
            <div className={styles.product_card_mobile_characteristics_div}>
              {effects.map((item: string, index: number) => (
                <div>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <PaymentMobile />
      <AccardionMobile />
      <ReviewsMobile /> 
    </div>
  );
};

export default ProductCardMobile;
