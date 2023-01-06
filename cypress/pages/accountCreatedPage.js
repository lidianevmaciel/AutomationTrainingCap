class accountCreatedPage {

    elements = { 
        createAccount: () => cy.get('[data-qa="account-created"'),
        btnContinue: () => cy.get('[data-qa="continue-button"]')
    }

    ValidateCreateAccount() {
        this.elements.createAccount().should('be.visible')
    }

    ClickOnContinue() {
        this.elements.btnContinue().click()
    }
}

module.exports = new accountCreatedPage();
