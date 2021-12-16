/// <reference types="Cypress" />

describe('login test', () => {

it('Valid registration', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
    cy.get('.nav-link').eq(2).click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
    cy.get('#first-name').type('Proba');
    cy.get('#last-name').type('Jedan');
    cy.get('#email').type('Proba@jedan1.com');
    cy.get('#password').type('proba1234');
    cy.get('#password-confirmation').type('proba1234');
    cy.get('.form-check-input').eq(0).click();
    cy.get('button[type="submit"]').click();
});

});
