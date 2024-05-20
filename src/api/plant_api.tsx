import axios from 'axios';

const baseUrl = 'https://trefle.io/api/v1/plants'; // Trefle API base URL
const apiKey: string = 'ZMBIMioKTADHfY8sHwSdNRGoKPT_DltUtKPBElKHIoc';  // Mark apiKey as string

export const fetchPlants = async (searchTerm?: string): Promise<Plant[]> => {
  // Replace with your Trefle API key
  const url = `${baseUrl}?token=${apiKey}&page=1`;  // Handle search term
  const response = await axios.get<ApiResponse>(url, { headers: { Authorization: `Token ${apiKey}` } });
  return response.data.data;
};

export const fetchPlantDetails = async (plantId: number): Promise<Plant> => {
  const url = `https://trefle.io/api/v1/plants/${plantId}`;
  const response = await axios.get<Plant>(url, { headers: { Authorization: `Token ${apiKey}` } });
  return response.data;
};
