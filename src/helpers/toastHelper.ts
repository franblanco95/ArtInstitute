import Toast from 'react-native-toast-message';

export const showAddedToFavoritesToast = (title: string) => {
  Toast.show({
    type: 'success',
    text1: title,
    text2: 'Has been added to favorites!',
    position: 'bottom',
  });
};

export const showRemovedFromFavoritesToast = (title: string) => {
  Toast.show({
    type: 'error',
    text1: title,
    text2: 'Has been removed from favorites!',
    position: 'bottom',
  });
};
