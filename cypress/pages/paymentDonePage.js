class paymentDonePage {
    elements = {
        paymentDone: () => cy.xpath("//*[text()='Order Placed!']"),
        continueBtn: () => cy.get('[data-qa="continue-button"]'),
        donwloadBtn: () => cy.xpath("//*[text()='Download Invoice']")

    }

    clickOnContinue() {
        this.elements.paymentDone().should('be.visible')
        this.elements.continueBtn().click()
    }

    clickOnDonwloadInvoice() {
        this.elements.donwloadBtn().click()
    }

    verifyInvoice() {
        cy.readFile('cypress\downloads\invoice.txt')
      .should('contain', "Hi Laila Borba, Your total purchase amount is 500. Thank you")
    }
}
    module.exports = new paymentDonePage();