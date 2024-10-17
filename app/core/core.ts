export const getEnv = (key: string): string => {
  const UNSPLASH_ACCESS_KEY = "";
  if (UNSPLASH_ACCESS_KEY === undefined) {
    return `Environment variable ${key} is not defined. It is ${UNSPLASH_ACCESS_KEY}`;
  }
  return UNSPLASH_ACCESS_KEY;
};
