import React, { useState } from "react";
import styles from "../styles/Components.module.scss";
import arrow from "../assets/arrow.svg";
const AccardionMobile = () => {
  const [desc, setDesc] = useState(false);

  return (
    <div className={styles.accardion_mobile}>
      <div
        onClick={() => setDesc(!desc)}
        className={styles.accardion_mobile_upper}
      >
        <h2>Description</h2>
        <img src={arrow} alt="arrow" />
      </div>

      <div className={styles.accardion_mobile_down}>
        <div
          style={{
            height: desc ? "0px" : "auto",
            overflow: "hidden",
            transition: "height 0.2s ease",
          }}
        >
          <h2>Overview</h2>
          <p>
            Boldenone has a scientific name 1-dihydrotestosterone. By its
            chemical composition, it’s a synthetic anabolic-androgenic steroid
            (AAS) derived from testosterone. Originally, the drug was
            synthesized for veterinary purposes when scientists wanted to
            improve appetite and affect muscle gain in horses. Boldenone
            Undecylenate (Boldelad) is an esterified form of the medication, in
            which the supplement is usually supplied to consumers. It has its
            trade name Equipoise on the market. The undecylenate ester extends
            its half-life, which makes it suitable for less frequent dosing
            regimens. This feature makes the medication beneficial for both
            veterinary purposes and human use by bodybuilders and athletes.
          </p>
          <p>
            Boldenone’s structural modification determines its peculiarity. The
            drug has a double bond between the first and second carbon atoms in
            the steroid nucleus. This modification leads to a decrease in
            aromatization — the process of converting testosterone into
            estrogen. This feature helps eliminate the risk of such side
            effects as water retention and gynecomastia. As a result of
            Boldenone intake, patients experience increased muscle growth. This
            is why the medication is popular among sports enthusiasts who want
            to achieve muscle building.
          </p>

          <p>
            Boldenone Undecylenate 250 mg has gained high popularity in
            bodybuilding and performance enhancement due to its ability to
            promote steady and sustainable muscle growth. Unlike some other
            anabolic steroids that may cause rapid and often temporary muscle
            mass increases, the regarded bodybuilding supplement produces
            quality muscle tissue over prolonged use. Another advantage includes
            its ease and convenience of use. Since a long-lasting ester is used,
            consumers can make injections less frequently — just 1 or 2 times
            per week. Finally, it features high efficiency while side effects
            are eliminated. Due to these peculiarities, the drug gains the
            reputation of being a versatile and reliable anabolic agent among
            athletes and bodybuilders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccardionMobile;
