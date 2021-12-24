/// <reference types="Cypress" />

const Locators = require('../fixtures/Locators.json');
const faker = require("faker");

describe('login test', () => {

    let validEmail = 'aleksandarloncar89@gmail.com';
    let validPass = 'Sladoled1!';

    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.datatype.number()
    }

    before(('visit app page'), () => {
        cy.visit("/");
        cy.url().should('contains', "https://gallery-app");
    });

    it('login with invalid credentials', () => {
        cy.get(Locators.Header.LoginButton).click();
        cy.url().should('contains', '/login');
        cy.get(Locators.LoginPage.EmailInput).clear().type(userData.randomEmail);
        cy.get(Locators.LoginPage.PasswordInput).clear().type(userData.randomPassword);
        cy.get(Locators.LoginPage.SubmitButton).click();
        cy.url().should("contains", "/login");
    });

    it('login with valid credentials', () => {
        cy.get(Locators.Header.LoginButton).click();
        cy.url().should('contains', '/login');
        cy.get(Locators.LoginPage.EmailInput).clear().type(validEmail);
        cy.get(Locators.LoginPage.PasswordInput).clear().type(validPass);
        cy.get(Locators.LoginPage.SubmitButton).click();

    });
<<<<<<< HEAD
    it('logout', () => {
        cy.wait(500);
        cy.get(Locators.Logout.LogoutButton).eq(3).click();
    });
=======
it('logout', () => {
    cy.wait(1000);
    cy.get(Locators.Header.LogoutButton).eq(3).click();
});
>>>>>>> fa0b0038da808545466c5d2bfb7f84bef7df5fd0

});