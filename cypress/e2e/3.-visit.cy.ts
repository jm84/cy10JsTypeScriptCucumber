describe("basics", () => {
  let textToInput = "";
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

  it("getElement", () => {
    cy.get("input#newButtonName");
  });

  it("type", () => {
    textToInput = "hello";
    cy.get("input#newButtonName").type(textToInput);
  });

  it("click on button", () => {
    textToInput = "hello";
    cy.get("input#newButtonName").type(textToInput);
    cy.get("button#updatingButton")
      .click()
      .then((btn) => {
        let txtbtn = btn.text();
        expect(txtbtn).to.be.equal(textToInput);
      });
  });
  it("click on button TDD", () => {
    textToInput = "hello";
    cy.get("input#newButtonName").type(textToInput);
    // usamos should si no vamos a hacer nada más que validar. En caso que necesitemos hacer alguna acción,
    // algun calculo o dejar un log, se puede usar el then en lugar de should. y en ese caso el should no funcinoría.
    cy.get("button#updatingButton").click().should("have.text", textToInput);
  });
});
