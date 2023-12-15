

describe('create account', () => {
    it('Gets', () => {
      cy.visit('http://localhost:3000/')
  
      cy.contains('Sign Up').click()
      cy.get("#firstname").type("Sadegh")
      cy.get("#lastname").type("MousaZade")
      cy.get("#email").type("tfkl5a@sharklasers.com", {log:false})
      cy.get("#password").type("hello1234", {log:false})
      cy.get("#confirmpassword").type("hello1234", {log:false})
      cy.contains('Sign Up').click()

    })
  })