// src/hooks/useInactivityTimeout.js
import { useEffect, useState } from 'react';

const useInactivityTimeout = (timeout = 600000) => { // default to 10 minutes
  const [isInactive, setIsInactive] = useState(false);

  useEffect(() => {
    let activityTimeout;

    const resetTimeout = () => {
      clearTimeout(activityTimeout);
      activityTimeout = setTimeout(() => setIsInactive(true), timeout);
    };

    const handleActivity = () => {
      setIsInactive(false);
      resetTimeout();
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keypress', handleActivity);

    resetTimeout();

    return () => {
      clearTimeout(activityTimeout);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keypress', handleActivity);
    };
  }, [timeout]);

  return isInactive;
};

export default useInactivityTimeout;
