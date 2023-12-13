import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArtworksScreen from '../screens/ArtworksScreen';
import ArtworkDetailsScreen from '../screens/ArtworkDetailsScreen';
import {Artworks} from '../services/artworks/artworksService';

export type ArtworksStackParamList = {
  Artworks: undefined;
  ArtworksDetails: {item: Artworks};
};

const Stack = createNativeStackNavigator<ArtworksStackParamList>();

const ArtworksStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Artworks"
        component={ArtworksScreen}
        options={{headerTitle: 'Art Institute of Chicago'}}
      />
      <Stack.Screen
        name="ArtworksDetails"
        component={ArtworkDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ArtworksStack;
