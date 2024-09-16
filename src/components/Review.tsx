import React from "react";
import styles from "../styles/Components.module.scss";
import avatar from "../assets/avatar.svg";
import star from "../assets/Star.svg";
const Review = () => {
  return (
    <div className={styles.review}>
      <div className={styles.review_avatar}>
        <div className={styles.review_avatar_upper}>
          <img src={avatar} alt="avatar" />
          <div>
            <h2>borys123</h2>
            <span>Silver User</span>
          </div>
        </div>

        <div className={styles.review_avatar_down}>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <span>13 June 2024</span>
        </div>
      </div>
      <div className={styles.review_text}>
        <h4>
          Testosterone is a key hormone crucial for male reproductive tissue
          development and secondary sexual characteristics in both men and
          women. It supports muscle and bone mass, body hair growth, and overall
          health, preventing conditions like osteoporosis.
        </h4>

        <div>
          <span>Advantages:</span>
          <p>Testosterone is a key hormone crucial fo</p>
        </div>
        <div>
          <span>Advantages:</span>
          <p>Testosterone is a key hormone crucial fo</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
