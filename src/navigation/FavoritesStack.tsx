import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArtworkDetailsScreen from '../screens/ArtworkDetailsScreen';
import {Artworks} from '../services/artworks/artworksService';
import FavoritesScreen from '../screens/FavoritesScreen';

export type FavoritesStackParamList = {
  Favorites: undefined;
  FavoritesDetails: {item: Artworks};
};

const Stack = createNativeStackNavigator<FavoritesStackParamList>();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{headerTitle: 'Art Institute of Chicago'}}
      />
      <Stack.Screen
        name="FavoritesDetails"
        component={ArtworkDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
