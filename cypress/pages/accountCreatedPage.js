class accountCreatedPage {

    elements = { 
        createAccount: () => cy.get('#form > div > div > div > h2 > b'),
        btnContinue: () => cy.get('[data-qa="continue-button"]')
    }

    ValidateCreateAccount() {
        //this.elements.createAccount().should('have.value', 'Account Created!')
        cy.contains('#form > div > div > div > h2 > b','Account Created!')
    }
}

module.exports = new accountCreatedPage();