/// <reference types="Cypress" />

<<<<<<< HEAD
import { authRegister } from "../page_objects/authRegister";
import { header } from "../page_objects/header";
import { validation } from "../page_objects/validation";
import { validationMesages } from "../fixtures/validationMessages.json";
=======

import { authRegister } from '../page_objects/authRegister';
import {header} from '../page_objects/header';
>>>>>>> fa0b0038da808545466c5d2bfb7f84bef7df5fd0
const faker = require("faker");

describe('POM Register', () => {

    let validEmail = 'aleksandarloncar89@gmail.com';

    let userData = {
<<<<<<< HEAD
        //validEmail: 'aleksandarloncar89@gmail.com',
        randomName: faker.name.findName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(5),
=======
        randomName: faker.name.findName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(),
>>>>>>> fa0b0038da808545466c5d2bfb7f84bef7df5fd0
        randomNewPassword: faker.internet.password()
    }

    before('visit app', () => {
        cy.visit('/');
        cy.url().should('contains', 'gallery-app');
<<<<<<< HEAD
        header.registerBtn.click();
=======
    });

    it('register with used email address', () => {
        header.registerBtn.click();
        authRegister.register(userData.randomName, userData.randomLastName, validEmail, userData.randomPassword, userData.randomPassword)
>>>>>>> fa0b0038da808545466c5d2bfb7f84bef7df5fd0
        cy.url().should('contains', '/register');

    });

    it('register with valid credentials', () => {
<<<<<<< HEAD
        cy.wait(1000);
        authRegister.register(
            userData.randomName, 
            userData.randomLastName, 
            userData.randomEmail, 
            userData.randomPassword, 
            userData.randomPassword)
    });

    it.only('register with invalid credentials', () => {
        header.registerBtn.should('exist')
        header.registerBtn.click();
        cy.wait(1000);
        authRegister.register(
            userData.randomName,
            userData.randomLastName,
            "test@test22",
            userData.randomPassword,
            userData.randomNewPassword
        )
        validation.validationRegMsg.should('be.visible');
        validation.validationRegMsg.should('have.text', validationMesages.invalidEmail);
        validation.validationRegMsg1.should('have.text', validationMesages.shortPass);    
        validation.validationRegMsg2.should('have.text', validationMesages.termsAndCon);
        authRegister.termsCheckBox.should('not.be.checked');
        cy.url().should('contains', '/register');

    });
});
=======
        header.registerBtn.click();
        authRegister.register(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomPassword)
        cy.url().should('contains', '/register');

    });
});    
>>>>>>> fa0b0038da808545466c5d2bfb7f84bef7df5fd0
