import React from 'react';
import styles from './page.module.css'; // Adjust the module CSS import as per your setup

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>&copy; Priya Tiwari. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
