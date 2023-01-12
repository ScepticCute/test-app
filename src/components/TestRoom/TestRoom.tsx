import React from 'react';
import { ITest } from '../../models/testModel';
import styles from './TestRoom.module.scss';

interface IProps {
  testData: ITest | undefined;
  answersArray: string[] | [];
  setAnswersArray: React.Dispatch<React.SetStateAction<[] | string[]>>;
  setCompleteTest: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TestRoom: React.FC<IProps> = ({
  testData,
  answersArray,
  setAnswersArray,
  setCompleteTest,
}) => {
  const onClickQuestionOptionHandler = (questionIndex: number, questionOptionIndex: number) => {
    const newAnswersArray = answersArray.slice();
    //@ts-ignore:
    newAnswersArray[questionIndex] =
      testData?.questions[questionIndex].answerOptions[questionOptionIndex];
    setAnswersArray(newAnswersArray);
  };

  const onClickFinishTest = () => {
    setCompleteTest(true);
  };

  return (
    <>
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
        <button className={styles.finish_test_button} onClick={() => onClickFinishTest()}>
          Завершить тест
        </button>
      </section>
    </>
  );
};
