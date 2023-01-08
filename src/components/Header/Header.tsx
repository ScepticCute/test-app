import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <nav>
        <ul>
          <li>
            <Link to="/"> Домашняя страница</Link>
          </li>
          <li>
            <Link to="/about"> О проекте</Link>
          </li>
          <li>
            <Link to="/editor"> Редактор тестов </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
