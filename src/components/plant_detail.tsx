import { Text, StyleSheet, ScrollView, View, Image } from 'react-native';
import FavoriteButton from './favorite_button';
import styles from './styles';


const PlantDetails: React.FC<PlantDetailsProps> = ({ route }) => {
  const { plant } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.detailContainer}>
      <Image source={{ uri: plant.image_url }} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.title}>{plant.scientific_name}</Text>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Author:</Text>
          <Text style={styles.detailedText}>{plant.author}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Family:</Text>
          <Text style={styles.detailedText}>{plant.family}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Genus:</Text>
          <Text style={styles.detailedText}>{plant.genus}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Year:</Text>
          <Text style={styles.detailedText}>{plant.year}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Bibliography:</Text>
          <Text style={styles.detailedText}>{plant.bibliography}</Text>
        </View>
      </View>
    </ScrollView>
  );
};


export default PlantDetails;