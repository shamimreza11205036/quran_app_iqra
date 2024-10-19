import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import QuranScreen from '../screens/QuranScreen';
import SearchScreen from '../screens/SearchScreen';
import HadisScreen from '../screens/HadisScreen';
import { Image, View, Text, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let icon;
            switch (route.name) {
              case 'Home':
                icon = require('../assets/home.png'); // Add your icons here
                break;
              case 'Search':
                icon = require('../assets/search.png');
                break;
              case 'Quran':
                icon = require('../assets/quran.png');
                break;
              case 'Hadis':
                icon = require('../assets/hadis.png');
                break;
            }
            return <Image source={icon} style={{ width: 24, height: 24 }} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Quran" component={QuranScreen} />
        <Tab.Screen name="Hadis" component={HadisScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
