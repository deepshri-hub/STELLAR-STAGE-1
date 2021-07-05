import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import {createStackNavigator} from  "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator() 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown : false }} > </Stack.Navigator>
       <Stack.Screen name = "Home" component = {HomeScreen}></Stack.Screen>
       <Stack.Screen name = "DailyPic" component = {DailyPicScreen}></Stack.Screen>
       <Stack.Screen name = "SpaceCraft" component = {SpaceCraftScreen}></Stack.Screen>
       <Stack.Screen name = "Star" component = {StarScreen}></Stack.Screen>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
