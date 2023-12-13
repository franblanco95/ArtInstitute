import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Artworks} from '../services/artworks/artworksService';

interface ArtworkCardProps {
  item: Artworks;
  onArtworkCardPress: () => void;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({
  item,
  onArtworkCardPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.artworkCardContainer}
      onPress={onArtworkCardPress}>
      <ImageBackground
        style={styles.artworkCardImage}
        resizeMode="cover"
        source={{uri: item.thumbnail?.lqip}}>
        <View style={styles.textContainer}>
          <Text style={styles.artworkCardTitle}>{item.title}</Text>
          <Text style={styles.artworkCardText}>{item.artist_title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ArtworkCard;

const styles = StyleSheet.create({
  artworkCardContainer: {
    flex: 1,
    margin: 2,
    backgroundColor: 'green',
  },
  artworkCardImage: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
  },
  artworkCardTitle: {
    color: 'white',
  },
  artworkCardText: {
    fontSize: 10,
    color: 'white',
  },
});
