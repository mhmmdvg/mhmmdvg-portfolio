import { useEffect, useState } from 'react';
import { usePreloadingState } from '../context/PreLoading';

const useLoading = () => {
  const preLoading = usePreloadingState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preLoading) {
      setLoading(true);
    } else {
      setTimeout(() => {
        setLoading(true);
      }, 200);
    }
  }, [preLoading]);

  return loading;
};

export default useLoading;
