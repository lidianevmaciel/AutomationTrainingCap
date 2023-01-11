class cartPage {
    elements = {
        proceedToCheckoutBtn: () => cy.xpath("//*[.='Proceed To Checkout']"),

    }
    clickOnProceedToCheckout() {
        this.elements.proceedToCheckoutBtn().click()
    }
    }

    module.exports = new cartPage();