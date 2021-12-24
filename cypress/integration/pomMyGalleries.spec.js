/// <reference types="Cypress" />

import { authLogin} from '../page_objects/authLogin';
import {header} from '../page_objects/header';
const faker = require("faker");


describe('POM My Galleries', () => {

    let validEmail = 'aleksandarloncar89@gmail.com';
    let validPass = 'Sladoled1!';

    before('visit app', () => {
        cy.visit('/');
        cy.url().should('contains', 'gallery-app');
    });

    it('login with valid credentials', () => {

        cy.get("a[href='/login']").click();
        cy.url().should('contains', '/login');

        authLogin.login(validEmail, validPass);
        cy.wait(1000);
        cy.url().should('not.contains', '/login');
        header.myGalleries.click();
    });

});   
