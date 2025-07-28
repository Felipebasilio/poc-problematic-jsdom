/// <reference types="cypress" />
/// <reference path="../../../cypress/support/component.ts" />
import React from 'react';
import { FetchCheck } from './index';

describe('Native Globals Validation', () => {
  it('should use the global fetch API without errors', () => {
    // We intercept the network call to not depend on an external API.
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users/1', {
      statusCode: 200,
      body: { id: 1, name: 'Cypress User' },
    }).as('getUser');

    cy.mount(<FetchCheck />);

    // We verify that the mocked user name is rendered.
    // This proves that the fetch call was made and processed successfully.
    cy.contains('User: Cypress User').should('be.visible');
  });
});