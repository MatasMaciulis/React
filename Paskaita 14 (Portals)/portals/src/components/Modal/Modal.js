import React from "react";

// kurti modalinius langus
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

// nurodom, kokias funkcijas perduodam Modal komponentui
export default function Modal({ open, request, children, title, onClose }) {
  //  nurodome kad modalai būtų pradžioje paslėpti
  if (!open) {
    return null;
  }

  // apskliadžiame su createPortal () html dali
  return createPortal(
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <h4>{title}</h4>
        </div>

        {/* isidedame aprašytus children elementus is App.js failo */}
        {children}

        <div className={styles.footerContainer}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>,
    // nurodom kur įterpiamas portalas (modalinis langas) t.y į body apačia
    document.body
  );
}
