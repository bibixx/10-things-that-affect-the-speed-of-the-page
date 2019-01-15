import React from 'react';

import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p>Images from: <a href="https://unsplash.com">https://unsplash.com</a></p>
    <p>Videos from: <a href="https://videos.pexels.com">https://videos.pexels.com</a></p>
  </footer>
);

export default Footer;
