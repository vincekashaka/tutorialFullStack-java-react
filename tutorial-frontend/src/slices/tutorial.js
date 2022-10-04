import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TutorialService from './TutorialService';

const initialState = [];

export const createTutorial = createAsyncThunk(
  'tutorials/create',
  async ({ title, description }) => {
    const res = await TutorialService.create({ title, description });
    return res.data;
  }
);

export const retrieveTutorials = createAsyncThunk(
  'tutorials/retrieve',
  async () => {
    const res = await TutorialService.getAll();
    return res.data;
  }
);

const tutorialSlice = createSlice({
  name: 'tutorial',
  initialState,
  extraReducers: {
    [createTutorial.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveTutorials.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = tutorialSlice;
export default reducer;
