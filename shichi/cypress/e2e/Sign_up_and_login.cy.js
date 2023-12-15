

describe('create account and login to new account', () => {
    it('Gets', () => {
      cy.visit('http://localhost:3000/')
  
      cy.contains('Sign Up').click()
      cy.get("#firstname").type("Sadegh")
      cy.get("#lastname").type("MousaZade")
      cy.get("#email").type("ramev80962@beeplush.com", {log:false})
      cy.get("#password").type("hello1234", {log:false})
      cy.get("#confirmpassword").type("hello1234", {log:false})
      cy.contains('Sign Up').click()

      cy.get("#email").type("ramev80962@beeplush.com")
      cy.get("#password").type("hello1234", {log:false})
      cy.contains('Login').click()

    })
  })