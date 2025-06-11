import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Estado para almacenar nuestro valor
  // Pasa la función inicial al useState para que solo se ejecute una vez
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Verificar si estamos en el navegador
      if (typeof window === 'undefined') {
        return initialValue;
      }
      
      // Verificar si localStorage está disponible
      if (!window.localStorage) {
        console.warn('localStorage no está disponible');
        return initialValue;
      }
      
      // Obtener del localStorage por key
      const item = window.localStorage.getItem(key);
      // Parsear el item almacenado o retornar initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Si hay un error, retornar initialValue
      console.warn('Error al acceder a localStorage:', error);
      return initialValue;
    }
  });

  // Retorna una versión envuelta de la función setter de useState que persiste
  // el nuevo valor en localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Verificar si estamos en el navegador
      if (typeof window === 'undefined') {
        return;
      }
      
      // Verificar si localStorage está disponible
      if (!window.localStorage) {
        console.warn('localStorage no está disponible');
        return;
      }
      
      // Permitir que value sea una función para que tengamos la misma API que useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Guardar en el estado
      setStoredValue(valueToStore);
      // Guardar en localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // Una implementación más avanzada manejaría el caso de error
      console.warn('Error al guardar en localStorage:', error);
      // Aún actualizar el estado aunque falle localStorage
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
    }
  };

  return [storedValue, setValue] as const;
} 