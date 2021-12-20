class CreateGalleries {

    get titleInput() {
        return cy.get("#title");
    }
    get descriptionInput() {
        return cy.get("#description");
    }
    get imageInput() {
        return cy.get(".form-control").eq(2);
    }
    get addImageBtn() {
        return cy.get("button[type='Add image']");
    }
    get submitBtn() {
        return cy.get(".btn").eq(0);
    }
    get cancelBtn() {
        return cy.get(".btn").eq(1);
    }

    createGallery(title, description, image){
        this.titleInput.clear().type(title);
        this.descriptionInput.clear().type(description);
        this.imageInput.clear().type(image);
        this.submitBtn.click();

    }

}

export const createGalleries = new CreateGalleries();