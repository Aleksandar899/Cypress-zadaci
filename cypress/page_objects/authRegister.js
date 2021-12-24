class AuthRegister {
    get firstNameInput() {
        return cy.get("#first-name");
    }
    get lastNameInput() {
        return cy.get("#last-name");
    }
    get emailInput() {
        return cy.get("#email");
    }
    get passwordInput() {
        return cy.get("#password");
    }
    get passwordConfirmationInput() {
        return cy.get("#password-confirmation");
    }
    get termsCheckBox () {
        return cy.get(".form-check-input").eq(0); 
    }
    get submitBtn() {
        return cy.get("button[type='submit']");
    }
<<<<<<< HEAD

    
=======
>>>>>>> fa0b0038da808545466c5d2bfb7f84bef7df5fd0
    
    register(firstName,lastName, email, password, passwordConfirmation) {
        this.firstNameInput.clear().type(firstName);
        this.lastNameInput.clear().type(lastName);
<<<<<<< HEAD
        this.emailInput.clear().type("test@test22");
        this.passwordInput.clear().type(password);
        this.passwordConfirmationInput.clear().type(passwordConfirmation);
        //this.termsCheckBox.check();
=======
        this.emailInput.clear().type(email);
        this.passwordInput.clear().type(password);
        this.passwordConfirmationInput.clear().type(passwordConfirmation);
        this.termsCheckBox.click();
>>>>>>> fa0b0038da808545466c5d2bfb7f84bef7df5fd0
        this.submitBtn.click();

    }
}

<<<<<<< HEAD
export const authRegister = new AuthRegister();
=======
export const authRegister = new AuthRegister();
     
>>>>>>> fa0b0038da808545466c5d2bfb7f84bef7df5fd0
