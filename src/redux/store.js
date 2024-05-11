import { createStore } from 'redux';
import plantsReducer from './reducers/plants'; // Import your rootReducer

const store = createStore(plantsReducer);

export default store;
