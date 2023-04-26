import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import welcome_RU from './ru/welcome.json'
import welcome_EN from './en/welcome.json'
import footer_RU from './ru/footer.json'
import footer_EN from './en/footer.json'

const resources = {
  en: {
    welcome: welcome_EN,
    footer: footer_EN,
  },
  ru: {
    welcome: welcome_RU,
    footer: footer_RU,
  },
} as const

export const defaultNS = 'welcome'

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['welcome', 'footer'],
  debug: import.meta.env.DEV,
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
