import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

const PlantList = ({ plants, navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.plantItem}
      onPress={() => navigation.navigate('PlantDetails', { plant: item })}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image_url }} style={styles.plantImage} />
      </View>
      <Text style={styles.plantName}>{item.common_name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={plants}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      numColumns={2} // Set the number of columns for the grid
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  plantItem: {
    flex: 1, // Ensure items take up equal space in the grid
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 8,
    marginBottom: 16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // for Android shadow
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
    borderRadius: 40, // Make the container circular
    overflow: 'hidden', // Ensure the image stays within the circular container
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
});

export default PlantList;
