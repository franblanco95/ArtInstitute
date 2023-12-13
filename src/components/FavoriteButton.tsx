import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

interface FavoriteButtonProps {
  status: boolean;
  onButtonPress?: () => void;
  overrideStyles?: ViewStyle;
  disabled?: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  status,
  onButtonPress,
  overrideStyles,
  disabled,
}) => {
  const buttonStyle = {...styles.favoriteButton, ...overrideStyles};

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onButtonPress}
      disabled={disabled}>
      <Entypo name="heart" color={status ? 'red' : 'lightgrey'} size={32} />
    </TouchableOpacity>
  );
};

export default FavoriteButton;

const styles = StyleSheet.create({
  favoriteButton: {
    width: 64,
    height: 64,
    backgroundColor: 'white',
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
