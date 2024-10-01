import { create } from "zustand";

export interface StoreState {
  showTab: boolean;
  showNavbar: boolean;
  setShowNavbar: (bool: boolean) => void;
  setShowTab: (bool: boolean) => void;
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
}));
