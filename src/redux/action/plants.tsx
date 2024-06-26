import { ThunkAction } from "redux-thunk";
import { fetchPlants } from "../../api/plant_api";
import { Action } from "redux";

// Define action types
export const FETCH_PLANTS_REQUEST = 'FETCH_PLANTS_REQUEST';
export const FETCH_PLANTS_SUCCESS = 'FETCH_PLANTS_SUCCESS';
export const FETCH_PLANTS_FAILURE = 'FETCH_PLANTS_FAILURE';
export const SAVE_PLANTS = 'SAVE_PLANTS';

// Define TypeScript types for the actions
interface FetchPlantsRequestAction {
  type: typeof FETCH_PLANTS_REQUEST;
}

interface FetchPlantsSuccessAction {
  type: typeof FETCH_PLANTS_SUCCESS;
  payload: Plant[];
}

interface FetchPlantsFailureAction {
  type: typeof FETCH_PLANTS_FAILURE;
  payload: Error;
}

export interface SavePlant {
  type: typeof SAVE_PLANTS;
  payload: Plant;
}

// Union type for all possible actions
export type PlantsActionTypes = 
  | FetchPlantsRequestAction
  | FetchPlantsSuccessAction
  | FetchPlantsFailureAction;

  export type SavePlantsActionTypes = SavePlant;


// Action creators
export const fetchPlantsRequest = (): FetchPlantsRequestAction => ({
  type: FETCH_PLANTS_REQUEST,
});

export const fetchPlantsSuccess = (plants: Plant[]): FetchPlantsSuccessAction => ({
  type: FETCH_PLANTS_SUCCESS,
  payload: plants,
});

export const savePlant = (plant: Plant): SavePlant => ({
  type: SAVE_PLANTS,
  payload: plant,
});

export const fetchPlantsFailure = (error: Error): FetchPlantsFailureAction => ({
  type: FETCH_PLANTS_FAILURE,
  payload: error,
});

export const fetchPlantsThunk = (): ThunkAction<void, PlantsState, unknown, Action<string>> => async dispatch => {
  dispatch(fetchPlantsRequest());
  try {
    const response = await fetchPlants();
    dispatch(fetchPlantsSuccess(response));
  } catch (error: any) {
    dispatch(fetchPlantsFailure(error));
  }
};