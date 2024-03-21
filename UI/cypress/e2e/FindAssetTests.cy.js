describe("Find Asset Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/asset/find"); 
  });

  it("should display the table with assets", () => {
    cy.get("table").should("exist");
    cy.get("thead").contains("ID").should("exist");
    cy.get("thead").contains("Type").should("exist");
    cy.get("thead").contains("Link").should("exist");
    cy.get("thead").contains("Title").should("exist");
    cy.get("thead").contains("Author").should("exist");
    cy.get("thead").contains("Actions").should("exist");
  });
});
