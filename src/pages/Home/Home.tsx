import React from 'react';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Здравствуйте!</h1>
        <h2>На данном сайте вы можете проходить и создавать тесты!</h2>
      </div>
      <section className={styles.tests_table}>
        <div className={styles.test_item}>
          <div className={styles.test_item_header}>
            <h1> Название теста </h1>
            <div className={styles.test_item_header_image_wrap}>
              <img src="#" alt="test image" />
            </div>
          </div>

          <div className={styles.test_item_description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est ea aut minima
            explicabo, fugiat neque.
          </div>
        </div>
      </section>
    </main>
  );
};
