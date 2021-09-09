describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navigate to Tuesday", () => {
    cy.visit("/");
  
    cy.contains("li", "Tuesday") //[data-testid=day] not passing
      .click()
      .should("have.class", "day-list__item--selected")
  });

});