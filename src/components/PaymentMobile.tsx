import React from "react";
import styles from "../styles/Components.module.scss";
import heart from "../assets/Favorite_light_black.svg";
import balance from "../assets/Balance_black.svg";

import arrow from "../assets/arrow.svg";
const PaymentMobile = () => {
  return (
    <div className={styles.payment_mobile}>
      <div className={styles.payment_mobile_heading}>
        <div className={styles.payment_mobile_price}>
          <div>
            <h4>In stock</h4>
            <h5>349€</h5>
            <h6>
              299€ <span>29.9€/1ml</span>
            </h6>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <button>
              <img src={heart} width={24} height={24} alt="heart" />
              312
            </button>

            <button>
              <img src={balance} width={24} height={24} alt="balance" />
            </button>
          </div>
        </div>

        <button className={styles.payment_mobile_button}>Add to cart</button>
      </div>
      <div className={styles.payment_mobile_accardion}>
        <div>
          <h2>Delivery</h2>
          <img src={arrow} alt="Arrpw" />
        </div>

        <p>
          Boldenone has a scientific name 1-dihydrotestosterone. By its chemical
          composition, it’s a synthetic anabolic-androgenic
        </p>
      </div>

      <div className={styles.payment_mobile_accardion}>
        <div>
          <h2>Payment</h2>
          <img src={arrow} alt="Arrpw" />
        </div>

        <p>
          Boldenone has a scientific name 1-dihydrotestosterone. By its chemical
          composition, it’s a synthetic anabolic-androgenic
        </p>
      </div>
    </div>
  );
};

export default PaymentMobile;
