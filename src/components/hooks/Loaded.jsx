/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';

const usePageLoaded = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Esperar 3 segundos después de que la página se haya cargado
      setTimeout(() => {
        setIsPageLoaded(true);
      }, 3000); // 3000ms = 3 segundos
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return isPageLoaded;
};

export default usePageLoaded;
