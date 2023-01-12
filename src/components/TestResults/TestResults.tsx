import React from 'react';
import { ITest } from '../../models/testModel';
import styles from './TestResults.module.scss';

interface IProps {
  answersArray: string[];
  setCompleteTest: React.Dispatch<React.SetStateAction<boolean>>;
  testData: ITest | undefined;
}

export const TestResults: React.FC<IProps> = ({ answersArray, setCompleteTest, testData }) => {
  return (
    <section className={styles.wrapper}>
      {answersArray.map((el, i) => (
        <div className={styles.answer} key={i}>
          <h1 className={styles.answer_title}>{i + 1} вопрос:</h1>
          {!!testData && testData.questions[i].correntAnswer === el ? (
            <p className={styles.correct_answer_description}>{el}</p>
          ) : (
            <p className={styles.incorrect_answer_description}>
              Это не {el}, а {testData?.questions[i].correntAnswer}
            </p>
          )}
        </div>
      ))}
      <button className={styles.back_to_test_button} onClick={() => setCompleteTest(false)}>
        Вернуться к тесту
      </button>
    </section>
  );
};
