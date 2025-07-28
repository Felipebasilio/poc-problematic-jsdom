
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

export const FetchCheck = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // We use the global fetch API to fetch data.
    fetch('https://jsonplaceholder.typicode.com/users/1')
     .then((response) => {
        if (!response.ok) {
          throw new Error('Network failure');
        }
        return response.json();
      })
     .then(setUser)
     .catch(() => setError('An error occurred while using fetch.'));
  },[]);

  if (error) return <div>{error}</div>;
  if (!user) return <div>Loading...</div>;

  return <h1>User: {user.name}</h1>;
};