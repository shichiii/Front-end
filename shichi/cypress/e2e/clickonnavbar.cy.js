describe('NavBar Links', () => {
    beforeEach(() => {
      // Visit the login page and perform login
      cy.visit('http://localhost:3000/');
      cy.contains('Log In').click();
      cy.get("#email").type("atranikpayan@gmail.com");
      cy.get("#password").type("atra1234", { log: false });
      cy.contains('Login').click();
      cy.wait(1000); // Wait for login to complete
    });
  
    it('Clicks on Home link', () => {
      cy.contains('Home').click();
      cy.url().should('include', '/home');
      // Add any assertions or actions specific to the Home page
    });
  
    it('Clicks on All Cars link', () => {
      cy.contains('All Cars').click();
      cy.url().should('include', '/Advertisement');
      // Add any assertions or actions specific to the All Cars page
    });
  
    it('Clicks on Advertisement Register link', () => {
      cy.contains('Advertisement register').click();
      cy.url().should('include', '/advertise');
      // Add any assertions or actions specific to the Advertisement Register page
    });
  
    it('Clicks on About US link', () => {
      cy.contains('About').click();
      cy.url().should('include', '/about');
      // Add any assertions or actions specific to the About US page
    });
  
    // Add more test cases as needed
  
  });
  