// Notifications.js
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import useNotifications from '../../../hooks/useNotifications';

const Notifications = () => {
  const { notifications, loading } = useNotifications(60000); // Poll every 60 seconds

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Dropdown.Menu>
      {notifications.map((notification, index) => (
        <Dropdown.Item key={index}>
          {notification.message}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  );
};

export default Notifications;
