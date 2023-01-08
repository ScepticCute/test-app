import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <nav>
        <ul>
          <Link to="/">Домашняя страница</Link>
          <Link to="/about">О проекте</Link>
        </ul>
      </nav>
    </header>
  );
};
