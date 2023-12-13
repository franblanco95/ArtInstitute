import {useQuery} from '@tanstack/react-query';
import {getArtworksImages} from '../services/artworks/artworksService';

export const useGetImages = (id: string) => {
  const {isLoading, data, refetch} = useQuery({
    queryKey: ['images', id],
    queryFn: () => getArtworksImages(id),
  });

  return {isLoading, data, refetch};
};
