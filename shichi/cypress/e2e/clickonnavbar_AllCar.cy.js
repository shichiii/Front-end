describe('Clicks on All Cars link', () => {
    it('Gets', () => {
        cy.visit('http://localhost:3000/')

        cy.contains('Log In').click()
        cy.get("#email").type("atranikpayan@gmail.com");
        cy.get("#password").type("atra1234", { log: false });
        cy.contains('Login').click();
        cy.wait(4000);

        cy.contains('All Cars').click();
        // cy.url().should('include', '/Advertisement');

    })
})
