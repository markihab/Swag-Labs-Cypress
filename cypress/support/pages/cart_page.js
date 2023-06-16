class CartPage {
  validateCartIsOpenedSuccessfully() {
    cy.get(".title").should("have.text", "Your Cart");
  }

  removeItemFromCart() {}
}
export default CartPage;
