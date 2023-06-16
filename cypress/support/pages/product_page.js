class productPage {
  elements = {
    addToCartButton: (productName) => cy.get(`#add-to-cart-${productName}`),

    removeFromCartButton: (productName) => cy.get(`#remove-${productName}`),

    selectAllProducts: () => cy.get(".inventory_item"),

    shoppingCartIcon: () => cy.get(".shopping_cart_link"),
  };

  selectProduct(productName) {
    this.elements.addToCartButton(productName).click();
  }

  selectAllProducts() {
    this.elements.selectAllProducts().each(($el) => {
      cy.wrap($el).contains("Add to cart").click();
    });
  }

  verifyProductIsaddedToCart() {
    this.elements.shoppingCartIcon().should("have.text", "1");
  }

  removeProduct(productName) {
    this.elements.removeFromCartButton(productName).click();
  }

  verifyProductIsRemovedFromCart() {
    this.elements.shoppingCartIcon().should("have.text", "");
  }

  viewCart() {
    this.elements.shoppingCartIcon().click();
  }
}

export default new productPage();
