import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlantList from '../components/plant_list';
import { fetchPlantsThunk } from '../redux/action/plants';
import { Text, View } from 'react-native';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface HomeScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch<ThunkDispatch<PlantsState, undefined, Action>>();
  const loading = useSelector((state: PlantsState) => state.loading);
  const error = useSelector((state: PlantsState) => state.error);

  useEffect(() => {
    dispatch(fetchPlantsThunk());
  }, [dispatch]);


  return <View style = {{
    flex: 1,
    flexDirection: 'column'
  }}>
    {loading ? (
      <Text>Loading...</Text>
    ) : error ? (
      <Text>Error: {error.message}</Text>
    ) : (
      <PlantList navigation={navigation} />
    )}
  </View>
};

export default HomeScreen;
