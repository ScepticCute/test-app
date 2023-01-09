import { ITestPostResponse } from './../../models/testModel';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IEditor {
  test: ITestPostResponse;
}

const initialState: IEditor = {
  test: {
    title: 'Название',
    description: ' Тест на тему... ',
    questions: [],
  },
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    changeTestData: (state, action: PayloadAction<[title: string, description: string]>): void => {
      state.test.title = action.payload[0];
      state.test.description = action.payload[1];
    },
    addNewQuestion: (
      state,
      action: PayloadAction<[answerTitle: string, answerOptions: string, correctAnswer: string]>,
    ) => {
      const answerOptionsArray = action.payload[1].split(',');
      state.test.questions.push({
        order: state.test.questions.length,
        title: action.payload[0],
        answerOptions: answerOptionsArray,
        correntAnswer: action.payload[2],
      });
    },
  },
});

export const { changeTestData, addNewQuestion } = editorSlice.actions;

export default editorSlice.reducer;
