import { storePlant } from '../../async_storage/storage_manager';
import { PlantsActionTypes, FETCH_PLANTS_REQUEST, FETCH_PLANTS_SUCCESS, FETCH_PLANTS_FAILURE, SAVE_PLANTS, SavePlantsActionTypes } from '../action/plants';

const initialState: PlantSaveState = {
    isSaved: false,
    error: null,
  };

const storePlantsReducer = (state: PlantSaveState = initialState, action: SavePlantsActionTypes): PlantSaveState => {
    switch (action.type) {
      case SAVE_PLANTS:
        console.log('Plants-:', action.payload);
        storePlant(action.payload)
        return { ...state, isSaved: true };
      default:
        return state;
    }
  };

  export default storePlantsReducer;