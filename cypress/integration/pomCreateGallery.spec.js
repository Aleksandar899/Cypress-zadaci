/// <reference types="Cypress" />

import { authLogin } from "../page_objects/authLogin";
import { createGalleries } from "../page_objects/createGalleries";
import { header } from "../../page_objects/header";

const faker = require("faker");

describe('Create Gallery test', () => {

    let validEmail = 'aleksandarloncar89@gmail.com';
    let validPass = 'Sladoled1!';
    
    let userData = {
         newTitle: 'New Gallery',
         newDescription: 'Test comment',
         newImage: 'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg'
    }

    before('visit app', () => {
        cy.visit('/');
        cy.url().should('contains', 'gallery-app');
        cy.get("a[href='/login']").click();
        cy.url().should('contains', '/login');
        authLogin.login(validEmail, validPass);
        cy.wait(1000);
        cy.url().should('not.contains', '/login');
        header.createGallery.click();
    });

    it ('create gallery', ()=> {
        cy.wait(1000);
        header.createGallery.click();
        createGalleries.createGallery(
            userData.newTitle, 
            userData.newDescription, 
            userData.newImage)
        
    });
}); 
