class productDetailsPage {
    elements = {
        addToCartBtn: () => cy.xpath("//button[@class='btn btn-default cart']"),
        continueShopBtn: () => cy.get('.modal-footer > .btn'),
        addedText: () => cy.xpath('//*[text()="Added!"]'),
        cartBtn: () => cy.xpath("//*[@href='/view_cart']")
    }

    clickOnAddTocart() {
        this.elements.addToCartBtn().click()
    }

    clickOnContinueShop() {
        this.elements.addedText().should('be.visible')
        this.elements.continueShopBtn().click()
    }

    clickOnCart() {
        this.elements.cartBtn().click()

    }

}

module.exports = new productDetailsPage();