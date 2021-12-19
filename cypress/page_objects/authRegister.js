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
    
    register(firstName,lastName, email, password, passwordConfirmation) {
        this.firstNameInput.clear().type(firstName);
        this.lastNameInput.clear().type(lastName);
        this.emailInput.clear().type(email);
        this.passwordInput.clear().type(password);
        this.passwordConfirmationInput.clear().type(passwordConfirmation);
        this.termsCheckBox.click();
        this.submitBtn.click();

    }
}

export const authRegister = new AuthRegister();
     