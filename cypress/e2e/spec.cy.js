import homePage, { clickOnDeleteAccount } from "../pages/homePage";
import loginPage from "../pages/loginPage";
import signUpPage from "../pages/signUpPage";
import AccountCreatedPage from "../pages/accountCreatedPage";
import productDetailsPage from "../pages/productDetailsPage";
import productPage from "../pages/productPage";
import cartPage from "../pages/cartPage";
import checkoutPage from "../pages/checkoutPage";
import paymentPage, { CardNumberInformation } from "../pages/paymentPage";
import paymentDonePage from "../pages/paymentDonePage";
import deleteAccountPage from "../pages/deleteAccountPage";

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

  it('TC02 Realizar uma compra', function (){
    homePage.clickOnLogin()
    loginPage.Login()
    homePage.clickOnProducts()
    productPage.inputSearch()
    productPage.clickOnSearch()
    homePage.clickOnViewProduct()
    productDetailsPage.clickOnAddTocart()
    productDetailsPage.clickOnContinueShop()
    productDetailsPage.clickOnCart()
    cartPage.clickOnProceedToCheckout()
    checkoutPage.clickOnPlaceOrder()
    paymentPage.CardNumberInformation()
    paymentDonePage.clickOnContinue()
  })

  it('Deletar uma conta', function () {
    homePage.clickOnLogin()
    loginPage.Login()
    homePage.clickOnDeleteAccount() 
    deleteAccountPage.accountDeletede()

  })
})
