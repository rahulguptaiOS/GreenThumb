import { StyleSheet } from 'react-native';

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
    detailContainer: {
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
      detailedText: {
        fontSize: 16,
        color: '#666',
      },
      image: {
        width: '100%',
        height: 200, // Adjust height as needed
        borderRadius: 10,
        marginBottom: 20,
      },
      listContainer: {
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
        height: 200, // Set fixed height
        width: '45%',
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

  export default styles