import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteButton from './favorite_button';
import { Dispatch } from 'redux';
import { SavePlant, SavePlantsActionTypes, savePlant } from '../redux/action/plants';
import { storePlant } from '../async_storage/storage_manager';

const PlantList: React.FC<PlantListProps> = ({ navigation }) => {
  const plant = useSelector((state: { plants: PlantsState }) => state.plants.plants);
  const dispatch = useDispatch<Dispatch<SavePlant>>();
   // Log plants array
   const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});

   const handleFavoritePress = (plant: Plant) => {
     setFavorites((prevFavorites) => ({
       ...prevFavorites,
       [plant.id]: !prevFavorites[plant.id],
     }));
     console.log('Storing plant:', plant);
     dispatch(savePlant(plant));
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
      <View style={styles.favoriteButtonContainer}>
        <FavoriteButton
           isFavorite={favorites[item.id] || false}
           onPress={() => handleFavoritePress(item)}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={plant}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
        numColumns={2}
        ListEmptyComponent={<Text>No plants available.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  plantItem: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 8,
    marginBottom: 16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginBottom: 12,
  },
  plantImage: {
    width: '100%',
    height: '100%',
  },
  plantName: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  favoriteButtonContainer: {
    marginTop: 'auto', // Align the button to the bottom of the item
  },
});


export default PlantList;
