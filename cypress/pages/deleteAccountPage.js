class deleteAccountPage {

    elements = {
        accountDeleted: () => cy.get('[data-qa="account-deleted"]'),
        continueBtn: () => cy.get('data-qa="continue-button"')
    }

    accountDeletede() {
        this.elements.accountDeleted().should('be.visible')
        
    }
}

module.exports = new deleteAccountPage();