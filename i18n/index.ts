
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import translationEn from "./locales/en-US/translation.json";
import translationIt from "./locales/it-IT/translation.json";
import translationEs from "./locales/es-ES/translation.json";
import translationDe from "./locales/de-DE/translation.json";
import translationFr from "./locales/fr-FR/translation.json";
import { getLocales } from "expo-localization";

const resources = {
  "en-US": { translation: translationEn },
  "it-IT": { translation: translationIt },
  "es-ES": { translation: translationEs },
  "de-DE": { translation: translationDe },
  "fr-FR": { translation: translationFr },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLocales()[0].languageTag,
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
});

AsyncStorage.getItem("language").then((savedLanguage) => {
  if (savedLanguage && savedLanguage !== i18n.language) {
    i18n.changeLanguage(savedLanguage);
  }
});

export default i18n;