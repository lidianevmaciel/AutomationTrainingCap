class productPage {
    elements = {
        inputSearchProduct: () => cy.get('#search_product'),
        submitSearchBtn: () => cy.get('#submit_search')

    }

    inputSearch() {
        this.elements.inputSearchProduct().type("Stylish Dress")
    }

    clickOnSearch() {
        this.elements.submitSearchBtn().click()
    }
}

module.exports = new productPage();