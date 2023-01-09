import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ITest } from '../../models/testModel';
import styles from './Home.module.scss';

export const Home = () => {
  const [tests, setTests] = useState<ITest[]>();

  useEffect(() => {
    axios.get<ITest[]>('https://63ba5e9f4482143a3f265124.mockapi.io/api/tests').then((data) => {
      setTests(data.data);
    });
  }, []);

  return (
    <main className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Lorem ipsum</h1>
        <button>
          <Link to="/editor"> Создать тест</Link>{' '}
        </button>
      </div>
      <section className={styles.tests_table}>
        {tests
          ? tests.map((test, i) => (
              <div className={styles.test_item} key={i}>
                <div className={styles.test_item_header}>
                  <h1> {test.title} </h1>
                  <div className={styles.test_item_header_image_wrap}>
                    <img src="#" alt="test image" />
                  </div>
                </div>
                <div className={styles.test_item_description}>{test.description}</div>

                <div className={styles.test_item_footer}>
                  <div className={styles.test_item_rating}> Рейтинг </div>
                  <Link to={`/test/${test.id}`}>
                    <button className={styles.test_item_start_button}>Пройти тест</button>
                  </Link>
                </div>
              </div>
            ))
          : ''}
      </section>
    </main>
  );
};
