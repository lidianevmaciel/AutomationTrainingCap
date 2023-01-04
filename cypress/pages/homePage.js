class homePage {
    elements = {
        loginBtn: () => cy.xpath("//a[@href='/login']")
    }

    clickOnLogin() {
        this.elements.loginBtn().click()
    }
}

module.exports = new homePage();