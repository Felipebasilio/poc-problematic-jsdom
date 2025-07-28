/// <reference types="cypress" />
/// <reference path="../../../cypress/support/component.ts" />
import React from 'react'
import { Button } from '../'

describe('<Button />', () => {
  it('mounts the component and verifies the text', () => {
    // The cy.mount() command renders the component in the Cypress test browser
    cy.mount(<Button onClick={() => {}}>Click Here</Button>)

    // Uses Cypress commands to interact and make assertions
    cy.get('button').should('contain.text', 'Click Here')
  })

  it('verifies that the click function is called', () => {
    const onClickSpy = cy.spy().as('onClickSpy')
    cy.mount(<Button onClick={onClickSpy}>Click</Button>)

    cy.get('button').click()
    cy.get('@onClickSpy').should('have.been.calledOnce')
  })
})