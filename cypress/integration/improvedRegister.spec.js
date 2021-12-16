/// <reference types="Cypress" />

const Locators = require('../fixtures/Locators.json');
const faker = require("faker");

describe('register test', () => {

    let userData = {
        randomName: faker.name.findName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(8),
        randomNewPassword: faker.internet.password()
    }

    before(('visit app page'), () => {
        cy.visit("/");
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
    });

    it('register with valid credentials', () => {
        cy.visit('/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
        cy.get(Locators.Header.RegisterButton).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
        cy.get(Locators.RegisterPage.FirstName).type(userData.randomName);
        cy.get(Locators.RegisterPage.LastName).type(userData.randomLastName);
        cy.get(Locators.RegisterPage.EmailInput).type(userData.randomEmail);
        cy.get(Locators.RegisterPage.PasswordInput).type('1' + userData.randomPassword);
        cy.get(Locators.RegisterPage.PasswordConfirmationInput).type('1' + userData.randomPassword);
        cy.get(Locators.RegisterPage.Terms).eq(0).click();
        cy.get(Locators.RegisterPage.SubmitButton).click();

    });
});