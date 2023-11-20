import React from "react";
import styles from "./Label.module.css";

export default function Label({ id, text }) {
  return (
    <label className={styles.label} id={id}>
      {text}
    </label>
  );
}
