// useNotifications.js
import { useState, useEffect } from 'react';

const useNotifications = (pollingInterval = 60000) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://my-json-server.typicode.com/typicode/demo/posts'); // Replace with your API endpoint
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications(); // Fetch on component mount

    const interval = setInterval(fetchNotifications, pollingInterval);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [pollingInterval]);

  return { notifications, loading };
};

export default useNotifications;
