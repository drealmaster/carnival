import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./Locales/en/translationEN.json";
import translationCH from "./Locales/ch/translationCH.json";

const resources = {
  en: { translation: translationEN },
  ch: { translation: translationCH },
 
};


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    keySeparator: false,
    interpolation: { escapeValue: false },
  })
   

export default i18n