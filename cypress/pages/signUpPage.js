class signUpPage {

    elements = {
        inputName: () => cy.get('#name'),
        inputEmail: () => cy.get('#email'),
        inputPasswd: () => cy.get('#password'),
        inputFirstName: () => cy.get('#first_name'),
        inputLastName: () => cy.get('#last_name'),
        inputAddress: () => cy.get('#address1'),
        selectCountry: () => cy.get('#country')
    }

    selectCountryOption() {
        this.elements.selectCountry()
            .select('Canada')
            .invoke('val')
            .should('equal', 'Canada')
    }
}

module.exports = new signUpPage();