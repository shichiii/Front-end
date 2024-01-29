

describe('show_Compact_category_with_homepage', () => {
    it('Gets', () => {
      cy.visit('http://localhost:3000/')
  
      cy.contains('Log In').click()
      cy.get("#email").type("atranikpayan@gmail.com");
      cy.get("#password").type("atra1234", { log: false });
      cy.contains('Login').click()
      cy.wait(10000);

      // cy.wait()


      cy.contains('Show Compact').click()
    })
  })