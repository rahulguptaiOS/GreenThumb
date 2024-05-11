export const fetchPlantsRequest = () => ({ type: 'FETCH_PLANTS_REQUEST' });
export const fetchPlantsSuccess = (plants) => ({ type: 'FETCH_PLANTS_SUCCESS', payload: plants });
export const fetchPlantsFailure = (error) => ({ type: 'FETCH_PLANTS_FAILURE', payload: error });
