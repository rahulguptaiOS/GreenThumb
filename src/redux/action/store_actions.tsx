// actions/plants.ts

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { storePlant } from "../../async_storage/storage_manager";

export const STORE_PLANT_REQUEST = 'STORE_PLANT_REQUEST';
export const STORE_PLANT_SUCCESS = 'STORE_PLANT_SUCCESS';
export const STORE_PLANT_FAILURE = 'STORE_PLANT_FAILURE';

export const storePlantRequest = () => ({
  type: STORE_PLANT_REQUEST,
});

export const storePlantSuccess = (isStored: boolean) => ({
  type: STORE_PLANT_SUCCESS,
  payload: isStored,
});

export const storePlantFailure = (error: Error) => ({
  type: STORE_PLANT_FAILURE,
  payload: error,
});

export const storePlantThunk = (plant: Plant): ThunkAction<void, PlantsState, unknown, Action<string>> => async dispatch => {
    dispatch(storePlantRequest());
    try {
      storePlant(plant)
      .then(() => dispatch(storePlantSuccess(true))) 
    } catch (error: any) {
      dispatch(storePlantFailure(error));
    }
  };