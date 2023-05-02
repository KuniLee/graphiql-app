import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import welcome_RU from './ru/welcome.json';
import welcome_EN from './en/welcome.json';
import footer_RU from './ru/footer.json';
import footer_EN from './en/footer.json';
import header_RU from './ru/header.json';
import header_EN from './en/header.json';
import firebase_RU from './ru/firebase.json';
import firebase_EN from './en/firebase.json';
import auth_RU from './ru/auth.json';
import auth_EN from './en/auth.json';

const resources = {
  en: {
    welcome: welcome_EN,
    footer: footer_EN,
    header: header_EN,
    firebase: firebase_EN,
    auth: auth_EN,
  },
  ru: {
    welcome: welcome_RU,
    footer: footer_RU,
    header: header_RU,
    firebase: firebase_RU,
    auth: auth_RU,
  },
} as const;

export const defaultNS = 'welcome';

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['welcome', 'footer', 'header', 'firebase', 'auth'],
  debug: import.meta.env.DEV,
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
