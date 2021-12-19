/// <reference types="Cypress" />

import {authLogin} from '../page_objects/authLogin';
import {authCreateGallery} from '../page_objects/authCreateGallery';
import {header} from '../page_objects/header';
const faker = require("faker");


describe('POM Create Gallery', () => {

    let validEmail = 'aleksandarloncar89@gmail.com';
    let validPass = 'Sladoled1!';

    let newTitle = 'New Gallery';
    let newDescription = 'Test comment';
    let newImage = 'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg'; 

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
        header.createGalleries.click();

    });

    it ('create gallery', ()=> {
        cy.wait(1000);
        header.createGalleries.click();
        authCreateGallery.createGallery(newTitle, newDescription, newImage)
        
    });



    

}); 
