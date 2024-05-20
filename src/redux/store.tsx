// store.ts

import { configureStore } from '@reduxjs/toolkit';
import plantsReducer from './reducers/plants'; 
export type RootState = ReturnType<typeof plantsReducer>;
const store = configureStore({
  reducer: plantsReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
