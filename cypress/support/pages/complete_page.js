class completePage {
  elements = {
    successMessage: () => cy.get(".complete-header"),
    backToHomeButton: () => cy.get("#back-to-products"),
  };

  verifyOrderIsCompleted() {
    this.elements
      .successMessage()
      .should("have.text", "Thank you for your order!");
  }

  clickBackToHomeButton() {
    this.elements.backToHomeButton().click();
  }
}
export default new completePage();
