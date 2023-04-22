export const parseStaticUrlForVite = (imageName) =>
  new URL(`/src/assets/img/${imageName}`, import.meta.url).href;
