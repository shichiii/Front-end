describe('Login in your account', () => {
    it('Gets', () => {
      cy.visit('http://localhost:3000/')
  
      cy.contains('Log In').click()
      cy.get("#email").type("atranikpayan@gmail.com");
      cy.get("#password").type("atra1234", { log: false });
      cy.contains('Login').click();
      cy.wait(5000);
      cy.contains('All Cars').click();
      cy.get('[data-testid="test_githu_search_homepage"]').first().type("Supra MK4");

      cy.get('[data-testid="test_githu_search_homepage buttun"]').first().click();
    //   cy.url().should('include', '/wallet/5');
  
      
  
    })
  })
    