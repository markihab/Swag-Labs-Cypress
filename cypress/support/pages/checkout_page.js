class checkoutPage {
  elements = {
    checkoutTitle: () => cy.get(".header_secondary_container"),
    firstName: () => cy.get("#first-name"),
    lastName: () => cy.get("#last-name"),
    postalCode: () => cy.get("#postal-code"),
    continueButton: () => cy.get("#continue"),
    cancelButton: () => cy.get("#cancel"),
  };

  typeInfo() {
    this.elements.firstName().type("Mark");
    this.elements.lastName().type("Missak");
    this.elements.postalCode().type("55221");
  }

  verifyRedirectionToCheckoutPage() {
    this.elements
      .checkoutTitle()
      .should("have.text", "Checkout: Your Information");
  }

  clickOnContinueButton() {
    this.elements.continueButton().click();
  }

  clickOnCancelButton() {
    this.elements.cancelButton().click();
  }
}

export default new checkoutPage();
