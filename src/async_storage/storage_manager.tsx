import AsyncStorage from '@react-native-async-storage/async-storage';

export const storePlant = async (plant: Plant) => {
    try {
      const existingPlants = await retrievePlants() || [];
      existingPlants.push(plant);
  
      const serializedPlants = JSON.stringify(existingPlants);
      await AsyncStorage.setItem('plants', serializedPlants);
    } catch (error) {
      console.error('Error storing plant:', error);
    }
  };
  
  
  export const retrievePlants = async (): Promise<Plant[]> => {
    try {
      const serializedPlants = await AsyncStorage.getItem('plants');
      if (!serializedPlants) return [];
      return JSON.parse(serializedPlants) as Plant[]; // Cast to Plant[]
    } catch (error) {
      console.error('Error retrieving plants:', error);
      return [];
    }
  };
  