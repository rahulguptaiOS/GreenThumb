import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import styles from './styles';

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


export default FavoriteButton;
