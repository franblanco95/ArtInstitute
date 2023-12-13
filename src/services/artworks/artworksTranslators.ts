import {Artworks, ArtworksResponse} from './artworksService';

export const translateArtworksResponse = (
  response: ArtworksResponse,
): Artworks[] => {
  const formattedResponse = response.data
    .filter(item => item.thumbnail)
    .map(item => {
      if (item.description) {
        item.description = item.description.replace(/<[^>]*>/g, '');
      }
      return item;
    });

  return formattedResponse;
};
