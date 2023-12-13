import {useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Artworks} from '../services/artworks/artworksService';
import {useFocusEffect} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

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

            // Verificar si el item actual está en la lista de favoritos
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
        Toast.show({
          type: 'error',
          text1: artwork.title,
          text2: 'Has been removed from favorites!',
          position: 'top',
        });
      } else if (item) {
        updatedFavorites.push(item);
        setIsFavorite(true);
        Toast.show({
          type: 'success',
          text1: artwork.title,
          text2: 'Has been added to favorites!',
          position: 'top',
        });
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
