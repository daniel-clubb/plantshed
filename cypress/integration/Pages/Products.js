describe ("Product Page", () => {
    it("renders filter", () => {
        cy.visit("/Products")
        cy.get("div").should("contain", 'Products')
    })
});