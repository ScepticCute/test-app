import editor from './slices/editorSlice';
import { configureStore } from '@reduxjs/toolkit';
// ...

export const store = configureStore({
  reducer: {
    editor,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
