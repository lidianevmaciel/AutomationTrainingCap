import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import signUpPage from "../pages/signUpPage";
import AccountCreatedPage from "../pages/accountCreatedPage";
import productDetailsPage from "../pages/productDetailsPage";

describe('Suíte de Testes', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.title().should('be.equal', 'Automation Exercise')
  });

  it('TC01 Criar uma conta', function () {
    homePage.clickOnLogin()
    loginPage.SignUp()
    signUpPage.AccountInformation()
    AccountCreatedPage.ValidateCreateAccount()
    AccountCreatedPage.ClickOnContinue()
  })

  it.only('TC02 Realizar uma compra', function (){
    homePage.clickOnLogin()
    loginPage.Login()
    homePage.clickOnViewProduct()
    productDetailsPage.clickOnAddTocart()
  })
})
