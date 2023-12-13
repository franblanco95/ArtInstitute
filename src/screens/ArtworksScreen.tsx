import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import React from 'react';
import {useGetArtworks} from '../hooks/useGetArtworks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ArtworksStackParamList} from '../navigation/ArtworksStack';
import ArtworkCard from '../components/ArtworkCard';
import {ActivityIndicator} from 'react-native';
import Toast from 'react-native-toast-message';

type ArtworksSreenProps = NativeStackScreenProps<
  ArtworksStackParamList,
  'Artworks'
>;

const ArtworksScreen: React.FC<ArtworksSreenProps> = ({navigation}) => {
  const {data, isLoading, refetch} = useGetArtworks();

  return (
    <View style={styles.background}>
      <Text style={styles.screenTitle}>Artworks</Text>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      )}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <ArtworkCard
            item={item}
            onArtworkCardPress={() =>
              navigation.navigate('ArtworksDetails', {item: item})
            }
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      />
      <Toast />
    </View>
  );
};

export default ArtworksScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
