class ProductsPage {
  selectProduct(productName) {
    cy.get(`#add-to-cart-${productName}`).click({ force: true });
  }
}

export default ProductsPage;
