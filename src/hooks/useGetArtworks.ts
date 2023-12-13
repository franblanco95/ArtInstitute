import {useQuery} from '@tanstack/react-query';
import {getArtworks} from '../services/artworks/artworksService';

export const useGetArtworks = () => {
  const {isLoading, data, refetch} = useQuery({
    queryKey: ['artworks'],
    queryFn: () => getArtworks(),
  });

  return {isLoading, data, refetch};
};
