import React from 'react';

// We try to import something that only exists in the MSW browser build.
// If the bundler resolves to the Node build, this import would fail.
import { setupWorker } from 'msw/browser';

export const DependencyCheck = () => {
  // The simple existence of the 'setupWorker' function already proves success.
  const message = typeof setupWorker === 'function'
   ? '"browser" export resolved correctly!'
    : 'Failed to resolve "browser" export.';

  return <div>{message}</div>;
};