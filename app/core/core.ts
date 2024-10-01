import { UNSPLASH_ACCESS_KEY } from "@env";

export const getEnv = (key: string): string => {
  if (UNSPLASH_ACCESS_KEY === undefined) {
    return `Environment variable ${key} is not defined. It is ${UNSPLASH_ACCESS_KEY}`;
  }
  return UNSPLASH_ACCESS_KEY;
};
