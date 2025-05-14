import { useEffect, useState } from 'react';

const usePreloadAssets = (assets = []) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let loaded = 0;

    const updateProgress = () => {
      loaded += 1;
      setProgress(Math.round((loaded / assets.length) * 100));
      if (loaded === assets.length) {
        setTimeout(() => setIsReady(true), 3000); // Pequeño delay opcional
      }
    };

    assets.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress; // Para que no se trabe si una imagen falla
    });

    if (assets.length === 0) setIsReady(true);
  }, [assets]);

  return { isReady, progress };
};

export default usePreloadAssets;
