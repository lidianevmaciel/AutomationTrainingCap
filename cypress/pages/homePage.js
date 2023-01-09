class homePage {
    elements = {
        loginBtn: () => cy.xpath("//a[@href='/login']"),
        continueShopping: () => cy.get('.modal-footer > .btn'),
        viewProduct: () => cy.xpath("//a[@href='/product_details/4']")
        
    }

    clickOnLogin() {
        this.elements.loginBtn().click()
    }

    clickOnViewProduct() {
        this.elements.viewProduct().click()
    }
}

module.exports = new homePage();