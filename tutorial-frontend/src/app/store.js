import { configureStore } from '@reduxjs/toolkit';
import tutorialReducer from '../slices/tutorial';

const reducer = {
  tutorials: tutorialReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
