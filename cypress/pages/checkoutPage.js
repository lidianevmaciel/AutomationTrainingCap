class checkoutPage {
    elements = {
        placeOrderBtn: () => cy.xpath("//*[.='Place Order']")

    }
    clickOnPlaceOrder() {
        this.elements.placeOrderBtn().click()      
    }
    
    }

    module.exports = new checkoutPage();