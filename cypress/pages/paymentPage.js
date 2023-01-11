class paymentPage {
    elements = {
        inputNameOnCard: () => cy.get('[data-qa="name-on-card"]'),
        inputNumberCard: () => cy.get('[data-qa="card-number"]'),
        inputCVC: () => cy.get('[data-qa="cvc"]'),
        inputMonth: () => cy.get('[data-qa="expiry-month"]'),
        inputYear: () => cy.get('[data-qa="expiry-year"]'),
        confirmPayBtn: () => cy.get('[id="submit"]')

    }
    clickOnPlaceOrder() {
        this.elements.placeOrderBtn().click()      
    }

    CardNumberInformation() {
        this.elements.inputNameOnCard().type("Laila Castro Borba")
        this.elements.inputNumberCard().type("989976554321")
        this.elements.inputCVC().type("100")
        this.elements.inputMonth().type("02")
        this.elements.inputYear().type("2029")
        this.elements.confirmPayBtn().click()

    }
    
    }

    module.exports = new paymentPage();