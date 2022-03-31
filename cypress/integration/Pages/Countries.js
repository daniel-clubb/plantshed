describe("Countries Page", () => {
  it("renders h1", () => {
    cy.visit("/Countries");
    cy.get("h1").should("contain", "Countries");
  });
});
