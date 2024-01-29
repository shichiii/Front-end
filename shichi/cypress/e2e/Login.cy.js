/// <refrence types="cypress"/>
describe("Login in your account", () => {
  it("Gets", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Log In").click();
    cy.get("#email").type("m.s.mousazade09@gmail.com");
    cy.get("#password").type("sadegh123", { log: false });
    cy.contains("Login").click();
  });
});
