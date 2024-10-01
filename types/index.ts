export type CategoryType =
  | "nature"
  | "sports"
  | "space"
  | "cars"
  | "animals"
  | "spiritual"
  | "";

export type imageResponseType = {
  name: string;
  description: string;
  width: number;
  height: number;
  updatedAt: string;
  url: string;
};
