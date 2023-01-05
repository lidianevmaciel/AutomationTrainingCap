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
        inputCity: () => cy.get('#city'),
        inputZipCode: () => cy.get('#zipcode'),
        inputMobileNumber: () => cy.get('#mobile_number'),

        //Create Account 
        btnCreateAccount: () => cy.get('.login-form > form > .btn')

    }

    selectCountryOption() {
        this.elements.selectCountry()
            .select('Canada')
            .invoke('val')
            .should('equal', 'Canada')
    }

    validateName() {
        this.elements.inputName().should('have.value', 'Laila Borba')
    }

    validateEmail() {
        this.elements.inputEmail().should('have.value', 'lailaborbx@teste.com')
    }

    FillPassword() {
        this.elements.inputPasswd().type("senha123")
    }

    FillFirstName() {
        this.elements.inputFirstName().type("Laila")
    }

    FillLastName() {
        this.elements.inputLastName().type("Borba")
    }

    FillAddress() {
        this.elements.inputAddress().type("141 West 14th Street North Vancouver, BC, V7M 1H9 Canada.")
    }

    FillState() {
        this.elements.inputState().type("Canadá")
    }

    FillCity() {
        this.elements.inputCity().type("Vancouver")
    }

    FillZipCode() {
        this.elements.inputZipCode().type("555590000")
    }

    FillMobileNumber() {
        this.elements.inputMobileNumber().type("001160411416")
    }

    ClickOnCreateAccount() {
        this.elements.btnCreateAccount().click()
    }
}

module.exports = new signUpPage();