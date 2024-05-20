import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlantList from '../components/plant_list';
import { fetchPlantsRequest, fetchPlantsSuccess, fetchPlantsFailure } from '../redux/action/plants';
import { fetchPlants } from '../api/plant_api';
import { Text } from 'react-native';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface HomeScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch<ThunkDispatch<PlantsState, undefined, Action>>();

  const plants = useSelector((state: PlantsState) => state.plants);
  const loading = useSelector((state: PlantsState) => state.loading);
  const error = useSelector((state: PlantsState) => state.error);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchPlantsRequest());
      try {
        const response = await fetchPlants();
        console.log(response); // Replace with your fetch logic
        dispatch(fetchPlantsSuccess(response));
      } catch (error: any) {
        dispatch(fetchPlantsFailure(error));
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return <PlantList plants={plants} navigation={navigation} />;
};

export default HomeScreen;
