// Define action types
export const FETCH_PLANTS_REQUEST = 'FETCH_PLANTS_REQUEST';
export const FETCH_PLANTS_SUCCESS = 'FETCH_PLANTS_SUCCESS';
export const FETCH_PLANTS_FAILURE = 'FETCH_PLANTS_FAILURE';

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

// Union type for all possible actions
export type PlantsActionTypes = 
  | FetchPlantsRequestAction
  | FetchPlantsSuccessAction
  | FetchPlantsFailureAction;


// Action creators
export const fetchPlantsRequest = (): FetchPlantsRequestAction => ({
  type: FETCH_PLANTS_REQUEST,
});

export const fetchPlantsSuccess = (plants: Plant[]): FetchPlantsSuccessAction => ({
  type: FETCH_PLANTS_SUCCESS,
  payload: plants,
});

export const fetchPlantsFailure = (error: Error): FetchPlantsFailureAction => ({
  type: FETCH_PLANTS_FAILURE,
  payload: error,
});
