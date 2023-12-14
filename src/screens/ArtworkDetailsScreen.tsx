import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useGetImages} from '../hooks/useGetImages';
import Entypo from 'react-native-vector-icons/Entypo';
import useFavorites from '../hooks/useFavorites';
import FavoriteButton from '../components/FavoriteButton';
import {ArtworksStackParamList} from '../navigation/ArtworksStack';
import Toast from 'react-native-toast-message';

type ArtworkDetailsSreenProps = NativeStackScreenProps<
  ArtworksStackParamList,
  'ArtworksDetails'
>;

const height = Dimensions.get('window').height;

const ArtworkDetailsScreen: React.FC<ArtworkDetailsSreenProps> = ({
  navigation,
  route,
}) => {
  const {item} = route.params;

  const {data, isLoading} = useGetImages(item.image_id);
  const {toggleFavorite, isFavorite} = useFavorites(item);

  return (
    <ScrollView
      contentContainerStyle={styles.mainContainer}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      {isLoading && !data ? (
        <View style={[styles.backgroundImage, styles.loadingContainer]}>
          <ActivityIndicator size="small" color="lightgrey" />
        </View>
      ) : (
        <ImageBackground style={styles.backgroundImage} source={{uri: data}}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" size={32} color={'white'} />
          </Pressable>
        </ImageBackground>
      )}

      <View style={styles.descriptionContainer}>
        <FavoriteButton
          status={isFavorite}
          onButtonPress={() => toggleFavorite(item)}
          overrideStyles={styles.favoriteButton}
        />
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.infoSubText}>Artist</Text>
          <Text style={styles.infoText}>{item.artist_title ?? 'Unknown'}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.infoSubText}>Size</Text>
          <Text style={styles.infoText}>{item.dimensions}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.infoSubText}>Location</Text>
          <Text style={styles.infoText}>
            {item.place_of_origin ?? 'Unknown'}
          </Text>
        </View>

        {item.description && (
          <>
            <View style={styles.divider} />
            <Text style={styles.infoSubText}>Description</Text>
            <Text style={styles.infoText}>{item.description}</Text>
          </>
        )}
        <Toast />
      </View>
    </ScrollView>
  );
};

export default ArtworkDetailsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  backButton: {
    marginTop: 50,
    marginLeft: 20,
  },
  backgroundImage: {
    backgroundColor: 'lightgrey',
    height: height * 0.5,
  },
  loadingContainer: {
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: -20,
    padding: 20,
  },
  favoriteButton: {
    position: 'absolute',
    right: 40,
    top: -30,
  },
  title: {
    width: '75%',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 10,
  },
  infoSubText: {
    fontSize: 17,
    fontWeight: '600',
  },
  infoText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'darkgrey',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});
