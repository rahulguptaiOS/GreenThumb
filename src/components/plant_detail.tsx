import { Text, StyleSheet, ScrollView, View, Image } from 'react-native';


const PlantDetails: React.FC<PlantDetailsProps> = ({ route }) => {
  const { plant } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: plant.image_url }} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.title}>{plant.scientific_name}</Text>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Author:</Text>
          <Text style={styles.text}>{plant.author}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Family:</Text>
          <Text style={styles.text}>{plant.family}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Genus:</Text>
          <Text style={styles.text}>{plant.genus}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Year:</Text>
          <Text style={styles.text}>{plant.year}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Bibliography:</Text>
          <Text style={styles.text}>{plant.bibliography}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F4F4F4',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailItem: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
  image: {
    width: '100%',
    height: 200, // Adjust height as needed
    borderRadius: 10,
    marginBottom: 20,
  }
});

export default PlantDetails;