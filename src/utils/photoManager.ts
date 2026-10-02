/**
 * Profile Photo Manager for Deepika Pamoti's Portfolio.
 * Directly defaults to Deepika's black coat professional photo.
 */

export const DEFAULT_PHOTO = "/deepika_black_coat.jpg";

export const getSavedPhoto = (): string => {
  return DEFAULT_PHOTO;
};

export const useProfilePhoto = () => {
  const photo = DEFAULT_PHOTO;
  return { photo };
};
