describe("About Us Page", () => {
  it("renders paragraph (div) describing Plantshed", () => {
    cy.visit("/AboutUs")
    cy.get("div#aboutus-paragraph")
      .should("have.id", "aboutus-paragraph")
      .should(
        "contain",
        "PlantShed debuted their floral cafés in 2018 in both Nolita and on the Upper West Side. The concept introduced a unique retail experience incorporating both a traditional floral and plant shop with a wellness-focused café. Challenging what a conventional retail space should entail, PlantShed’s floral cafes emphasize a lifestyle centered around nature. A lush oasis filled with tropical foliage, cacti, and succulents along with premium flowers sourced from all over the world creates a space where busy New Yorkers can slow down and embrace café culture in its most unique form."
      );
  });

  it("renders the title", () => {
    cy.visit("/AboutUs")
    cy.get('div#aboutus-title').should("contain", 'About PlantShed')
  })
});
