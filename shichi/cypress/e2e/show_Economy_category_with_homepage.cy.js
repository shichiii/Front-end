

describe('show_Economy_category_with_homepage', () => {
    it('Gets', () => {
      cy.visit('http://localhost:3000/')
  
      cy.contains('Log In').click()
      cy.get("#email").type("atranikpayan@gmail.com");
      cy.get("#password").type("atra1234", { log: false });
      cy.contains('Login').click()
<<<<<<< HEAD
      // cy.wait()
      cy.wait(10000);
=======
      cy.wait(5000)
>>>>>>> 98be19059baf3e8590b28be673051e98a9dfc8fa

      cy.contains('Show Economy').click()
    })
  })