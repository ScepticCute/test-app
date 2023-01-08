import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './TestRoom.module.scss';

export const TestRoom = () => {
  const { testId } = useParams();

  return <main>TestRoom</main>;
};
