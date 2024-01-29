describe('Login and NavWallet', () => {
    beforeEach(() => {
      // Visit the login page
      cy.visit('http://localhost:3000'); // Update with your actual app URL
    });
  
    it('Logs in and clicks on FaWallet icon to navigate to wallet page', () => {
      // Click on the login button
      cy.contains('Log In').click();
  
      // Enter login credentials and submit the form
      cy.get('#email').type('atranikpayan@gmail.com');
      cy.get('#password').type('atra1234', { log: false });
      cy.contains('Login').click();
  
      // Wait for the login to complete
      cy.wait(1000);
  
      // Intercept the GET request to mock the API response with a fixture
    //   cy.intercept('GET', 'http://87.107.54.89:8000/user/show/*', { fixture: 'user.json' }).as('getUser');
  
      // Click on the FaWallet element
      cy.get('[data-testid="wallet-icon"]').first().click();

  
      // Wait for the navigation to complete and check if the URL includes the wallet path
      cy.url().should('include', '/wallet/5');
  
      // Wait for the API response interception
    //   cy.wait('@getUser');
  
      // Add any additional assertions or actions specific to the Wallet page
      // For example, you can check if certain elements are present on the new page.
      // cy.get('.some-selector').should('be.visible');
    });
  
    // Add more test cases as needed
  });
  