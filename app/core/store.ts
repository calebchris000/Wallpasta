import { CategoryType } from "@/types";
import { create } from "zustand";

export interface StoreState {
  showTab: boolean;
  showNavbar: boolean;
  setShowNavbar: (bool: boolean) => void;
  setShowTab: (bool: boolean) => void;
  selectedCategory: CategoryType;
  setSelectedCategory: (category: CategoryType) => void;
  selectedImage: string;
  setSelectedImage: (image: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  showNavbar: false,
  setShowNavbar: (bool) =>
    set((state) => ({
      showNavbar: bool,
    })),
  showTab: false,
  setShowTab: (bool) =>
    set((state) => ({
      showTab: bool,
    })),
  selectedCategory: "",
  setSelectedCategory: (category: CategoryType) =>
    set((state) => ({
      selectedCategory: category,
    })),
  selectedImage: "",
  setSelectedImage: (image: string) =>
    set((state) => ({
      selectedImage: image,
    })),
}));
