describe("Login Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/"); // Visit the login page
  });

  it("should display login form elements", () => {
    cy.get("input[name='Username']").should("exist");
    cy.get("input[name='Password']").should("exist");
    cy.contains("Login").should("exist");
    cy.contains("Create A New Account").should("exist");
  });

  it("should display error message for invalid login", () => {
    cy.get("input[name='Username']").type("invalid_username");
    cy.get("input[name='Password']").type("invalid_password");
    cy.contains("Login").click();

    cy.contains("Invalid username or password").should("exist");
  });

  it("should redirect to dashboard on successful login", () => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/login",
      status: 200,
      response: { message: "Login successful", token: "mockToken" },
    }).as("login");

    cy.get("input[name='username']").type("valid_username");
    cy.get("input[name='password']").type("valid_password");
    cy.contains("Login").click();

    cy.wait("@login");

    cy.url().should("include", "http://localhost:3000/asset/view");
    cy.window().its("localStorage.token").should("equal", "mockToken");
  });
});