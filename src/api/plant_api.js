import axios from 'axios';

const baseUrl = 'https://trefle.io/api/v1/plants'; // Trefle API base URL
const apiKey = 'ZMBIMioKTADHfY8sHwSdNRGoKPT_DltUtKPBElKHIoc';

export const fetchPlants = async (searchTerm) => {
   // Replace with your Trefle API key
  const url = `${baseUrl}?token=${apiKey}&page=1`;
  const response = await axios.get(url, { headers: { Authorization: `Token ${apiKey}` } });
  return response.data.data;
};

export const fetchPlantDetails = async (plantId) => {
  const url = `https://trefle.io/api/v1/plants/${plantId}`;
  const response = await axios.get(url, { headers: { Authorization: `Token ${apiKey}` } });
  return response.data;
};
