// button

import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, variant, onClick, imageUrl, imageSize }) {

  const buttonClass = `${styles.button} ${styles[variant]}`;

  const imageStyle = {
    width: imageSize || "auto",  // Galite naudoti jūsų pateiktą dydį arba palikti "auto"
    height: imageSize || "auto",
  };

  return (
    <button className={buttonClass} onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt="Logo" className={styles.icon} style={imageStyle} />}
      {text}
    </button>
  );
}






