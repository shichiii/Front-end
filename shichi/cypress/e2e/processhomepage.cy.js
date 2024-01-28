describe('Login and Scroll to Category', () => {
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
    
    it('Clicks on the "Filter & all car" element and navigates to "./advertisement"', () => {
        // Click on the login button
        cy.contains('Log In').click();
    
        // Enter login credentials and submit the form
        cy.get('#email').type('atranikpayan@gmail.com');
        cy.get('#password').type('atra1234', { log: false });
        cy.contains('Login').click();
    
        // Wait for the login to complete
        cy.wait(1000);
    
        // Check if the login is successful (you might adjust this assertion based on your application)
        cy.url().should('include', '/home');
    
        // Click on the "Filter & all car" element
        cy.get('[data-testid="test_filter"]').click();
    
        // Wait for the navigation to complete and check if the URL includes the expected path
        // cy.url().should('include', './advertisement');
    
        // Add any additional assertions or actions specific to the Advertisement page
      });
    it('Logs in and scrolls to the "to-search" ID after clicking on Search', () => {
        // Click on the login button
        cy.contains('Log In').click();
    
        // Enter login credentials and submit the form
        cy.get('#email').type('atranikpayan@gmail.com');
        cy.get('#password').type('atra1234', { log: false });
        cy.contains('Login').click();
    
        // Wait for the login to complete
        cy.wait(1000);
    
        // Check if the login is successful (you might adjust this assertion based on your application)
        cy.url().should('include', '/home');
    
        // Click on the "Search" element
        cy.get('[data-testid="test-search"]').scrollIntoView().click();
    
        // Wait for the scroll to complete (you might need to adjust the wait time based on your application)
        cy.wait(1000);
    
        // Check if the URL includes the expected hash (ID)
       
    
        // Add any additional assertions or actions specific to the scrolled position
      });
    
    it('Logs in and scrolls to the "carcategory" ID', () => {
      // Click on the login button
      cy.contains('Log In').click();
  
      // Enter login credentials and submit the form
      cy.get('#email').type('atranikpayan@gmail.com');
      cy.get('#password').type('atra1234', { log: false });
      cy.contains('Login').click();
  
      // Wait for the login to complete
      cy.wait(1000);
  
      // Check if the login is successful (you might adjust this assertion based on your application)
      cy.url().should('include', '/home');
  
      // Click on the "Select Category" element
      cy.get('[data-testid="select-category"]').scrollIntoView().click();
  
      // Wait for the scroll to complete (you might need to adjust the wait time based on your application)
      cy.wait(1000);
  
      // Check if the URL includes the expected hash (ID)
    //   cy.url().should('include', '#carcategory');
  
      // Add any additional assertions or actions specific to the scrolled position
    });
  }
  

  );
  