import {translateArtworksResponse} from './artworksTranslators';
import {API_URL, API_URL_IMAGES} from '@env';

export interface ArtworksResponse {
  pagination: Pagination;
  data: Artworks[];
  info: Info;
  config: Config;
}

interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface Artworks {
  id: number;
  title: string;
  thumbnail: Thumbnail | null;
  main_reference_number: string;
  date_display: string;
  place_of_origin: null | string;
  description: string | null;
  dimensions: string;
  artist_title: string;
  image_id: string;
}

interface Info {
  license_text: string;
  license_links: string[];
  version: string;
}

interface Config {
  iiif_url: string;
  website_url: string;
}

interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

export const getArtworks = async (): Promise<Artworks[]> => {
  try {
    const response = await fetch(
      `${API_URL}?fields=id,title,place_of_origin,date_display,main_reference_number,thumbnail,image_id,description,artist_title,dimensions`,
    );
    const resJson = await response.json();
    const processedResponse = translateArtworksResponse(resJson);

    return processedResponse;
  } catch (error) {
    console.error('Error fetching Data', error);
    throw error;
  }
};

export const getArtworksImages = async (
  imageId: string | null,
): Promise<string> => {
  try {
    const response = await fetch(
      `${API_URL_IMAGES}/${imageId}/full/843,/0/default.jpg`,
    );

    return response.url;
  } catch (error) {
    console.error('Error fetching Data', error);
    throw error;
  }
};
