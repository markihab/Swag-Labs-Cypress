class overviewPage {
  elements = {
    overviewTitle: () => cy.get(".title"),
    finishButton: () => cy.get("#finish"),
    cancelButton: () => cy.get("#cancel"),
  };

  verifyOverviewPageAppears() {
    this.elements.overviewTitle().should("have.text", "Checkout: Overview");
  }

  clickOnFinishButton() {
    this.elements.finishButton().click();
  }

  clickCancelButton() {
    this.elements.cancelButton().click();
  }
}
export default new overviewPage();
