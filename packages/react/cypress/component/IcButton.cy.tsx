/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { IcButton } from "../../src/components";
import { SlottedSVG } from "../../src";
import { CYPRESS_AXE_OPTIONS } from "../utils/a11y";
import { mount } from "cypress/react";


const submitForm = (ev: React.FormEvent<HTMLFormElement>) => {
  ev.preventDefault();
  console.log("foo");
};


const DARK_BG_STYLE = {
  backgroundColor: "#2c2f34",
  display: "inline-block",
  padding: "6px 10px",
};

const SLOTTED_ICON = (
  <SlottedSVG
    slot="left-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
  </SlottedSVG>
);

const SLOTTED_RIGHT_ICON = (
  <SlottedSVG
    slot="right-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
  </SlottedSVG>
);

const SLOTTED_ICON_NO_VIEWBOX = (
  <SlottedSVG
    slot="left-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
  </SlottedSVG>
);

describe("IcButton", () => {
  it("renders", () => {
    mount(<IcButton>Test</IcButton>);

    cy.get("ic-button").contains("Test").should("be.visible");
  });

  it("should pass onclick method", () => {
    mount(
      <IcButton
        onClick={(e) => {
          e.currentTarget.innerText = "clicked";
        }}
      >
        Test
      </IcButton>
    );
    cy.checkHydrated("ic-button");
    cy.clickOnButton("ic-button");
  });

  it("should not be clickable when disabled", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(
      <IcButton disabled onClick={() => console.log("foo")}>
        Disabled
      </IcButton>
    );

    cy.checkHydrated("ic-button");
    cy.clickOnButton("ic-button");

    cy.get("@spyWinConsoleLog").should("not.be.calledOnce");
  });

  it("should test aria-describedby being updated", () => {
    mount(
      <div>
        <span id="button-description">This button does something amazing</span>
        <IcButton
          onClick={() => {
            const descEl = document.querySelector(
              "#button-description"
            ) as HTMLSpanElement;
            if (descEl) {
              descEl.innerText = "See, I told you it was amazing!";
            }
          }}
          aria-describedby="button-description"
        >
          Button
        </IcButton>
      </div>
    );

    cy.checkHydrated("ic-button");

   
     cy.findShadowEl("ic-button", "button").should("have.attr", "aria-describedby");
     cy.clickOnButton("ic-button");
     cy.findShadowEl("ic-button","#button-description").should("exist")
      .should("have.text", "See, I told you it was amazing!");
  });

  it("should have loading bar when loading", () => {
    mount(<IcButton loading>Loading</IcButton>);

    cy.checkHydrated("ic-button");
    cy.findShadowEl("ic-button", "ic-loading-indicator") .should("exist");

  });

  it("should not be clickable when loading", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(<IcButton loading>Loading</IcButton>);

    cy.checkHydrated("ic-button");
    cy.findShadowEl("ic-button", "ic-loading-indicator") .should("exist");
    cy.clickOnButton("ic-button");
    cy.get("@spyWinConsoleLog").should("not.be.calledOnce");
  });

  it("should clear text field value when reset button inside form tag", () => {
    mount(
      <form>
        <input type="text" id="name" />
        <IcButton id="ic-button" type="reset">
          Reset
        </IcButton>
      </form>
    );
    cy.get("#name").as("textInput");
    cy.get("@textInput").type("foo");

    cy.get("@textInput").should("have.value", "foo");

    cy.checkHydrated("ic-button");
    cy.clickOnButton("ic-button");

    cy.get("@textInput").should("have.value", "");
  });

  it("should not clear text field value if reset button outside of form tag", () => {
    mount(
      <div>
        <form>
          <input type="text" id="name" />
        </form>
        <IcButton id="ic-button" type="reset">
          Reset
        </IcButton>
      </div>
    );
    cy.get("#name").as("textInput");
    cy.get("@textInput").type("foo");

    cy.get("@textInput").should("have.value", "foo");

    cy.checkHydrated("ic-button");
    cy.clickOnButton("ic-button");

    cy.get("@textInput").should("have.value", "foo");
  });

  it("should submit form on button click if submit button inside form tag", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(
      <form onSubmit={submitForm}>
        <input type="text" id="name" />
        <IcButton id="ic-button" type="submit">
          Submit
        </IcButton>
      </form>
    );

    cy.checkHydrated("ic-button");
    cy.clickOnButton("ic-button");
    cy.get("@spyWinConsoleLog").should("be.calledOnce");
  });

  it("should not submit form on button click if submit button outside form tag", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(
      <div>
        <form onSubmit={submitForm}>
          <input type="text" id="name" />
        </form>
        <IcButton id="ic-button" type="submit">
          Submit
        </IcButton>
      </div>
    );

    cy.get("#name").as("textInput");
    cy.get("@textInput").type("foo");

    cy.get("@textInput").should("have.value", "foo");
    cy.checkHydrated("ic-button");

    cy.clickOnButton("ic-button");

    cy.get("@textInput").should("have.value", "foo");
    cy.get("@spyWinConsoleLog").should("not.be.calledOnce");
  });

  it("should emit icFocus on focus event", () => {
    // Listen to icFocus being emitted by IcButton
    mount(
      <IcButton id="ic-button" onClick={() => console.log("Hello World")}>
        Primary
      </IcButton>
    );

    cy.checkHydrated("ic-button");

    cy.get("ic-button").invoke("on", "icFocus", cy.stub().as("icFocus"));

    cy.get("ic-button").shadow().find("button").focus();

    cy.get("ic-button").should("have.focus");
    cy.get("@icFocus").should("have.been.calledOnce");
  });

  it("should emit icBlur on blur event", () => {
    // Listen to icBlur being emitted by IcButton
    mount(<IcButton id="ic-button">Primary</IcButton>);
    cy.checkHydrated("ic-button");

    cy.get("ic-button").invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.get("ic-button").shadow().find("button").focus();
    cy.get("ic-button").should("have.focus");
    cy.get("ic-button").blur();
    cy.get("@icBlur").should("have.been.calledOnce");
    
  });
});

