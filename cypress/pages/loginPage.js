import { faker } from '@faker-js/faker';

class loginPage {

    elements = {
        inputName: () => cy.get('[data-qa="signup-name"]'),

        inputEmail: () => cy.get('[data-qa="signup-email"]'),

        btnSignUp: () => cy.get('[data-qa="signup-button"]')
    }

    FillName() {
        this.elements.inputName().type(faker.name.fullName());
    }

    FillEmail() {
        this.elements.inputEmail().type(faker.internet.email());
    }

    ClickOnSignUp() {
        this.elements.btnSignUp().click()
    }

    SignUp() {
        this.FillName()
        this.FillEmail()
        this.ClickOnSignUp()
        cy.title().should('be.equal', 'Automation Exercise - Signup')
    }
}

module.exports = new loginPage();