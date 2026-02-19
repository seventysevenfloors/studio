import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  width?: number;
  height?: number;
  title?: string;
  category?: 'Residential' | 'Commercial' | 'Industrial';
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
