import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlantList from '../components/plant_list';
import { fetchPlantsRequest, fetchPlantsSuccess, fetchPlantsFailure } from '../redux/action/plants'; // Import your actions
import { fetchPlants } from '../api/plant_api';
import { Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const plants = useSelector((state) => {
    return state.plants
});
  const loading = useSelector((state) => {
    return state.loading
});
  const error = useSelector((state) => {
    return state.error
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchPlantsRequest());
      try {
        const response = await fetchPlants(); 
        console.log(response);// Replace with your fetch logic
        dispatch(fetchPlantsSuccess(response));
      } catch (error) {
        dispatch(fetchPlantsFailure(error));
      }
    };

    fetchData();
  }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return <PlantList plants={plants} navigation={navigation} />;
};

export default HomeScreen;
