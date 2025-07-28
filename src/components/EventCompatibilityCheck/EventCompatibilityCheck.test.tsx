import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EventCompatibilityCheck } from './index';

describe('Event Compatibility Validation in JSDOM', () => {
  it('should successfully dispatch and receive a custom event', async () => {
    render(<EventCompatibilityCheck />);
    
    // Initially shows "Waiting for event..."
    (expect(screen.getByText('Waiting for event...')) as any).toBeInTheDocument();
    
    // Wait for the event to be dispatched and received
    await waitFor(() => {
      (expect(screen.getByText('Custom event received successfully!')) as any).toBeInTheDocument();
    });
  });
});