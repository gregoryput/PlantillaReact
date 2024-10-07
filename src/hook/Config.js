import i18next from 'i18next';
import { create } from 'zustand';

// Lee el estado inicial desde localStorage
const getLocalStorageValue = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

export const Mod = create((set) => ({
  isActive: getLocalStorageValue('isActive', true),
  toggleActive: () =>
    set((state) => {
      const newIsActive = !state.isActive;
      // Guarda el nuevo valor en localStorage
      localStorage.setItem('isActive', JSON.stringify(newIsActive));
      return { isActive: newIsActive };
    }),
}));

export const MultIdioma = create((set) => ({
  Idioma: false,
  toggleIdioma: () => set((state) => ({ Idioma: !state.Idioma })),
}));


export const useLanguageStore = create((set) => ({
  language: localStorage.getItem('_lang') === 'ES' ? false : true, // Inicialización del estado
  toggleLanguage: () =>
    set((state) => {
      const newLanguage = !state.language;
      const langCode = newLanguage ? 'EN' : 'ES';
      localStorage.setItem('_lang', langCode);
      i18next.changeLanguage(langCode);
      return { language: newLanguage };
    }),
}));