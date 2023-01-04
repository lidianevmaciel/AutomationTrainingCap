import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import signUpPage from "../pages/signUpPage";

describe('Suíte de Testes', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.title().should('be.equal', 'Automation Exercise')
  });

  it('TC01 Criar uma conta', function () {
    homePage.clickOnLogin()
    loginPage.SignUp()
    signUpPage.selectCountryOption()
  })
})