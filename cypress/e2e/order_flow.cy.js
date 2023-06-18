import productPage from "../support/pages/product_page";
import cartPage from "../support/pages/cart_page";
import checkoutPage from "../support/pages/checkout_page";
import overviewPage from "../support/pages/overview_page";
import completePage from "../support/pages/complete_page";
describe("Ordering products test cases", () => {
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

  it("Order with no products in cart", () => {
    productPage.verifyProductIsaddedToCart("");
  });

  it("Order single product ", () => {
    productPage.selectProduct(products.SauceLabsBikeLightLocator);
    productPage.verifyProductIsaddedToCart(1);
  });

  it("Order 2 products", () => {
    productPage.selectProduct(products.SauceLabsBikeLightLocator);
    productPage.selectProduct(products.SauceLabsBackpackLocator);
    productPage.verifyProductIsaddedToCart(2);
  });

  it("Order all products", () => {
    productPage.selectAllProducts();
    productPage.verifyProductIsaddedToCart(6);
  });

  afterEach(() => {
    productPage.viewCart();
    cartPage.validateCartIsOpenedSuccessfully();
    cartPage.clickOnCheckoutButton();
    checkoutPage.verifyRedirectionToCheckoutPage();
    checkoutPage.typeInfo();
    checkoutPage.clickOnContinueButton();
    overviewPage.verifyOverviewPageAppears();
    overviewPage.clickOnFinishButton();
    completePage.verifyOrderIsCompleted();
    completePage.clickBackToHomeButton();
    productPage.verifyProductPageRedirection();
  });
});
