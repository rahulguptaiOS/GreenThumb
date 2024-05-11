/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import HomeScreen from './src/components/home_screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlantDetails from './src/components/plant_detail';

const Stack = createNativeStackNavigator();



function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="PlantDetails" component={PlantDetails} />
        </Stack.Navigator>
    </NavigationContainer>
      
    </Provider>
  );
}


export default App;
