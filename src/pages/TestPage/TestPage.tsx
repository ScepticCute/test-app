import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TestResults } from '../../components/TestResults/TestResults';
import { TestRoom } from '../../components/TestRoom/TestRoom';
import { ITest } from '../../models/testModel';
import styles from './TestPage.module.scss';

export const Test = () => {
  const { testId } = useParams();
  const [testData, setTestData] = useState<ITest>();
  const [answersArray, setAnswersArray] = useState<string[] | []>([]);
  const [testIsComplete, setCompleteTest] = useState<boolean>(false);

  useEffect(() => {
    console.log('Page rendered');

    axios
      .get<ITest>(`https://63ba5e9f4482143a3f265124.mockapi.io/api/tests/${testId}`)
      .then(({ data }) => {
        setTestData(data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <main className={styles.wrapper}>
      {testIsComplete ? (
        <TestResults
          answersArray={answersArray}
          setCompleteTest={setCompleteTest}
          testData={testData}
        />
      ) : (
        <TestRoom
          testData={testData}
          answersArray={answersArray}
          setAnswersArray={setAnswersArray}
          setCompleteTest={setCompleteTest}
        />
      )}
    </main>
  );
};
