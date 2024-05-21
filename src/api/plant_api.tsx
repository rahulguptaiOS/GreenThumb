import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import { retrievePlants } from '../async_storage/storage_manager';

const baseUrl = 'https://trefle.io/api/v1/plants'; // Trefle API base URL
const apiKey: string = 'ZMBIMioKTADHfY8sHwSdNRGoKPT_DltUtKPBElKHIoc';  // Mark apiKey as string

export const fetchPlants = async (): Promise<Plant[]> => {
  const networkState = await NetInfo.fetch();
  if (!networkState.isConnected) {
    const response = await retrievePlants()
    console.log("response:"+response)
    return response 
  }
  const url = `${baseUrl}?token=${apiKey}&page=1`;  // Handle search term
  const response = await axios.get<ApiResponse>(url, { headers: { Authorization: `Token ${apiKey}` } });
  
  return response.data.data;
};

export const fetchPlantDetails = async (plantId: number): Promise<Plant> => {
  const url = `https://trefle.io/api/v1/plants/${plantId}`;
  const response = await axios.get<Plant>(url, { headers: { Authorization: `Token ${apiKey}` } });
  return response.data;
};
