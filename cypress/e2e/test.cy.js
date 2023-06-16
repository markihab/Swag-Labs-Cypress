import productPage from "../support/pages/product_page";
describe("Login", () => {
  //const productPage = new ProductsPage();
  before(() => {
    cy.fixture("example.json").then((data) => {
      //this.data = data;
      globalThis.data = data;
    });
    cy.fixture("products.json").then((products) => {
      //this.data = data;
      globalThis.products = products;
    });
  });

  beforeEach(() => {
    cy.loginToSauceDemo(data.email, data.password);
  });

  it("Select a product", () => {
    productPage.selectProduct(products.SauceLabsBikeLight);
    productPage.verifyProductIsaddedToCart();
  });

  //   it("Remove a product", () => {
  //     productPage.removeProduct(products.SauceLabsBikeLight);
  //     productPage.verifyProductIsRemovedFromCart();
  //   });

  it("Select all products", () => {
    productPage.selectAllProducts();
  });

  it("View Cart test case", () => {
    productPage.viewCart();
  });
});
