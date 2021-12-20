class Validation {

    get validationRegMsg () {
        return cy.get('.alert').eq(0);
    }

    get validationRegMsg1 () {
        return cy.get('.alert').eq(1);
    }
    get validationRegMsg2 () {
        return cy.get('.alert').eq(2);
    }

}

export const validation = new Validation();
