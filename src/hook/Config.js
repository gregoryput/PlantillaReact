import { create } from 'zustand';

export const Mod = create((set) => ({
  isActive: false,
  toggleActive: () => set((state) => ({ isActive: !state.isActive })),
}));


export const MultIdioma = create((set) => ({
  Idioma: false,
  toggleIdioma: () => set((state) => ({ Idioma: !state.Idioma })),
}));