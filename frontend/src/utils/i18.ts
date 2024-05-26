import en from '../translate/en.json';
import ru from '../translate/ru.json';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
}

const storedLanguage = localStorage.getItem('language');
const language = storedLanguage ? JSON.parse(storedLanguage) : 'ru';

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: 'ru'
})

export default i18n;
