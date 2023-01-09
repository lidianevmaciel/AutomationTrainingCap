import { faker } from '@faker-js/faker';

class loginPage {

    elements = {
        inputName: () => cy.get('[data-qa="signup-name"]'),
        inputEmail: () => cy.get('[data-qa="signup-email"]'),
        btnSignUp: () => cy.get('[data-qa="signup-button"]'),
        inputLogin: () => cy.get('.login-form > form > [type="email"]'),
        inputSenha: () => cy.get('[type="password"]'),
        loginBtn: () => cy.get('.login-form > form > .btn')
    }

    FillName() {
        this.elements.inputName().type("Laila Borba")
        //this.elements.inputName().type(faker.name.fullName());
    }

    FillEmail() {
        this.elements.inputEmail().type("lailacastro@teste.com")
        //this.elements.inputEmail().type(faker.internet.email());
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

    Login() {
        this.elements.inputLogin().type("lailacastro@teste.com")
        this.elements.inputSenha().type("senha123")
        this.elements.loginBtn().click()
    }
}

module.exports = new loginPage();