import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteButton from './favorite_button';
import { Action } from 'redux';
import { storePlantThunk } from '../redux/action/store_actions';
import { ThunkDispatch } from 'redux-thunk';
import NetInfo from '@react-native-community/netinfo';
import styles from './styles';

const PlantList: React.FC<PlantListProps> = ({ navigation }) => {
  const plant = useSelector((state: { plants: PlantsState }) => state.plants.plants);
  const dispatch = useDispatch<ThunkDispatch<PlantsState, unknown, Action<string>>>();

   const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});

   const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

   const handleFavoritePress = (plant: Plant) => {
     setFavorites((prevFavorites) => ({
       ...prevFavorites,
       [plant.id]: !prevFavorites[plant.id],
     }));
     console.log('Storing plant:', plant);
     dispatch(storePlantThunk(plant));
   };

  const renderItem = ({ item }: { item: Plant }) => (
    <TouchableOpacity
      style={styles.plantItem}
      onPress={() => navigation.navigate('PlantDetails', { plant: item })}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image_url }} style={styles.plantImage} />
      </View>
      <Text style={styles.plantName}>{item.common_name}</Text>
      {
      isConnected ?
      <View style={styles.favoriteButtonContainer}>
        <FavoriteButton
           isFavorite={favorites[item.id] || false}
           onPress={() => handleFavoritePress(item)}
        />
      </View> : null
    }
      
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={plant}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        ListEmptyComponent={<Text>No plants available.</Text>}
      />
    </View>
  );
};



export default PlantList;
