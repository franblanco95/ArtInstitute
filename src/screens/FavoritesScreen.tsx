import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import useFavorites from '../hooks/useFavorites';
import FavoriteButton from '../components/FavoriteButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ArtworkCard from '../components/ArtworkCard';
import {FavoritesStackParamList} from '../navigation/FavoritesStack';

type FavoritesSreenProps = NativeStackScreenProps<
  FavoritesStackParamList,
  'Favorites'
>;

const FavoritesScreen: React.FC<FavoritesSreenProps> = ({navigation}) => {
  const {favorites} = useFavorites();

  return (
    <View style={styles.mainContainer}>
      {favorites.length === 0 ? (
        <View style={styles.container}>
          <FavoriteButton status={false} disabled />
          <Text style={styles.favoritesMissingText}>
            Oops! You don't have any favorites yet.
          </Text>
          <TouchableOpacity
            style={styles.navigateButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.navigateText}>Go to Artworks!</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.favoriteContainer}>
          <Text style={styles.screenTitle}>Favorites</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={favorites}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            renderItem={({item}) => (
              <ArtworkCard
                item={item}
                onArtworkCardPress={() =>
                  navigation.navigate('FavoritesDetails', {item: item})
                }
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoritesMissingText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'darkgrey',
    marginVertical: 30,
  },
  navigateButton: {
    marginVertical: 20,
    backgroundColor: '#00609C',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  navigateText: {
    color: 'white',
    fontWeight: 'bold',
  },
  favoriteContainer: {
    padding: 10,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
