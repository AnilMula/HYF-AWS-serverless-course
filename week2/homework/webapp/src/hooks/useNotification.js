import { useState } from 'react';

function useNotifications() {
  const [notifications, setNotifications] = useState(null);

  const createNotification = (text) => {
    setNotifications(text);
    // hint: use setTimeout
    setTimeout(() => {
      setNotifications(null);
    }, 1000);
  };

  return { notifications, createNotification };
}

export default useNotifications;
