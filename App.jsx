import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Image} from 'react-native';
import React from 'react';
import HomeScreen from './src/screen/HomeScreen';
import ParkingSpot from './src/screen/ParkingSpot';
import MapScreen from './src/screen/MapScreen';
import {mainStyles} from './src/asset/style/mainStyle';
import DetailScreen from './src/screen/DetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

let logoImg = require('./src/asset/images/quickpark.png');

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <Text style={mainStyles.highlight}>QuickPark</Text>
            ),
            headerRight: () => (
              <Image style={mainStyles.logoImg} source={logoImg} />
            ),
          }}
        />
        <Stack.Screen
          name="spot"
          component={ParkingSpot}
          options={{title: 'Parking Spots'}}
        />
        <Stack.Screen
          name="detail"
          component={DetailScreen}
          options={{title: 'Parking Details'}}
        />
        <Stack.Screen
          name="map"
          component={MapScreen}
          options={{title: 'Parking Spot'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
