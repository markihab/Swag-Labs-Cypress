class cartPage {
  elements = {
    getTitle: () => cy.get(".title"),
    removeItemButton: (productName) =>
      cy.get(".inventory_item_name").contains(productName),
    continueShoppingButton: () => cy.get("#continue-shopping"),
    checkoutButton: () => cy.get("#checkout"),
  };

  validateCartIsOpenedSuccessfully() {
    this.elements.getTitle().should("have.text", "Your Cart");
  }

  removeItemFromCart(productName) {
    this.elements.removeItemButton(productName).click();
  }

  clickOnContinueShoppingButton() {
    this.elements.continueShoppingButton().click();
  }

  clickOnCheckoutButton() {
    this.elements.checkoutButton().click();
  }
}
export default new cartPage();
