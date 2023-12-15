

describe('show_Mini-van_category_with_homepage', () => {
    it('Gets', () => {
      cy.visit('http://localhost:3000/')
  
      cy.contains('Log In').click()
      cy.get("#email").type("m.s.mousazade09@gmail.com")
      cy.get("#password").type("sadegh123", {log:false})
      cy.contains('Login').click()
      // cy.wait()


      cy.contains('Show Mini-van').click()
    })
  })