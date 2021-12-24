/// <reference types="Cypress" />

<<<<<<< HEAD
import { authLogin } from "../page_objects/authLogin";
import { createGalleries } from "../page_objects/createGalleries";
import { header } from "../page_objects/header";
const faker = require("faker");

describe('Create Gallery test', () => {

    let galleryId = '';
    let galleryComment = 'test 23';
    let authToken = window.localStorage.getItem('token');

    let validEmail = 'aleksandarloncar89@gmail.com';
    let validPass = 'Sladoled1!';
    
    let userData = {
         newTitle: 'New Gallery',
         newDescription: 'Test comment',
         newImage: 'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg'
    }

    beforeEach('visit app', () => {
        cy.visit('/');
        cy.url().should('contains', 'gallery-app');
        cy.get("a[href='/login']").click();
        cy.url().should('contains', '/login');
        authLogin.login(validEmail, validPass);
        cy.wait(1000);
        cy.url().should('not.contains', '/login');
        header.createBtn.click();
        
    });

    it ('Create gallery', ()=> {
        cy.intercept({
            method: 'POST',
            url: "https://gallery-api.vivifyideas.com/api/galleries"
        }).as('createGallery');

        createGalleries.createGallery(
            userData.newTitle, 
            userData.newDescription, 
            userData.newImage);

            cy.wait('@createGallery').then((intersection) => {
                console.log(intersection.response);
                expect(intersection.response.statusCode).eq(201);
                galleryId = intersection.response.body.id;
            })

            cy.url().should('not.include', '/create');
    });

    it('visit specific gallery', () => {
        cy.intercept({
            method: 'POST',
            url: "https://gallery-api.vivifyideas.com/api/galleries"
        }).as('commentGallery');
        cy.visit(`/galleries/${galleryId}`);
        cy.url(`/galleries/${galleryId}`);
        //cy.visit('/galleries/' + galleryId)
        //cy.get('button').contains('Delete').click();

        
        });

        

    it('visit and comment on specific gallery', () => {
        cy.intercept({
            method: 'POST',
            url: "https://gallery-api.vivifyideas.com/api/comments"
        }).as('commentGallery');

        cy.visit(`/galleries/${galleryId}`);
        cy.url(`/galleries/${galleryId}`);

        cy.get('textarea').type(galleryComment);
        cy.get('button').contains('Submit').click();

        cy.wait('@commentGallery').then((interception) => {
            console.log(interception.response);
            expect(interception.response.statusCode).eq(200);
            //expect(interception.response.body[0]).body).to
        });

   });   

   it.only('create gallery via backend', () => {
    cy.request({
        method: 'POST',
        url: "https://gallery-api.vivifyideas.com/api/galleries",
        headers: {
            authorization: `Bearer ${authToken}`
        },
        body: {
            title: "nova galerija",
            description: "new ",
            image: 'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg'
        }
    })
})
    
});
      
    

=======
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
>>>>>>> fa0b0038da808545466c5d2bfb7f84bef7df5fd0
