import React, { useState } from "react";
import styles from "../styles/Components.module.scss";
import arrow from "../assets/arrow.svg";
import star from "../assets/Star.svg";
const ReviewsMobile = () => {
  const [desc, setDesc] = useState(false);

  return (
    <div className={styles.accardion_mobile}>
      <div
        onClick={() => setDesc(!desc)}
        className={styles.accardion_mobile_upper}
      >
        <h2>Reviews</h2>
        <img src={arrow} alt="arrow" />
      </div>

      <div
        className={styles.accardion_mobile_down}
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            height: desc ? "0px" : "auto",
            overflow: "hidden",
            transition: "height 0.2s ease",
          }}
        >
          <div className={styles.accardion_mobile_review}>
            <div className={styles.accardion_mobile_review_avatar}>
              <div>
                <img
                  src="https://media.istockphoto.com/id/1337144146/pl/wektor/domy%C5%9Blny-wektor-ikony-profilu-awatara.jpg?s=2048x2048&w=is&k=20&c=ZoOuePFYWjkXEiqU5fC6o1ndyNONTUwuhwbHGGlxNlM="
                  width={24}
                  height={24}
                />
                Name
              </div>

              <div>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />

                <span>13 June 2024</span>
              </div>
            </div>
            <div className={styles.accardion_mobile_review_desc}>
              <p>
                Testosterone is a key hormone crucial for male reproductive
                tissue development and secondary sexual characteristics in both
                men and women. It supports muscle and bone mass, body hair
                growth, and overall health, preventing conditions like
                osteoporosis.
              </p>

              <p>
                <span>Advantages:</span> Testosterone is a key hormone crucial
                fo
              </p>

              <p>
                <span>Disadvantages::</span> Testosterone is a key hormone
                crucial fo
              </p>
            </div>
          </div>

          <div className={styles.accardion_mobile_review}>
            <div className={styles.accardion_mobile_review_avatar}>
              <div>
                <img
                  src="https://media.istockphoto.com/id/1337144146/pl/wektor/domy%C5%9Blny-wektor-ikony-profilu-awatara.jpg?s=2048x2048&w=is&k=20&c=ZoOuePFYWjkXEiqU5fC6o1ndyNONTUwuhwbHGGlxNlM="
                  width={24}
                  height={24}
                />
                Name
              </div>

              <div>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />

                <span>13 June 2024</span>
              </div>
            </div>
            <div className={styles.accardion_mobile_review_desc}>
              <p>
                Testosterone is a key hormone crucial for male reproductive
                tissue development and secondary sexual characteristics in both
                men and women. It supports muscle and bone mass, body hair
                growth, and overall health, preventing conditions like
                osteoporosis.
              </p>

              <p>
                <span>Advantages:</span> Testosterone is a key hormone crucial
                fo
              </p>

              <p>
                <span>Disadvantages::</span> Testosterone is a key hormone
                crucial fo
              </p>
            </div>
          </div>

          <div className={styles.accardion_mobile_review}>
            <div className={styles.accardion_mobile_review_avatar}>
              <div>
                <img
                  src="https://media.istockphoto.com/id/1337144146/pl/wektor/domy%C5%9Blny-wektor-ikony-profilu-awatara.jpg?s=2048x2048&w=is&k=20&c=ZoOuePFYWjkXEiqU5fC6o1ndyNONTUwuhwbHGGlxNlM="
                  width={24}
                  height={24}
                />
                Name
              </div>

              <div>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />

                <span>13 June 2024</span>
              </div>
            </div>
            <div className={styles.accardion_mobile_review_desc}>
              <p>
                Testosterone is a key hormone crucial for male reproductive
                tissue development and secondary sexual characteristics in both
                men and women. It supports muscle and bone mass, body hair
                growth, and overall health, preventing conditions like
                osteoporosis.
              </p>

              <p>
                <span>Advantages:</span> Testosterone is a key hormone crucial
                fo
              </p>

              <p>
                <span>Disadvantages::</span> Testosterone is a key hormone
                crucial fo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsMobile;
