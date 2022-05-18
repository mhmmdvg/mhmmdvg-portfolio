import { useEffect, useState } from 'react';
import { usePreloadingState } from '../context/PreLoading';

export default function useLoaded() {
  const preloaded = usePreloadingState();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (preloaded) {
      setIsLoaded(true);
    } else {
      setTimeout(() => {
        setIsLoaded(true);
      }, 200);
    }
  }, [preloaded]);

  return isLoaded;
}
