import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
import CardVerifyScreen from './src/screens/CardVerifyScreen';
import CardsListScreen from './src/screens/CardsListScreen';
import { initDb } from './src/storage/Db';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    initDb();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Verify" component={CardVerifyScreen} />
        <Stack.Screen name="Cards" component={CardsListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
