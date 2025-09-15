import { create } from "zustand";

export const useStore = create((set) => ({
  isNavOpened: false,
  setIsNavOpened: (v) => set({ isNavOpened: v }),
  toggleNav: () => set((s) => ({ isNavOpened: !s.isNavOpened })),
}));
