import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onPress: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{isFavorite ? 'Remove Favorites' : 'Add to Favorites'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginTop: 10,
    height: 40,
    borderRadius: 8,
  },
  text: {
    color: '#333',
    fontWeight: 'bold',
  },
});

export default FavoriteButton;
