import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

const Logo = ({ className }) => (
  <div className={`${styles.logo} ${className}`}>
    <Link to="/" className={styles.navLink}>ImageGuru</Link>
  </div>
);

export default Logo;
