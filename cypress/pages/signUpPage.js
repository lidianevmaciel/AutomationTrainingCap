class signUpPage {

    elements = {
        //ENTER ACCOUNT INFORMATION
        inputName: () => cy.get('#name'),
        inputEmail: () => cy.get('#email'),
        inputPasswd: () => cy.get('#password'),
        inputFirstName: () => cy.get('#first_name'),
        inputLastName: () => cy.get('#last_name'),

        //ADDRESS INFORMATION
        inputAddress: () => cy.get('#address1'),
        selectCountry: () => cy.get('#country'),
        inputState: () => cy.get('#state'), 
        inputcity: () => cy.get('#city'),
        inputZipCode: () => cy.get('#zipcode'), 
        inputMobileNumber: () => cy.get('#mobile_number')

    }

    selectCountryOption() {
        this.elements.selectCountry()
            .select('Canada')
            .invoke('val')
            .should('equal', 'Canada')
    }
}

module.exports = new signUpPage();