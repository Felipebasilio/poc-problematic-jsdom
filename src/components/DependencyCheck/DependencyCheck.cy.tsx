/// <reference types="cypress" />
/// <reference path="../../../cypress/support/component.ts" />
import React from 'react';
import { DependencyCheck } from './index';

describe('Dependency Resolution Validation', () => {
  it('should resolve the "browser" export condition correctly', () => {
    cy.mount(<DependencyCheck />);

    // If the component renders this message, it means the import
    // of 'msw/browser' worked, and the bundler chose the right file.
    cy.contains('"browser" export resolved correctly!').should('be.visible');
  });
});