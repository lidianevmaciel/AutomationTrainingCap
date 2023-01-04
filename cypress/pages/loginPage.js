class loginPage {

    elements = {
        inputName: () => cy.get('[data-qa="signup-name"]'),

        inputEmail: () => cy.get('[data-qa="signup-email"]'),

        btnSignUp: () => cy.get('[data-qa="signup-button"]')
    }

    FillName() {
        this.elements.inputName().type("Laila Borba");
        this.elements.inputEmail().type("lailaborba@teste.com")
    }
}

module.exports = new loginPage();