/// <reference types="@testing-library/jest-dom" />
import React from 'react';
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react';
import { FetchCheck } from './index';

describe('Native Globals Validation in JSDOM', () => {
  it('should fail because the fetch API is not globally defined', async () => {
    render(<FetchCheck />);
    // The test will fail before even reaching here.
    const userElement = await screen.findByText('User:');
    // expect(userElement).toBeInTheDocument();
  });
});