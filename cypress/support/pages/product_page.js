class productPage {
  elements = {
    productPageTitle: () => cy.get(".title"),

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

  verifyProductIsaddedToCart(noOfProducts) {
    this.elements.shoppingCartIcon().should("have.text", noOfProducts);
  }

  // verifyMultipleProductsIsAddedToCart(noOfProducts){
  //   this.elements.shoppingCartIcon().should("have.text",noOfProducts);
  // }

  removeProduct(productName) {
    this.elements.removeFromCartButton(productName).click();
  }

  verifyProductIsRemovedFromCart() {
    this.elements.shoppingCartIcon().should("have.text", "");
  }

  viewCart() {
    this.elements.shoppingCartIcon().click();
  }

  verifyProductPageRedirection() {
    this.elements.productPageTitle().should("have.text", "Products");
  }
}

export default new productPage();
