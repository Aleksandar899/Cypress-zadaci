/// <reference types="Cypress" />

    import { authLogin } from '../page_objects/authLogin';
    import {header} from '../page_objects/header';
    const faker = require("faker");


describe('POM Login', () => {

    let validEmail = 'aleksandarloncar89@gmail.com';
    let validPass = 'Sladoled1!';

    // let userData = {
    //     randomName: faker.name.findName(),
    //     randomEmail: faker.internet.email(),
    //     randomPassword: faker.datatype.number()
    // }

    before('visit app', () => {
        cy.visit('/');
        cy.url().should('contains', 'gallery-app');
    });

    it('login with valid credentials', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/login',

        }).as("login");

        header.loginBtn.click();
        cy.url().should("contains", "/login");

        authLogin.login(validEmail, validPass);

        cy.wait("@login").then((interception)=> {
            console.log(interception.response);
            expect(interception.response.statusCode).eq(200);
        })
        header.loginBtn.should("not.exist");
        cy.url().should("not.contains", "/login");
    })

});
