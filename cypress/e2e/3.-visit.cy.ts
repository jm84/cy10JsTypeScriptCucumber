describe("basics", () => {
  beforeEach(() => {
    cy.visit("/textinput");
  });
  it("visit Explanation- subject yielded ", () => {
    cy.url().then((url) => {
      cy.log(`this is the current url: ${url}`);
    });
  });

  it("visit Explanation- validation url ", () => {
    cy.url().then((url) => {
      cy.log(`this is the current url: ${url}`);
      expect(url).to.contain("/textinput");
    });
  });

  it("title validation", () => {
    cy.title().then((title) => {
      expect(title).to.be.equal("Text Input");
    });
  });
});
