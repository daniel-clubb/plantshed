describe ("Checkout Page", () => {
    it("renders filter", () => {
        cy.visit("/Checkout")
        cy.get("h1").should("contain", 'Checkout')
    })
});