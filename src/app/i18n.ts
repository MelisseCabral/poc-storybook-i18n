import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import translationEN from "../../public/locales/en/translation.json";
import translationDE from "../../public/locales/pt/translation.json";

const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationDE
  }
};

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'pt',
        debug: true,
        interpolation: {
          escapeValue: false,
        },
  });


export default i18n;
