// store.ts

import { configureStore } from '@reduxjs/toolkit';
import plantsReducer from './reducers/plants'; 
import storePlantsReducer from './reducers/store_plant'; 
export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  plants: plantsReducer,
  savingReducer: storePlantsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
