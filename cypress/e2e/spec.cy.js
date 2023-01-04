import homePage from "../pages/homePage";

describe('Suíte de Testes', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
    cy.title().should('be.equal', 'Automation Exercise')
  });

  it('TC01 Criar uma conta', function () {
    homePage.clickOnLogin()


  })
})