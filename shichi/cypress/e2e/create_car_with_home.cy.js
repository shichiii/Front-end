

describe('go to advertise page with get started in home page', () => {
    it('Gets', () => {
      cy.visit('http://localhost:3000/')
  
      cy.contains('Log In').click()
      cy.get("#email").type("atranikpayan@gmail.com");
      cy.get("#password").type("atra1234", { log: false });
      cy.contains('Login').click()

      cy.contains('Get Started').click()
    })
  })