import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ITest } from '../../models/testModel';
import styles from './TestRoom.module.scss';

export const TestRoom = () => {
  const { testId } = useParams();
  const [testData, setTestData] = useState<ITest>();
  const [answersArray, setAnswersArray] = useState<string[] | []>([]);

  useEffect(() => {
    axios
      .get<ITest>(`https://63ba5e9f4482143a3f265124.mockapi.io/api/tests/${testId}`)
      .then(({ data }) => {
        setTestData(data);
      })
      .catch((e) => console.error(e));
  }, []);

  const onClickQuestionOptionHandler = (questionIndex: number, questionOptionIndex: number) => {
    console.log('before', answersArray);
    const newArray: string[] = answersArray.slice();
    if (testData) {
      newArray[questionIndex] =
        testData?.questions[questionIndex].answerOptions[questionOptionIndex];
      setAnswersArray(answersArray.splice(0, answersArray.length, ...newArray));
      console.log('after', answersArray);
    }
    // Стейт ответов почему-то чистится сам по себе. Надо пофиксить.
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.test_header}>
        <div className={styles.test_title}> {testData?.title} </div>
        <div className={styles.test_description}> {testData?.description} </div>
      </div>
      <section className={styles.questions}>
        {testData?.questions.map((question, i) => (
          <div className={styles.question} key={i}>
            <div className={styles.question_header}>
              <h1> {question.title} </h1>
            </div>
            {question.answerOptions.map((answerOption, j) => (
              <div
                className={styles.question_option}
                key={j}
                onClick={() => {
                  onClickQuestionOptionHandler(i, j);
                }}>
                {answerOption}
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
};
