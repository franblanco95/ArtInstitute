import {useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Artworks} from '../services/artworks/artworksService';
import {useFocusEffect} from '@react-navigation/native';
import {
  showAddedToFavoritesToast,
  showRemovedFromFavoritesToast,
} from '../helpers/toastHelper';

const useFavorites = (item?: Artworks) => {
  const [favorites, setFavorites] = useState<Artworks[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      const fetchFavorites = async () => {
        try {
          const storedFavorites = await AsyncStorage.getItem('@favorites');
          if (storedFavorites !== null) {
            const parsedFavorites: Artworks[] = JSON.parse(storedFavorites);
            setFavorites(parsedFavorites);

            // Check if the current item is in the favorites list.
            if (item) {
              const existingIndex = parsedFavorites.findIndex(
                favorite => favorite.id === item.id,
              );
              setIsFavorite(existingIndex !== -1);
            }
          }
        } catch (error) {
          console.error('Error retrieving favorites:', error);
        }
      };

      fetchFavorites();
    }, [item]),
  );

  const toggleFavorite = async (artwork: Artworks) => {
    try {
      let updatedFavorites: Artworks[] = [...favorites];
      const existingIndex = updatedFavorites.findIndex(
        favorite => favorite.id === artwork.id,
      );

      if (existingIndex !== -1) {
        updatedFavorites.splice(existingIndex, 1);
        setIsFavorite(false);
        showRemovedFromFavoritesToast(artwork.title);
      } else if (item) {
        updatedFavorites.push(item);
        setIsFavorite(true);
        showAddedToFavoritesToast(artwork.title);
      }

      await AsyncStorage.setItem(
        '@favorites',
        JSON.stringify(updatedFavorites),
      );
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  return {favorites, toggleFavorite, isFavorite};
};

export default useFavorites;
