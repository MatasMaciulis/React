import React from "react";
import styles from "./Input.module.css";

export default function Input({
  startIcon,
  endIcon,
  value,
  onChange,
  type,
  isValid,
}) {
  return (
    <>
      <div className={styles.wrapper}>
        {startIcon}

        <input
          className={styles.input}
          type={type}
          onChange={onChange}
          value={value}
        />

        {endIcon}
      </div>

      <div className={styles.validationMessage}>
        <p className={styles.text}>{!isValid && "Not Valid"}</p>
      </div>
    </>
  );
}
