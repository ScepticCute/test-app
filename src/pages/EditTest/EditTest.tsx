import axios from 'axios';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ITest, ITestPostResponse } from '../../models/testModel';
import { addNewQuestion, changeTestData } from '../../redux/slices/editorSlice';
import styles from './EditTest.module.scss';

// const postData: ITest = {
//   title: '123',
//   description: '1233',
//   questions: [
//     {
//       order: 0,
//       title: 'Самый популярный язык программирования?',
//       answerOptions: ['JavaScript', 'Python', 'Pascal', 'EmojiScript'],
//       correntAnswer: 'Python',
//     },
//   ],
// };

export const EditTest: React.FC = () => {
  const dispatch = useAppDispatch();
  const { title, description, questions } = useAppSelector((state) => state.editor.test);

  // INPUTS STATES START
  const [testTitleText, setTestTitleText] = useState('');
  const [testDescriptionText, setTestDescriptionText] = useState('');

  const [questionTitle, setQuestionTitle] = useState('');
  const [questionOptions, setQuestionOptions] = useState('');
  const [questionAnswer, setQuestionAnswer] = useState('');
  // INPUTS STATES END
  // INPUTS ONCHANGE HANDLERS START
  const onChangeTestTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestTitleText(e.target.value);
  };
  const onChangeTestDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestDescriptionText(e.target.value);
  };

  const onChangeQuestionTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionTitle(e.target.value);
  };
  const onChangeQuestionOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionOptions(e.target.value);
  };
  const onChangeQuestionAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionAnswer(e.target.value);
  };
  // INPUTS ONCHANGE HANDLERS END
  // INPUTS SUBMIT HANDLERS START
  const onTestSubmitHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();

    let allIsGood = true;
    if (allIsGood) {
      dispatch(changeTestData([testTitleText, testDescriptionText]));
      console.log(title, description);
    }
  };

  const onQuestionSubmitHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();

    let allIsGood = true;
    if (allIsGood) {
      dispatch(addNewQuestion([questionTitle, questionOptions, questionAnswer]));
      setQuestionTitle('');
      setQuestionOptions('');
      setQuestionAnswer('');
    }
  };

  const onFinishSubmitHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();

    let allIsGood = true;
    if (allIsGood) {
      console.log({ title: title, description: description, questions: questions });
      axios.post<ITestPostResponse>('https://63ba5e9f4482143a3f265124.mockapi.io/api/tests', {
        title: title,
        description: description,
        questions: questions,
      });
    }
  };
  // INPUTS SUBMIT HANDLERS END

  return (
    <main className={styles.wrapper}>
      <div className={styles.left_bar}>
        <div className={styles.forms_wrapper}>
          <form className={styles.test_form}>
            <h1>Тест</h1>
            <input
              type="text"
              placeholder="Придумайте название тесту..."
              value={testTitleText}
              onChange={(e) => {
                onChangeTestTitle(e);
              }}
            />
            <input
              type="text"
              placeholder="Придумайте описание тесту..."
              value={testDescriptionText}
              onChange={(e) => onChangeTestDescription(e)}
            />
            <input type="submit" onClick={(e) => onTestSubmitHandler(e)} />
          </form>

          {
            <form className={styles.question_form}>
              <h1>Вопрос</h1>

              <input
                type="text"
                placeholder="Придумайте название вопросу..."
                value={questionTitle}
                onChange={(e) => onChangeQuestionTitle(e)}
              />
              <input
                className={styles.input_question_options}
                type="text"
                placeholder="Придумайте варианты ответа на вопрос..."
                value={questionOptions}
                onChange={(e) => onChangeQuestionOptions(e)}
              />
              <input
                type="text"
                placeholder="Придумайте ответ на вопрос..."
                value={questionAnswer}
                onChange={(e) => onChangeQuestionAnswer(e)}
              />
              <input type="submit" onClick={(e) => onQuestionSubmitHandler(e)} />
            </form>
          }
        </div>
      </div>
      <div className={styles.right_bar}>
        <div className={styles.test_visualisation}>
          <h1> {title} </h1>
          <p> {description} </p>
          <div className={styles.questions}>
            {questions.map((question, i) => (
              <div className={styles.question} key={i}>
                <h1> {question.title} </h1>
                {question.answerOptions.map((answOption, j) => (
                  <div className={styles.answer_option} key={j}>
                    {j}: {answOption}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <input type="submit" onClick={(e) => onFinishSubmitHandler(e)} />
      </div>
    </main>
  );
};
