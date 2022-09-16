import { should } from "chai";

describe("locator", () => {
  beforeEach(() => {
    cy.visit("/dynamicid");
  });

  it("cy.contains example", () => {
    cy.contains("Button with Dynamic ID").should(
      "have.text",
      "Button with Dynamic ID"
    );
  });

  it("cy.get + find example", () => {
    cy.get("div").find("button").should("have.text", "Button with Dynamic ID");
  });

  it("css selector using an attribute example", () => {
    cy.get(`button[class="btn btn-primary"]`).should(
      "have.text",
      "Button with Dynamic ID"
    );
  });

  it("css selector using a class example", () => {
    cy.get(`.btn-primary`).should("have.text", "Button with Dynamic ID");
  });
});
