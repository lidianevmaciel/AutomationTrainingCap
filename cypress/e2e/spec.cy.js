import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import signUpPage from "../pages/signUpPage";
import AccountCreatedPage from "../pages/AccountCreatedPage";

describe('Suíte de Testes', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.title().should('be.equal', 'Automation Exercise')
  });

  it('TC01 Criar uma conta', function () {
    homePage.clickOnLogin()
    loginPage.SignUp()
    signUpPage.validateName()
    signUpPage.validateEmail()
    signUpPage.FillPassword()
    signUpPage.FillFirstName()
    signUpPage.FillLastName()
    signUpPage.FillAddress()
    signUpPage.selectCountryOption()
    signUpPage.FillState()
    signUpPage.FillCity()
    signUpPage.FillZipCode()
    signUpPage.FillMobileNumber()
    signUpPage.ClickOnCreateAccount()
    AccountCreatedPage.ValidateCreateAccount()
  })
})