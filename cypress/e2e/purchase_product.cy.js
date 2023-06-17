import productPage from "../support/pages/product_page";
import cartPage from "../support/pages/cart_page";
import checkoutPage from "../support/pages/checkout_page";
import overviewPage from "../support/pages/overview_page";
import completePage from "../support/pages/complete_page";
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
    productPage.selectProduct(products.SauceLabsBikeLightLocator);
    productPage.viewCart();
    cartPage.validateCartIsOpenedSuccessfully();
    //productPage.verifyProductIsaddedToCart();
  });

  it("Order single product", () => {
    cartPage.clickOnCheckoutButton();
    checkoutPage.verifyRedirectionToCheckoutPage();
    checkoutPage.typeInfo();
    checkoutPage.clickOnContinueButton();
    overviewPage.verifyOverviewPageAppears();
    overviewPage.clickOnFinishButton();
    completePage.verifyOrderIsCompleted();
  });

  // it("Select a product", () => {
  //   productPage.selectProduct(products.SauceLabsBikeLight);
  //   productPage.verifyProductIsaddedToCart();
  // });

  // it("Select all products", () => {
  //   productPage.selectAllProducts();
  // });
});
