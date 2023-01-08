import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

export const Home = () => {
  // axios.get() по мокапи получаю список существующих тестов и с помощью мапа мапю

  return (
    <main className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Lorem ipsum</h1>
        <button>
          {' '}
          <Link to="/editor"> Создать тест</Link>{' '}
        </button>
      </div>
      <section className={styles.tests_table}>
        {[...new Array(6)].map((el) => (
          <div className={styles.test_item}>
            <div className={styles.test_item_header}>
              <h1> Название теста </h1>
              <div className={styles.test_item_header_image_wrap}>
                <img src="#" alt="test image" />
              </div>
            </div>

            <div className={styles.test_item_description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est ea aut
              minima explicabo, fugiat neque.
            </div>

            <div className={styles.test_item_footer}>
              <div className={styles.test_item_rating}>1 2 3 4 5</div>
              <button className={styles.test_item_start_button}>
                <Link to={`/test/:testId`}> Пройти тест </Link>
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
