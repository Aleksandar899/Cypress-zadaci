/// <reference types="Cypress" />

describe('login test', () => {
    

    it('login without email address', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#password').type('Sladoled1!');
        cy.get('button[type="submit"]').click();
    });


    it('login without password', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.get('#email').type('aleksandarloncar89@gmail.com');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('button[type="submit"]').click();
    });


    it('login without email address and password', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('button[type="submit"]').click();
    });

    it('login with wrong email address', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('aleksandarloncar8955@gmail.com');
        cy.get('#password').type('Sladoled1!');
        cy.get('button[type="submit"]').click();
    });

    it('login with wrong password', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('aleksandarloncar89@gmail.com');
        cy.get('#password').type('11111!');
        cy.get('button[type="submit"]').click();
    });

    it('Check if the password can be copy-pasted or not', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('aleksandarloncar89@gmail.com');
        cy.get('#password').type('Sladoled1!');
        cy.get('button[type="submit"]').click();
    });

    it('login with wrong email and password', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('aleksandarloncar89ds@gmail.com');
        cy.get('#password').type('Sladoled1!aa');
        cy.get('button[type="submit"]').click();
    });

    it('login with space after email address', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('aleksandarloncar89@gmail.com   ');
        cy.get('#password').type('Sladoled1!');
        cy.get('button[type="submit"]').click();
    });

    it('login with upper cases in password', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get('.nav-link').eq(1).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
        cy.get('#email').type('aleksandarloncar89@gmail.com   ');
        cy.get('#password').type('SLADOLED1!');
        cy.get('button[type="submit"]').click();
    });







    // it('login with valid credentials', () => {
    //     cy.visit('/');
    //     cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
    //     cy.get('.nav-link').eq(1).click();
    //     cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
    //     cy.get('#email').type('aleksandarloncar89@gmail.com');
    //     cy.get('#password').type('Sladoled1!');
    //     cy.get('button[type="submit"]').click();
    // });
    // it('logout', () => {
    //     cy.wait(500);
    //     cy.get('.nav-link').eq(3).click();
    // });
});