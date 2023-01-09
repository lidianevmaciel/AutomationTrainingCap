class productDetailsPage {
    elements = {
        addToCartBtn: () => cy.xpath("//button[@class='btn btn-default cart']"),
        continueShopBtn: () => cy.get('.modal-footer > .btn'),
        addedToCart: () => cy.get('.modal-title')
    }

    clickOnAddTocart() {
        this.elements.addToCartbtn().click()
    }

}

module.exports = new productDetailsPage();