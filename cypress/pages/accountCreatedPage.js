class accountCreatedPage {

    elements = { 
        createAccount: () => cy.get('[data-qa="account-created"'),
        btnContinue: () => cy.get('[data-qa="continue-button"]')
    }

    ValidateCreateAccount() {
        this.elements.createAccount().should('be.visible')
    }
}

module.exports = new accountCreatedPage();
