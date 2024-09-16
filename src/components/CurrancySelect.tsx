import React, { useState } from "react";
import styles from "../styles/Components.module.scss";
import arrow from "../assets/arrow.svg";
const languages = ["USD$", "EUR$"];

const CurrancySelect = () => {
  const [select, setSelect] = useState("USD$");
  const [modal, setModal] = useState(false);

  const handleLanguageChange = (language: string) => {
    if (languages.includes(select)) {
    } else {
      languages.push(select);
    }
    setSelect(language);
  };

  return (
    <div className={styles.language}>
      <div
        style={{
          cursor: "pointer",
        }}
        onClick={() => setModal(!modal)}
      >
        {select}{" "}
        <img
          src={arrow}
          style={{
            transform: modal ? "rotate(180deg)" : "none",
          }}
          width={15}
          height={15}
          alt="arrow"
        />
      </div>

      <div
        style={{
          height: modal ? "80px" : "0%",
          opacity: modal ? "1" : "0",
          visibility: modal ? "visible" : "hidden",
          transition: "all .2s ease",
        }}
        className={styles.language_select}
      >
        {languages.map((item: string, index: number) => (
          <div onClick={() => handleLanguageChange(item)}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default CurrancySelect;
