//External Lib Import
import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

//Internal Lib Import
import translationBn from "./bn/translation.json";
import translationhin from "./bn/translationhin.json";
import translationtam from "./bn/translationtam.json";
import translationtel from "./bn/translationtel.json";
import store from "../redux/store/store";

//Translations
const resources = {
  bn: {
    translation: translationBn,
  },
  de: {
    translation: translationhin,
  },
  es: {
    translation: translationtel,
  },
  it: {
    translation: translationtam,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: store?.getState()?.Setting?.Language,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
