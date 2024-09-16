import React, { useRef, useState } from "react";
import ProductSlider from "../components/ProductSlider";
import ProductText from "../components/ProductText";
import RecommendProduct from "../components/RecommendProduct";
import arrow from "../assets/Arrow_right_light.svg";
import styles from "../styles/ProductPage.module.scss";
import Review from "../components/Review";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [desc, setDesc] = useState(true);
  const [howToUse, setHowToUse] = useState(true);
  const [showMore, setShowMore] = useState(true);
  const [classification, setClassification] = useState(false);
  const [characteristics, setCharacteristics] = useState(true);
  const [reviews, setReviews] = useState(true);
  return (
    <div>
      <div
        className="container"
        style={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
        }}
      >
        <ProductSlider />
        <ProductText />
      </div>

      <div className="container">
        <RecommendProduct size="big" />
      </div>

      <div className="container">
        <div className={styles.product_accardion}>
          <div
            onClick={() => setDesc(!desc)}
            className={styles.product_accardion_upper}
          >
            <h2>Description</h2>
            <img
              style={{
                transform: desc ? "rotate(0deg)" : "rotate(90deg)",
              }}
              src={arrow}
              width={32}
              height={32}
              alt="arrow"
            />
          </div>
          <div className={styles.product_accardion_down}>
            <div
              style={{
                height: desc ? "0px" : "auto",
                overflow: "hidden",
                transition: "height 0.2s ease",
              }}
            >
              <div className={styles.product_accardion_main}>
                <div>
                  <h2>Overview</h2>

                  <p>
                    Boldenone has a scientific name 1-dihydrotestosterone. By
                    its chemical composition, it’s a synthetic
                    anabolic-androgenic steroid (AAS) derived from testosterone.
                    Originally, the drug was synthesized for veterinary purposes
                    when scientists wanted to improve appetite and affect muscle
                    gain in horses. Boldenone Undecylenate (Boldelad) is an
                    esterified form of the medication, in which the supplement
                    is usually supplied to consumers. It has its trade name
                    Equipoise on the market. The undecylenate ester extends its
                    half-life, which makes it suitable for less frequent dosing
                    regimens. This feature makes the medication beneficial for
                    both veterinary purposes and human use by bodybuilders and
                    athletes.
                  </p>
                  <p>
                    Boldenone’s structural modification determines its
                    peculiarity. The drug has a double bond between the first
                    and second carbon atoms in the steroid nucleus. This
                    modification leads to a decrease in aromatization — the
                    process of converting testosterone into estrogen. This
                    feature helps eliminate the risk of such side effects as
                    water retention and gynecomastia. As a result of Boldenone
                    intake, patients experience increased muscle growth. This is
                    why the medication is popular among sports enthusiasts who
                    want to achieve muscle building.
                  </p>
                </div>
                <img
                  src="https://i.ibb.co/xH1xdcw/image-269.png"
                  alt="mainImage"
                />
              </div>
              <p>
                Boldenone Undecylenate 250 mg has gained high popularity in
                bodybuilding and performance enhancement due to its ability to
                promote steady and sustainable muscle growth. Unlike some other
                anabolic steroids that may cause rapid and often temporary
                muscle mass increases, the regarded bodybuilding supplement
                produces quality muscle tissue over prolonged use. Another
                advantage includes its ease and convenience of use. Since a
                long-lasting ester is used, consumers can make injections less
                frequently — just 1 or 2 times per week. Finally, it features
                high efficiency while side effects are eliminated. Due to these
                peculiarities, the drug gains the reputation of being a
                versatile and reliable anabolic agent among athletes and
                bodybuilders.
              </p>
              <div
                style={{
                  display: showMore ? "none" : "block",
                }}
                className={styles.product_accardion_showMore}
              >
                <h2>Dosage</h2>
                <p>
                  Men should take between 200–600 mg per week. Advanced
                  consumers can increase the dosage to 800 mg. Professional
                  bodybuilders can even reach a dosage of 800–1200 mg per week.
                  Women take lower dosages that range from 50 to 100 mg per
                  week. Since Boldenone is a long half-life medication, it’s
                  enough to take it just once or twice a week. Men should take
                  between 200–600 mg per week. Advanced consumers can increase
                  the dosage to 800 mg. Professional bodybuilders can even reach
                  a dosage of 800–1200 mg per week. Women take lower dosages
                  that range from 50 to 100 mg per week. Since Boldenone is a
                  long half-life medication, it’s enough to take it just once or
                  twice a week.
                </p>
                <img
                  src="https://i.ibb.co/qxTX3Nm/image-290.png"
                  alt="desage Img"
                />
              </div>

              <div
                style={{
                  display: showMore ? "block" : "none",
                }}
                className={styles.product_accardion_opened}
              >
                <h2>Dosage</h2>
                <p>
                  Men should take between 200–600 mg per week. Advanced
                  consumers can increase the dosage to 800 mg. Professional
                  bodybuilders can even reach a dosage of 800–1200 mg per week.
                  Women take lower dosages that range from 50 to 100 mg per
                  week. Since Boldenone is a long half-life medication, it’s
                  enough to take it just once or twice a week. Men should take
                  between 200–600 mg per week. Advanced consumers can increase
                  the dosage to 800 mg. Professional bodybuilders can even reach
                  a dosage of 800–1200 mg per week. Women take lower dosages
                  that range from 50 to 100 mg per week. Since Boldenone is a
                  long half-life medication, it’s enough to take it just once or
                  twice a week.
                </p>
                <img
                  src="https://i.ibb.co/qxTX3Nm/image-290.png"
                  alt="desage Img"
                />

                <h2>Intake</h2>
                <p>
                  Boldenone is an injectable supplement. Users make
                  intramuscular injections to deliver components to cells. Note
                  that the product includes an undecylenate ester that provides
                  a long half-life.
                </p>
                <h2>Cycle duration</h2>
                <p>
                  An average cycle lasts <span>between 6 to 14 weeks</span>.
                  Note that prolonged use increases the risk of side effects.
                </p>

                <div className={styles.product_accardion_split}>
                  <div>
                    <h2>Monitoring</h2>
                    <p>
                      Consumers should pass regular blood tests to control their
                      health conditions. Hematocrit levels, liver enzymes, lipid
                      profiles, and hormone levels deserve monitoring since they
                      reflect vital information about the body’s state. Passing
                      these tests helps physicians detect adverse body effects
                      at early stages and react to them promptly. It’s
                      recommended to pass these tests every
                      <span>4–6 weeks</span> during the cycle.
                    </p>
                    <p>
                      Hematocrit levels. Ideal values should be below
                      <span>50%</span> for both men and women.
                    </p>
                    <p>
                      Liver enzymes. Physicians pay attention to ALT and AST
                      levels. Normal value ranges are typically
                      <span>
                        7–56 units per liter for ALT and 10–40 units per liter
                        for AST.
                      </span>
                    </p>

                    <p>
                      Lipid profiles. The indicator of LDL cholesterol should be
                      below <span>100 mg/dL</span> for both men and women. For
                      HDL cholesterol, optimal values are above
                      <span>40 mg/dL</span> for men and <span>50 mg/dL</span>
                      for women
                    </p>
                  </div>
                  <img
                    src="https://i.ibb.co/vY3yv5W/image-291.png"
                    alt="monitoring Photo"
                  />
                </div>

                <h2>Hormone levels:</h2>
                <p>
                  <span>Men. </span>The target total testosterone levels can
                  vary, but for men who undergo anabolic steroid cycles, values
                  should range between 600–1500 ng/dL. Estradiol levels should
                  be between 10–40 pg/mL.
                </p>
                <p>
                  <span>Women.</span> Testosterone levels should stay within
                  15–100 ng/dL. Estradiol levels should be between 20–200 pg/mL,
                  depending on the menstrual cycle phase.
                </p>

                <h2>Side Effects</h2>
                <ul>
                  <li>
                    Acne, increased body hair, and potential for male pattern
                    baldness.
                  </li>
                  <li>
                    Though the supplement is less aromatizable than
                    testosterone, it can still lead to gynecomastia and water
                    retention in some individuals.
                  </li>
                  <li>
                    Alterations in cholesterol levels, including decreased HDL
                    and increased LDL, which pose cardiovascular risks.
                  </li>
                  <li>
                    Low hepatotoxicity, but users should monitor liver function
                  </li>
                  <li>
                    For women, the observation of male secondary sexual
                    characteristics, such as deepening of the voice and
                    increased body hair.
                  </li>
                  <li>
                    Suppression of natural testosterone production. Physicians
                    recommend passing post-cycle therapy (PCT) endogenous
                    testosterone levels.
                  </li>
                </ul>

                <div className={styles.product_accardion_split}>
                  <div>
                    <h2>Storage</h2>
                    <p>
                      Store Boldenone in a cool, dry place away from direct
                      sunlight to preserve its stability and efficacy.
                    </p>
                    <p>
                      Keep vials at a controlled room temperature ranging
                      between 20 to 25 °C (68 to 77 °F).
                    </p>
                    <p>
                      Ensure that the vials are securely closed to prevent
                      contamination and degradation of the steroid.
                    </p>
                  </div>
                  <img
                    src="https://i.ibb.co/vY3yv5W/image-291.png"
                    alt="monitoring Photo"
                  />
                </div>
              </div>
              <button
                style={{
                  display: "flex",
                  maxWidth: "300px",
                  width: "100%",
                  justifyContent: "center",
                  padding: "12px 32px",
                  color: showMore ? "#000" : "#FFF",
                  fontSize: "14px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  border: "1px solid #1F2736",
                  background: showMore ? "transparent" : "#1F2736",
                  margin: "10px auto",
                }}
                onClick={() => setShowMore(!showMore)}
              >
                Show more
              </button>
            </div>
          </div>
        </div>

        <div className={styles.product_accardion}>
          <div
            onClick={() => setHowToUse(!howToUse)}
            className={styles.product_accardion_upper}
          >
            <h2>How to use?</h2>
            <img
              style={{
                transform: howToUse ? "rotate(0deg)" : "rotate(90deg)",
              }}
              src={arrow}
              width={32}
              height={32}
              alt="arrow"
            />
          </div>
          <div className={styles.product_accardion_down}>
            <div
              style={{
                height: howToUse ? "0px" : "auto",
                overflow: "hidden",
                transition: "height 0.2s ease",
              }}
            >
              <div className={styles.product_accardion_main}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, asperiores sed. Ullam molestias corrupti blanditiis
                voluptate, quibusdam eligendi earum minus. Doloremque quam
                dolorum amet, unde odit eum minima saepe ipsam.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.product_accardion}>
          <div
            onClick={() => setCharacteristics(!characteristics)}
            className={styles.product_accardion_upper}
          >
            <h2>Characteristics</h2>
            <img
              style={{
                transform: characteristics ? "rotate(0deg)" : "rotate(90deg)",
              }}
              src={arrow}
              width={32}
              height={32}
              alt="arrow"
            />
          </div>
          <div className={styles.product_accardion_down}>
            <div
              style={{
                height: characteristics ? "0px" : "auto",
                overflow: "hidden",
                transition: "height 0.2s ease",
              }}
            >
              <div className={styles.product_accardion_characteristics}>
                <div>
                  <p>Classification</p>
                  <span></span>
                  <h2>Anabolic steroid (testosterone derivative)</h2>
                </div>

                <div>
                  <p>Active substance</p>
                  <span></span>
                  <h2>Boldenone Undecylenate</h2>
                </div>

                <div>
                  <p>Concentration</p>
                  <span></span>
                  <h2>250 mg/ml</h2>
                </div>

                <div>
                  <p>Form</p>
                  <span></span>
                  <h2>Injections</h2>
                </div>

                <div>
                  <p>Carrier oil (in steroids)</p>
                  <span></span>
                  <h2>Sesame oil</h2>
                </div>

                <div>
                  <p>Number of mg/ml</p>
                  <span></span>
                  <h2>10 ml vial</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.product_accardion}>
          <div
            onClick={() => setReviews(!reviews)}
            className={styles.product_accardion_upper_reviews}
          >
            <h2>Reviews</h2>
            <div>
              <img
                style={{
                  transform: reviews ? "rotate(0deg)" : "rotate(90deg)",
                }}
                src={arrow}
                width={32}
                height={32}
                alt="arrow"
              />
            </div>
          </div>
          <div
            style={{
              maxWidth: "1200px",
            }}
            className={styles.product_accardion_down}
          >
            <div
              style={{
                height: reviews ? "0px" : "auto",
                overflow: "hidden",
                transition: "height 0.2s ease",
              }}
            >
              <div className={styles.product_accardion_review}>
                <Review />
                <Review />
                <Review />
                <Review />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2
          style={{
            margin: "20px 0",
          }}
        >
          We also recommend
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
