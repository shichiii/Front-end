

describe('show_Electric_category_with_homepage', () => {
    it('Gets', () => {
      cy.visit('http://localhost:3000/')
  
      cy.contains('Log In').click()
      cy.get("#email").type("atranikpayan@gmail.com");
      cy.get("#password").type("atra1234", { log: false });
      cy.contains('Login').click()
      // cy.wait()
      cy.wait(10000);

      cy.contains('Show Electric').click()
    })
  })