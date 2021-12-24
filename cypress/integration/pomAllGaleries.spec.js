/// <reference types="Cypress" />

import {header} from '../page_objects/header';


before('visit app', () => {
    cy.visit('/');
    cy.url().should('contains', 'gallery-app');
});


it('all galleries',() => {
    header.allGalleriesBtn.click();
});
