/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';

const usePageLoaded = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      
      setTimeout(() => {
        setIsPageLoaded(true);
      }, 3000); 
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
