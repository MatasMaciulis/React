import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>



      <img
        src="https://img.freepik.com/premium-vector/bird-colorful-gradient-logo-vector-design_343694-1253.jpg"
        alt="Logo"
      />

        <a href="www.google.lt">Home</a>
        <a href="www.google.lt">Apie mus</a>
        <a href="www.google.lt">Paslaugos</a>
        <a href="www.google.lt">Kontaktai</a>


    </header>
  );
}
