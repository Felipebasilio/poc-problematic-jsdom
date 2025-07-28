/// <reference types="cypress" />
/// <reference path="../../../cypress/support/component.ts" />
import React from 'react';
import { EventCompatibilityCheck } from './index';

describe('Event Compatibility Validation', () => {
  it('should dispatch and receive native events without TypeError', () => {
    cy.mount(<EventCompatibilityCheck />);

    // The final assertion: the text changed, which means that
    // new EventTarget() and new Event() worked together perfectly.
    cy.contains('Custom event received successfully!').should('be.visible');
  });
});