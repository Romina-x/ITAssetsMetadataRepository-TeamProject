describe("Create Asset Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/asset/add"); 
  });

  it("displays mandatory attribute elements correctly", () => {
    cy.contains("Type").should("exist");
    cy.contains("Title").should("exist");
    cy.contains("Link").should("exist");
    cy.contains("Author").should("exist");
  }); 

  it("displays custom attribute elements correctly", () => {
    cy.contains("Custom Attribute 1").should("exist");
    cy.contains("Custom Attribute 2").should("exist");
    cy.contains("Custom Attribute 3").should("exist");
    cy.contains("Custom Attribute 4").should("exist");   
  }); 
  
  it("displays association options correctly", () => {
    cy.contains("Relation 1:").should("exist");
    cy.contains("Relation 2:").should("exist");
    cy.contains("Relation 3:").should("exist");
    cy.contains("Relation 4:").should("exist");   

    cy.contains("Asset Id 1:").should("exist");
    cy.contains("Asset Id 2:").should("exist");
    cy.contains("Asset Id 3:").should("exist");
    cy.contains("Asset Id 4:").should("exist");
  }); 

  it("displays button elements correctly", () => {    
    cy.contains("Save").should("exist");
    cy.contains("Cancel").should("exist");
  }); 
});
