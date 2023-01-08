import { ITest } from './../../models/testModel';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';

// const postNewTest = createAsyncThunk('editor/postNewTest', async (userId: number, thunkAPI) => {
//   const { data } = await axios.post('');
//   return data;
// });

interface IEditor {
  test: ITest;
}

const initialState: IEditor = {
  test: {
    id: Math.random() * 100,
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
  // extraReducers: (builder) => {
  //   builder.addCase(postNewTest.fulfilled, (state, action) => {
  //     state.test.description = 'hi';
  //   });
  // },
});

export const { changeTestData, addNewQuestion } = editorSlice.actions;

export default editorSlice.reducer;
