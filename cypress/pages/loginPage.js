class loginPage {

    elements = {
        inputName: () => cy.get('[data-qa="signup-name"]'),

        inputEmail: () => cy.get('[data-qa="signup-email"]'),

        btnSignUp: () => cy.get('[data-qa="signup-button"]')
    }

    FillName() {
        this.elements.inputName().type("Laila Borba");
    }

    FillEmail() {
        this.elements.inputEmail().type("lailaborbx@teste.com");
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