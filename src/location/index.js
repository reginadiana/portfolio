import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBR from "./translates/pt-BR";
import en from "./translates/en";
import "./translates/en";

i18n.use(initReactI18next).init({
  resources: {
    "pt-BR": ptBR,
    en: en,
  },
  lng: "pt-BR",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
