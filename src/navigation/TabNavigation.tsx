import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ArtworksStack, {ArtworksStackParamList} from './ArtworksStack';
import FavoritesStack, {FavoritesStackParamList} from './FavoritesStack';

export type RootTabParamList = {
  TabHome: ArtworksStackParamList;
  TabFavorites: FavoritesStackParamList;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function TabNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="TabHome"
          component={ArtworksStack}
          options={{
            title: 'Artworks',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="TabFavorites"
          component={FavoritesStack}
          options={{
            title: 'Favorites',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;
