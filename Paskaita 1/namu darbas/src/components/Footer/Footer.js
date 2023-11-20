import React from 'react'
import styles from './Footer.module.css';
export default function Footer() {
    return (
      
        <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Pixweld. Visos teisės saugomos.</p>
      </footer>
    )
}
 