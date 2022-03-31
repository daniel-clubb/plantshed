describe("Home Page", () => {
  it("renders div", () => {
    cy.visit("/");
    cy.get("div").should(
      "contain",
      "We at plantshed sell a variety of flowers, plants and freshly brewed coffee."
    );
  });
});
