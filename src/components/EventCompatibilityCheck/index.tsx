import React, { useState, useEffect } from 'react';

export const EventCompatibilityCheck = () => {
  const [message, setMessage] = useState('Waiting for event...');

  useEffect(() => {
    // 1. We create a native browser EventTarget.
    const target = new EventTarget();

    // 2. We add a listener for a custom event.
    const handleCustomEvent = () => {
      setMessage('Custom event received successfully!');
    };
    target.addEventListener('my-event', handleCustomEvent);

    // 3. We create and dispatch a native browser Event.
    // In JSDOM, this step could cause a type error.
    const customEvent = new Event('my-event');
    target.dispatchEvent(customEvent);

    // Cleanup
    return () => {
      target.removeEventListener('my-event', handleCustomEvent);
    };
  },);

  return <div>{message}</div>;
};