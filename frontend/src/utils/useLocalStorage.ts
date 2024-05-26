import { useState } from 'react';

const useLocalStorage = (key: string, defaultValue: string) => {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
      }
      return defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });

  const setValue = (newValue: string) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.log('Ошибка! ', error);
    }
    setStorageValue(newValue);
  };

  return [storageValue, setValue];
};

export default useLocalStorage;
