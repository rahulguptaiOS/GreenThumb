import { storePlant } from '../../async_storage/storage_manager';
import { PlantsActionTypes, FETCH_PLANTS_REQUEST, FETCH_PLANTS_SUCCESS, FETCH_PLANTS_FAILURE, SAVE_PLANTS } from '../action/plants';

const initialState: PlantsState = {
  plants: [],
  loading: false,
  error: null,
};

const plantsReducer = (state: PlantsState = initialState, action: PlantsActionTypes): PlantsState => {
  switch (action.type) {
    case FETCH_PLANTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PLANTS_SUCCESS:
      return { ...state, loading: false, plants: action.payload };
    case FETCH_PLANTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default plantsReducer;