describe("IcButton Visual Regression Testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders text based primary buttons", () => {
    mount(
      <div>
        <div id="primary-buttons">
          <IcButton
            variant="primary"
            id="mybuttonid"
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="primary" disabled>
            Button
          </IcButton>
          <IcButton variant="primary" loading>
            Button
          </IcButton>
          <IcButton
            variant="primary"
            appearance="dark"
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="primary" disabled appearance="dark">
            Button
          </IcButton>
          <IcButton variant="primary" loading appearance="dark">
            Button
          </IcButton>
          <div style={DARK_BG_STYLE}>
            <IcButton
              variant="primary"
              appearance="light"
              onClick={() => alert("test")}
            >
              Button
            </IcButton>
            <IcButton variant="primary" disabled appearance="light">
              Button
            </IcButton>
            <IcButton variant="primary" loading appearance="light">
              Button
            </IcButton>
          </div>
        </div>
      </div>
    );

    cy.compareSnapshot("primary");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders text based secondary buttons", () => {
    mount(
      <div>
        <div id="secondary-buttons">
          <IcButton
            variant="secondary"
            id="mybuttonid"
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="secondary" disabled>
            Button
          </IcButton>
          <IcButton variant="secondary" loading>
            Button
          </IcButton>
          <IcButton
            variant="secondary"
            appearance="dark"
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="secondary" disabled appearance="dark">
            Button
          </IcButton>
          <IcButton variant="secondary" loading appearance="dark">
            Button
          </IcButton>
          <div style={DARK_BG_STYLE}>
            <IcButton
              variant="secondary"
              appearance="light"
              onClick={() => alert("test")}
            >
              Button
            </IcButton>
            <IcButton variant="secondary" disabled appearance="light">
              Button
            </IcButton>
            <IcButton variant="secondary" loading appearance="light">
              Button
            </IcButton>
          </div>
        </div>
      </div>
    );

    cy.compareSnapshot("secondary");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders text based tertiary buttons", () => {
    mount(
      <div>
        <div id="tertiary-buttons">
          <IcButton
            variant="tertiary"
            id="mybuttonid"
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="tertiary" disabled>
            Button
          </IcButton>
          <IcButton variant="tertiary" loading>
            Button
          </IcButton>
          <IcButton
            variant="tertiary"
            appearance="dark"
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="tertiary" disabled appearance="dark">
            Button
          </IcButton>
          <IcButton variant="tertiary" loading appearance="dark">
            Button
          </IcButton>
          <div style={DARK_BG_STYLE}>
            <IcButton
              variant="tertiary"
              appearance="light"
              onClick={() => alert("test")}
            >
              Button
            </IcButton>
            <IcButton variant="tertiary" disabled appearance="light">
              Button
            </IcButton>
            <IcButton variant="tertiary" loading appearance="light">
              Button
            </IcButton>
          </div>
        </div>
      </div>
    );

    cy.compareSnapshot("tertiary");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders text based destructive buttons", () => {
    mount(
      <div>
        <div id="destructive-buttons">
          <IcButton
            variant="destructive"
            id="mybuttonid"
            onClick={() => alert("test")}
          >
            Button
          </IcButton>
          <IcButton variant="destructive" disabled>
            Button
          </IcButton>
          <IcButton variant="destructive" loading>
            Button
          </IcButton>
        </div>
      </div>
    );

    cy.compareSnapshot("destructive");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with-icon based buttons", () => {
    mount(
      <div>
        <div id="left-buttons">
          <IcButton
            variant="primary"
            id="mybuttonid"
            onClick={() => alert("test")}
          >
            Button
            {SLOTTED_ICON}
          </IcButton>
          <IcButton variant="secondary">
            Button
            {SLOTTED_ICON}
          </IcButton>
          <IcButton variant="tertiary">
            Button
            {SLOTTED_ICON}
          </IcButton>
          <IcButton variant="destructive">
            Button
            {SLOTTED_ICON}
          </IcButton>
          <IcButton variant="primary" disabled>
            Button
            {SLOTTED_ICON}
          </IcButton>
          <IcButton
            variant="primary"
            appearance="dark"
            onClick={() => alert("test")}
          >
            Button
            {SLOTTED_ICON}
          </IcButton>
          <div style={DARK_BG_STYLE}>
            <IcButton
              variant="primary"
              appearance="light"
              onClick={() => alert("test")}
            >
              Button
              {SLOTTED_ICON}
            </IcButton>
          </div>
        </div>
        <div id="right-buttons">
          <IcButton
            variant="primary"
            id="mybuttonid"
            onClick={() => alert("test")}
          >
            Button
            {SLOTTED_RIGHT_ICON}
          </IcButton>
          <IcButton variant="secondary">
            Button
            {SLOTTED_RIGHT_ICON}
          </IcButton>
          <IcButton variant="tertiary">
            Button
            {SLOTTED_RIGHT_ICON}
          </IcButton>
          <IcButton variant="destructive">
            Button
            {SLOTTED_RIGHT_ICON}
          </IcButton>
          <IcButton variant="primary" disabled>
            Button
            {SLOTTED_RIGHT_ICON}
          </IcButton>
          <IcButton
            variant="primary"
            appearance="dark"
            onClick={() => alert("test")}
          >
            Button
            {SLOTTED_RIGHT_ICON}
          </IcButton>
          <div style={DARK_BG_STYLE}>
            <IcButton
              variant="primary"
              appearance="light"
              onClick={() => alert("test")}
            >
              Button
              {SLOTTED_RIGHT_ICON}
            </IcButton>
          </div>
        </div>
      </div>
    );

    cy.compareSnapshot("with-icon");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders different sized buttons", () => {
    mount(
      <div>
        <div id="primary-buttons">
          <IcButton variant="primary" size="small">
            Small
          </IcButton>
          <IcButton variant="primary">Default</IcButton>
          <IcButton variant="primary" size="large">
            Large
          </IcButton>
          <IcButton variant="primary" size="small">
            Small
            {SLOTTED_ICON}
          </IcButton>
          <IcButton variant="primary">
            Default
            {SLOTTED_ICON}
          </IcButton>
          <IcButton variant="primary" size="large">
            Large
            {SLOTTED_ICON}
          </IcButton>
        </div>
      </div>
    );

    cy.compareSnapshot("size");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with icon buttons without viewbox", () => {
    mount(
      <div>
        <div id="primary-buttons">
          <IcButton variant="primary" size="small">
            Small
            {SLOTTED_ICON_NO_VIEWBOX}
          </IcButton>
          <IcButton variant="primary">
            Default
            {SLOTTED_ICON_NO_VIEWBOX}
          </IcButton>
          <IcButton variant="primary" size="large">
            Large
            {SLOTTED_ICON_NO_VIEWBOX}
          </IcButton>
        </div>
      </div>
    );

    cy.compareSnapshot("icon-without-viewbox");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders full width buttons", () => {
    mount(
      <div>
        <div id="left-buttons">
          <IcButton variant="primary" fullWidth>
            Button
            {SLOTTED_ICON}
          </IcButton>
          <IcButton variant="secondary" fullWidth>
            Button
            {SLOTTED_ICON}
          </IcButton>
          <IcButton variant="tertiary" fullWidth>
            Button
            {SLOTTED_ICON}
          </IcButton>
          <IcButton variant="destructive" fullWidth>
            Button
            {SLOTTED_ICON}
          </IcButton>
          <IcButton variant="primary" disabled fullWidth>
            Button
            {SLOTTED_ICON}
          </IcButton>
          <IcButton variant="primary" appearance="dark" fullWidth>
            Button
            {SLOTTED_ICON}
          </IcButton>
        </div>
      </div>
    );

    cy.compareSnapshot("full-width");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders icon buttons", () => {
    mount(
      <div>
        <div id="icon-buttons">
          <IcButton
            aria-label="friendly button label"
            variant="icon"
            size="small"
          >
            {SLOTTED_ICON}
          </IcButton>
          <IcButton aria-label="friendly button label" variant="icon">
            {SLOTTED_ICON}
          </IcButton>
          <IcButton
            aria-label="friendly button label"
            variant="icon"
            size="large"
          >
            {SLOTTED_ICON}
          </IcButton>
          <IcButton aria-label="friendly button label" variant="icon" disabled>
            {SLOTTED_ICON}
          </IcButton>
          <IcButton
            aria-label="friendly button label"
            variant="icon"
            appearance="dark"
          >
            {SLOTTED_ICON}
          </IcButton>
          <div style={DARK_BG_STYLE}>
            <IcButton
              aria-label="friendly button label"
              variant="icon"
              appearance="light"
            >
              {SLOTTED_ICON}
            </IcButton>
            <IcButton
              aria-label="friendly button label"
              variant="icon"
              appearance="light"
              disabled
            >
              {SLOTTED_ICON}
            </IcButton>
          </div>
        </div>
      </div>
    );

    cy.compareSnapshot("icon");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });
});
