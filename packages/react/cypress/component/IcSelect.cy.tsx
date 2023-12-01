/// <reference types="Cypress" />
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable cypress/no-unnecessary-waiting */

import React from "react";
import { mount } from "@cypress/react";
import { IcSelect } from "../../src/components";
import { CYPRESS_AXE_OPTIONS } from "../utils/a11y";

const coffeeOptions = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso" },
  { label: "Flat White", value: "flatwhite" },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Americano", value: "americano" },
  { label: "Mocha", value: "mocha" },
];

const coffeeOptionsDescriptions = [
  {
    label: "Cappuccino",
    value: "cappuccino",
    description: "Coffee frothed up with pressurised steam",
  },
  {
    label: "Americano",
    value: "americano",
    description: "Espresso coffee diluted with hot water",
  },
  { label: "Mocha", value: "mocha", description: "Coffee with chocolate" },
];

const coffeeDisabledOption = [
  { label: "Americano", value: "americano", disabled: true },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Latte", value: "latte", disabled: true },
  { label: "Mocha", value: "mocha" },
];

const coffeeCustomElements = [
  {
    label: "Cappuccino",
    value: "Cap",
  },
  {
    label: "Latte",
    value: "Lat",
    element: {
      component: `<ic-status-tag label="Neutral status"></ic-status-tag>`,
      ariaLabel: "Neutral status tag",
    },
  },
  {
    label: "Americano",
    value: "Ame",
    icon: `<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><g id="warning"><path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>`,
  },
];

const groupCoffeeOption = [
  {
    label: "Fancy",
    children: [
      { label: "Cappuccino", value: "Cap" },
      { label: "Flat white", value: "Flat" },
    ],
  },
  {
    label: "Boring",
    children: [
      { label: "Filter", value: "Fil" },
      { label: "Latte", value: "Lat" },
    ],
  },
];

const groupAndDescriptionCoffeeOption = [
  {
    label: "Fancy",
    children: [
      {
        label: "Cappuccino",
        description: "Coffee frothed up with pressurised steam",
        value: "Cap",
      },
      { label: "Flat white", value: "Flat" },
    ],
  },
  {
    label: "Boring",
    children: [
      { label: "Filter", value: "Fil" },
      { label: "Latte", value: "Lat" },
    ],
  },
];

const recommendedCoffeeOption = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso", recommended: true },
  { label: "Flat White", value: "flatwhite" },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Americano", value: "americano", recommended: true },
  { label: "Mocha", value: "mocha" },
];

const validationCoffeeOption = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso" },
  { label: "Flat White", value: "flatwhite" },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Americano", value: "americano" },
  { label: "Mocha", value: "mocha" },
];

const searchableCoffeeOption = [
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat" },
  { label: "Americano", value: "Ame" },
  { label: "Flat white", value: "Fla" },
  { label: "Mocha", value: "Moc" },
  { label: "Macchiato", value: "Mac" },
  { label: "Café au lait", value: "Caf" },
  { label: "Espresso", value: "Esp" },
  { label: "Cortado", value: "Cor" },
  { label: "Latte macchiato", value: "Lam" },
];

const searchableDescriptionsCoffeeOption = [
  {
    label: "Cappuccino",
    value: "Cap",
    description: "Coffee frothed up with pressurised steam",
  },
  {
    label: "Americano",
    value: "Ame",
    description: "Espresso coffee diluted with hot water",
  },
  { label: "Mocha", value: "Moc", description: "Coffee with chocolate" },
  {
    label: "Latte",
    value: "Lat",
    description: "Milky coffee with one or two shots of espresso",
  },
  {
    label: "Flat white",
    value: "Fla",
    description: "Coffee with frothed milk poured over espresso",
  },
  {
    label: "Macchiato",
    value: "Mac",
    description: "Espresso coffee topped with steamed milk",
  },
  {
    label: "Café au lait",
    value: "Caf",
    description: "Brewed coffee with steamed milk",
  },
  {
    label: "Espresso",
    value: "Esp",
    description: "Concentrated form of coffee",
  },
  { label: "Cortado", value: "Cor", description: "Coffee cut with milk" },
  {
    label: "Latte macchiato",
    value: "Lam",
    description: "Espresso coffee with milk and a spoonful of foamed milk",
  },
];

const searchableGroupCoffeeOption = [
  {
    label: "Fancy",
    children: [
      { label: "Cappuccino", value: "Cap" },
      { label: "Flat white", value: "Flat" },
      { label: "Mocha", value: "Moc" },
      { label: "Macchiato", value: "Mac" },
      { label: "Cortado", value: "Cor" },
      { label: "Latte macchiato", value: "Lam" },
    ],
  },
  {
    label: "Boring",
    children: [
      { label: "Filter", value: "Fil" },
      { label: "Latte", value: "Lat" },
      { label: "Americano", value: "Ame" },
      { label: "Espresso", value: "Esp" },
    ],
  },
];
const coffeeOptionsReadonly = [
  { label: "Espresso", value: "espresso", readonly: true },
  { label: "Double Espresso", value: "doubleespresso", readonly: true },
  { label: "Flat White", value: "flatwhite", readonly: true },
  { label: "Cappuccino", value: "cappuccino", readonly: true },
  { label: "Americano", value: "americano", readonly: true },
  { label: "Mocha", value: "mocha", readonly: true },
];

describe("IcSelect", () => {
  it("should render when no options are provided", () => {
    mount(<IcSelect label="What is your favourite coffee?" />);
    cy.checkHydrated("ic-select");
    cy.get("ic-select").should("exist");
  });

  it("should render options correctly", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl("ic-select", "ic-input-component-container")
      .should("have.length", "6")
      .each(($t1) => {
        cy.log($t1.text());
      });
  });

  it("should open, set focus on menu and set aria-expanded to 'true' when input clicked", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "button").should("have.attr", "aria-expanded");
    cy.findShadowEl("ic-select", "ic-menu ul")
      .should("be.visible")
      .should("have.focus");
  });

  it("when an option is selected it should call icChange when select is focused and downArrow pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.get(".ic-input").should("contain.value", "espresso");
  });

  it("when no option is selected it should open menu, apply focus style on first option and set as value when clicked and have expanded icon", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "[data-value='espresso']")
      .contains("Espresso")
      .should("have.text", "Espresso");
    cy.findShadowEl("ic-select", ".expand-icon")
      .should("exist")
      .should("have.class", "expand-icon expand-icon-open");
  });

  it("when an option is selected it should open menu when Enter is pressed ", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{enter}"
    );
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
  });

  it("should open menu, apply focus style on last option and set as value when Up Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{upArrow}"
    );
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.get(".ic-input").should("contain.value", "mocha");
  });

  it("should keep menu closed when Backspace, Home, End and Escape are pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{backspace}"
    );
    cy.get("ic-select").shadow().find("ic-menu ul li").should("not.be.visible");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{backspace}"
    );
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("{esc}");
    cy.get("ic-select").shadow().find("ic-menu ul li").should("not.be.visible");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("{Home}");
    cy.get("ic-select").shadow().find("ic-menu ul li").should("not.be.visible");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("{End}");
    cy.get("ic-select").shadow().find("ic-menu ul li").should("not.be.visible");
  });

  it("when an option is selected it should open menu, apply focus style on first option and set as value when Down Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.clickOnShadowEl("ic-select", '[data-value="doubleespresso"]');
    cy.get(".ic-input").should("contain.value", "doubleespresso");
  });

  it("when an option is selected it should move focus to first option and set as value when focus is on last option and Down Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{upArrow}"
    );
    cy.get(".ic-input").should("contain.value", "mocha");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.get(".ic-input").should("contain.value", "espresso");
  });

  it("should move focus to previous option and set as value when Up Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{upArrow}"
    );
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{upArrow}"
    );
    cy.get(".ic-input").should("contain.value", "americano");
  });

  it("should move focus to last option and set as value when focus is on first option and Up Arrow is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{upArrow}"
    );
    cy.get(".ic-input").should("contain.value", "mocha");
  });

  it("should move focus to first option and set as value when Home is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("{Home}");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get(".ic-input").should("contain.value", "espresso");
  });

  it("should move focus to last option and set as value when End is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{upArrow}"
    );
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("{End}");
    cy.get(".ic-input").should("contain.value", "mocha");
  });

  it("should display a check next to the selected option and set aria-selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "[data-value='espresso']").should(
      "have.attr",
      "aria-selected"
    );
    cy.findShadowEl("ic-select", "[data-value='espresso'] span").should(
      "have.class",
      "check-icon"
    );
  });

  it("should display a check next to the selected option and set aria-selected when a default value is applied", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="espresso"
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.clickOnShadowEl("ic-select", "[data-value='espresso']");
    cy.findShadowEl("ic-select", "[data-value='espresso']");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "[data-value='espresso']").should(
      "have.attr",
      "aria-selected"
    );
    // cy.findShadowEl("ic-select", "[data-value='espresso']").should("have.class", "check-icon");
  });

  it("should display clear button if the 'show-clear-button' prop is supplied and an option is selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.findShadowEl("ic-select", "#clear-button").should("be.visible");
  });

  it("should clear the input if the clear button is clicked", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.clickOnShadowEl("ic-select", "#clear-button");
    cy.findShadowEl("ic-select", "ic-menu ul li").should("not.be.visible");
  });

  it("should close menu when input is clicked while open and set focus on it", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.clickOnShadowEl("ic-select", "[data-value='espresso']");
    cy.findShadowEl("ic-select", "ic-menu ul li").should("not.be.visible");
  });

  // not sure
  it.skip("should close menu when an option is clicked, set as value and move focus onto the input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.clickOnShadowEl("ic-select", "[data-value='espresso']");
    cy.findShadowEl("ic-select", "ic-menu ul li").should("not.be.visible");
    cy.focused().should("have.attr", "class", "hydrated");
    cy.findShadowEl("ic-select", "ic-input-component-container")
      .contains("Espresso")
      .should("be.visible");
  });

  it("should close menu when Space is pressed and move focus to the input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(" ");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get("ic-select").shadow().find("ic-menu ul li").should("not.be.visible");
    cy.focused().should("have.attr", "class", "hydrated");
  });

  it("should close menu when Enter is pressed and set focus to the input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "[data-value='espresso']").type("{enter}");
    cy.get("ic-select").shadow().find("ic-menu ul li").should("not.be.visible");
    cy.focused().should("have.attr", "class", "hydrated");
  });

  it("should close menu when Escape is pressed and set focus to the input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{upArrow}"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type("{esc}");
    cy.get("ic-select").shadow().find("ic-menu ul li").should("not.be.visible");
    cy.focused().should("have.attr", "class", "hydrated");
  });

  it("should close menu when another element on the page is clicked", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "#clear-button").should("be.visible");
    cy.clickOnShadowEl("ic-select", "#clear-button");
    cy.get("ic-select").shadow().find("ic-menu ul li").should("not.be.visible");
  });

  it("should display the label of the value passed in using the 'value' prop as the selected option", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="espresso"
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").shadow().find("ic-menu ul li").should("not.be.visible");
    cy.get("input").should("have.value", "espresso");
  });

  it("should render options with descriptions", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.getWhatIsFavCoffeeQueTitle("ic-select");
    cy.findShadowEl("ic-select", "ic-menu ul li")
      .should("be.visible")
      .should("have.length", "3")
      .each(($t1) => {
        cy.log($t1.text());
      });
  });

  it("should render the placeholder", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
        placeholder="Cappuccino"
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl("ic-select", "ic-input-component-container")
      .contains("Cappuccino")
      .should("be.visible");
  });

  it("should render as disabled correctly", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
        disabled
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").should("have.class", "disabled hydrated");
    cy.get("ic-select").shadow().find("button").should("be.disabled");
  });

  it("should prevent click on disabled options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
  });

  it("should set aria-disabled and skip focus when option disabled", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl("ic-select", "[aria-disabled='true']").should(
      "not.be.focused"
    );
  });

  it("should render as required correctly", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        required
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select")
      .shadow()
      .contains("What is your favourite coffee? *")
      .should("be.visible");
    cy.get('[required="true"]').should("be.visible");
  });

  it("should render selected value as text when read-only", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="cappuccino"
        readonly
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select")
      .shadow()
      .contains("What is your favourite coffee? *")
      .should("be.visible");
    cy.findShadowEl("ic-select", "ic-typography").should(
      "have.class",
      "readonly-label ic-typography-label hydrated"
    );
    cy.get(".ic-input").should("have.value", "cappuccino");
  });

  it("should render options as groups if they have children", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl("ic-select", ".sc-ic-menu ic-typography")
      .should("have.length", "6")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((group) => {
            cy.log(group);
          });
      });
  });

  it("should render and focus child options correctly", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl("ic-select", ".sc-ic-menu ic-typography")
      .should("have.length", "6")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((childgroup) => {
            cy.log(childgroup);
          });
        cy.findShadowEl("ic-select", '[data-label="Cappuccino"]')
          .focused()
          .should("have.focus");
        cy.findShadowEl("ic-select", '[data-label="Flat white"]')
          .focused()
          .should("have.focus");
        cy.findShadowEl("ic-select", '[data-label="Filter"]')
          .focused()
          .should("have.focus");
        cy.findShadowEl("ic-select", '[data-label="Latte"]')
          .focused()
          .should("have.focus");
      });

    it("should render options at the top of the menu if they are recommended", () => {
      mount(
        <IcSelect
          label="What is your favourite coffee?"
          options={recommendedCoffeeOption}
        />
      );
      cy.checkHydrated("ic-select");
      cy.findShadowEl("ic-select", "ic-input-component-container").type(
        "{downArrow}"
      );
      cy.checkShadowElVisible("ic-select", "ic-menu ul li");
      cy.findShadowEl("ic-select", ".last-recommended-option ").should("exist");
    });
  });

  it("should set aria-invalid if validation status is 'error'", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={validationCoffeeOption}
        validationStatus="error"
        validationText="Error message"
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.get("ic-select").shadow().find('[aria-invalid="true"]').should("exist");
  });

  it("should set the aria-label correctly if an option has a description", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl(
      "ic-select",
      '[aria-label="Cappuccino, Coffee frothed up with pressurised steam"]'
    ).should("exist");
    cy.findShadowEl(
      "ic-select",
      '[aria-label="Americano, Espresso coffee diluted with hot water"]'
    ).should("exist");
    cy.findShadowEl(
      "ic-select",
      '[aria-label="Mocha, Coffee with chocolate"]'
    ).should("exist");
  });

  it("should set the aria-label correctly if an option is within a group", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl(
      "ic-select",
      '[aria-label="Cappuccino, Fancy group"]'
    ).should("exist");
    cy.findShadowEl(
      "ic-select",
      '[aria-label="Flat white, Fancy group"]'
    ).should("exist");
    cy.findShadowEl("ic-select", '[aria-label="Filter, Boring group"]').should(
      "exist"
    );
    cy.findShadowEl("ic-select", '[aria-label="Latte, Boring group"]').should(
      "exist"
    );
  });

  it("should set the aria-label correctly if an option has a description and is within a group", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupAndDescriptionCoffeeOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl(
      "ic-select",
      '[aria-label="Cappuccino, Coffee frothed up with pressurised steam, Fancy group"]'
    ).should("exist");
  });

  it("should call icFocus when focused", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icFocus", cy.stub().as("icFocus"));
    cy.get("ic-select").shadow().find("ic-menu ul").should("have.not.be.focus");
    cy.findShadowEl("ic-select", "button").focus();
    cy.findShadowEl("ic-select", "button").last().should("have.focus");
    cy.get("@icFocus").should("have.been.calledOnce");
  });
  // flakey- passes when run with .only()
  it.skip("should call icBlur when it loses focus", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.get("ic-select").invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.findShadowEl("ic-select", "button").as("btn");
    cy.findShadowEl("ic-select", "button").as("btn").should("have.focus");
    cy.get("ic-select").blur();
    cy.get("@icBlur").should("have.been.called");
  });

  it.skip("Loading should display a loading message and then the options when fetching options externally", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={[]}
        loading
        timeout={5000}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get("ic-select").shadow().find("ic-loading-indicator").should("exist");
    cy.document().invoke(
      "addEventListener",
      "icChange",
      cy.stub().as("icChange")
    );
    cy.get("@icChange").should("have.been.calledOnce");
    // //cy.get("ic-select").shadow().find("ic-input-component-container").type("{downArrow}").type("{enter}");
    // cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    // cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    // cy.get("ic-select").shadow().find("ic-loading-indicator").should("exist");
    // cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChange"));
  });

  // only  pass when run as .only() but in group run it fails
  it.skip("should display a retry button and a custom loading error when it times out and should not update the options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        loading
        timeout={500}
        loadingErrorLabel="Loading Error"
        options={[]}
      />
    );

    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get("ic-select").shadow().find("ic-typography").contains("Loading...");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get("ic-select").shadow().find("#retry-button").should("be.visible");
    cy.get("ic-select").shadow().find("ic-typography").contains("Error");
    cy.get("ic-select").shadow().find("ic-typography").contains("Error");
  });

  // not sure
  it.skip("should focus the retry button on tab and emit icBlur and close the menu when blurring", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        loading
        timeout={5000}
        loading-error-label="Loading Error"
        options={[]}
      />
    );
    // cy.get("ic-select")
    //   .shadow()
    //   .find("ic-input-component-container")
    //   .should("exist");
    //   .click()
    //   .should("be.visible");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    //cy.get('ic-select').shadow().find('ic-loading-indicator').should('exist')

    // cy.get("ic-select")
    //   .shadow()
    //   .find("button")
    //   .focus()
    //   .last()
    //   .should("have.focus");
    // cy.get("@icFocus").should("have.been.calledOnce");
    // cy.get("ic-select").invoke("on", "icBlur", cy.stub().as("icBlur"));
    // //cy.get("ic-select").shadow().find("button").as('btn').focus().should('have.focus')
    // cy.get("ic-select").blur();
    // cy.get("@icBlur").should("have.been.called");
  });

  // retry button not working
  it.skip("should retry loading and keep the menu open when retry button is clicked", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        loading
        timeout={5000}
        loading-error-label="Loading Error"
      />
    );
    cy.get("ic-select").invoke(
      "on",
      "icRetryLoads",
      cy.stub().as("icRetryLoad")
    );
  });

  it.skip("should retry loading and keep the menu open when retry button is pressed with Enter", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        loading
        timeout={5000}
        loading-error-label="Loading Error"
      />
    );
    cy.get("ic-select").invoke(
      "on",
      "icRetryLoads",
      cy.stub().as("icRetryLoad")
    );
  });

  it("searchable should open menu when character is entered in input field and filter options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.get("ic-select").shadow().find("input").type("ca");
    cy.findShadowEl("ic-select", "ic-menu ul li")
      .should("have.length", "3")
      .contains("Café au lait")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((filterOption) => {
            cy.log(filterOption);
          });
      });
  });

  it("searchable should keep the same options when characters are entered and the menu is reopened", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.get("ic-select").shadow().find("input").click();
    cy.get("ic-select").shadow().find("input").type("foo");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-menu ul li")
      .contains("No results found")
      .should("be.visible");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-menu ul li")
      .contains("No results found")
      .should("be.visible");
  });

  it("should display no results state when search term matches none of the options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.get("ic-select").shadow().find("input").click();
    cy.get("ic-select").shadow().find("input").type("zZ");
    cy.findShadowEl("ic-select", "ic-menu ul li")
      .contains("No results found")
      .should("be.visible");
  });

  it("should filter options accordingly when Backspace is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl("ic-select", "input").click();
    cy.findShadowEl("ic-select", "input").type("fi");
    cy.findShadowEl("ic-select", "input").type("{backspace}");
    cy.findShadowEl("ic-select", "input").click();
    cy.findShadowEl("ic-select", "ic-menu ul li")
      .should("have.length", "2")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((filterOp) => {
            cy.log(filterOp);
          });
      });
  });

  it("should filter options when search match position is set to start", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchMatchPosition="start"
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("c");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl("ic-select", "ic-menu")
      .contains("Cappuccino")
      .should("have.text", "Cappuccino");
  });

  it("should include option descriptions in search", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableDescriptionsCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("mo");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get("ic-select").shadow().find(".expand-icon").should("exist").click();
    cy.findShadowEl("ic-select", "ic-menu ul li")
      .should("have.length", "1")
      .should("have.text", "MochaCoffee with chocolate")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((filterOp) => {
            cy.log(filterOp);
          });
      });
  });

  it("should not include group titles in search", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableGroupCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("b");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-menu ul li")
      .contains("No results found")
      .should("be.visible");
  });

  it("should display whole group when group titles included in search", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableGroupCoffeeOption}
        searchable
        includeGroupTitlesInSearch
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("b");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-menu ul li")
      .should("have.length", "4")
      .contains("Latte")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((filterOp) => {
            cy.log(filterOp);
          });
      });
  });

  it("should display a clear button which clears the input when clicked", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{upArrow}"
    );
    cy.findShadowEl("ic-select", "ic-menu ul").type("{Enter}");
    cy.clickOnShadowEl("ic-select", "#clear-button");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("a");
    cy.clickOnShadowEl("ic-select", "#clear-button");
    cy.findShadowEl("ic-select", "ic-input-component-container").should(
      "not.have.text"
    );
  });

  it("should emit the value as null when the input is changed after selecting an option", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{upArrow}"
    );
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.findShadowEl("ic-select", "ic-menu ul")
      .find('[data-value="Cap"]')
      .click({ force: true });
    cy.findShadowEl("ic-select", '[data-value="Cap"]')
      .contains("Cappuccino")
      .should("have.text", "Cappuccino");
    cy.clickOnShadowEl("ic-select", "#clear-button");
  });

  it("should still filter the options when the input is changed after selecting an option", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{upArrow}"
    );
    cy.findShadowEl("ic-select", "ic-menu ul")
      .find('[data-value="Cap"]')
      .click({ force: true });
    cy.findShadowEl("ic-select", "ic-menu ul")
      .contains("Cappuccino")
      .should("have.text", "Cappuccino");
    for (let i = 0; i <= 3; i++) {
      cy.findShadowEl("ic-select", "ic-input-component-container");
      cy.clickOnShadowEl("ic-select", "ic-input-component-container");
      cy.findShadowEl("ic-select", "ic-input-component-container").type(
        "{backspace}"
      );
      cy.clickOnShadowEl("ic-select", "ic-input-component-container");
      cy.findShadowEl("ic-select", "ic-input-component-container").type(
        "{backspace}"
      );
      cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    }
    cy.findShadowEl("ic-select", "ic-menu ul li")
      .should("have.length", "3")
      .contains("Americano")
      .should("be.visible")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((filterOp) => {
            cy.log(filterOp);
          });
      });
  });

  it("should close menu on blur", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{enter}"
    );
    cy.get("ic-select").shadow().find("ic-menu ul li").should("not.be.visible");
  });

  it.skip("should emit icChange on delay", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        debounce={500}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.findShadowEl("ic-select", "ic-input-component-container").type("foo");
    cy.findShadowEl("ic-select", "ic-input-component-container")
      .wait(600)
      .find("foo")
      .should("be.visible");
    cy.get(".ic-input").should("have.value", "foo");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("bar");
    cy.get(".ic-input").should("have.value", "foobar");
  });

  it("should update hidden input to value typed in select searchable input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("bar");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get("input[type='hidden']").should("have.value", "bar");
  });

  it("should keep typed in hidden input value when highlighting menu options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("cap");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get("input[type='hidden']").should("have.value", "cap");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.get("input[type='hidden']").should("have.value", "cap");
  });

  it("should update hidden value from typed to selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("o");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get("input[type='hidden']").should("have.value", "o");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "ic-menu ul li").should("have.length", "7");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.findShadowEl("ic-select", "ic-menu ul")
      .find('[data-value="Cap"]')
      .contains("Cappuccino")
      .should("have.text", "Cappuccino");
  });

  it("should update hidden value from typed to selected to typed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("o");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get("input[type='hidden']").should("have.value", "o");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "ic-menu ul li").should("have.length", "7");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.findShadowEl("ic-select", "ic-menu ul")
      .find('[data-value="Cap"]')
      .contains("Cappuccino")
      .should("have.text", "Cappuccino");
    cy.get("ic-select").shadow().find("ic-input-component-container").type("1");
    cy.get(".ic-input").should("have.value", "Cappuccino1");
  });

  //not sure
  it("should update the value of the input and options when passing the value directly", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("foo");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get(".ic-input").should("contain.value", "foo");
  });

  it("should trigger icChange on input for each typed value", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.findShadowEl("ic-select", "ic-input-component-container").type("f");
    cy.findShadowEl("ic-select", "ic-input-component-container")
      .as("foo")
      .invoke("val", "f")
      .trigger("icChanges");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("o");
    cy.findShadowEl("ic-select", "ic-input-component-container")
      .should("be.visible")
      .as("foo")
      .invoke("val", "f")
      .trigger("icChanges");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("o");
    cy.findShadowEl("ic-select", "ic-input-component-container")
      .should("be.visible")
      .as("foo")
      .invoke("val", "f")
      .trigger("icChanges");
    cy.get(".ic-input")
      .as("foo")
      .invoke("val", "foo")
      .trigger("icChanges", { force: true });
    cy.get("@foo").should("have.value", "foo");
  });

  it("should not trigger icChange on highlighting menu items", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.window().then((win) => {
      cy.spy(win, "alert").as("menuItemHighlighted");
    });
    cy.findShadowEl("ic-select", "ic-input-component-container").trigger(
      "icChanges"
    );
    cy.findShadowEl("ic-select", "ic-menu ul")
      .eq(0)
      .trigger("icChanges", { force: true });
    cy.get("@menuItemHighlighted").should("not.be.called");
  });

  it("should not select a menu option when typing into the searchable input field", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("cap");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-menu ul li").should(
      "not.have.property",
      "[aria-selected]"
    );
    cy.findShadowEl("ic-select", "ic-menu ul li").should(
      "have.not.attr",
      "aria-selected"
    );
  });

  it("should not selet a menu option when one has previously been set and backspace is pressed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("Lat");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.get("ic-select").shadow().find('[data-label="Latte"]').should("exist");
    for (let i = 0; i <= 5; i++) {
      cy.findShadowEl("ic-select", "ic-input-component-container").type(
        "{Backspace}"
      );
    }
    cy.findShadowEl("ic-select", "ic-menu ul li").should(
      "have.not.attr",
      "aria-selected"
    );
  });

  it("should display selected option when selecting a menu option and then opening and closing the menu", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("Lat");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").should(
      "be.visible"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "li[data-value='Lat']").should(
      "have.attr",
      "aria-selected"
    );
  });

  it("hidden input value when on initial load with default value ", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", '[data-label="Espresso"]').should(
      "have.text",
      "Espresso"
    );
  });

  it("should submit hidden input value when updating value, pressing reset to initial value and then submitting ", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", '[data-label="Espresso"]').should(
      "have.text",
      "Espresso"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Backspace}"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.get("ic-select").shadow().find("ic-menu ul li").should("be.visible");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.findShadowEl("ic-select", '[data-label="Double Espresso"]')
      .should("be.visible")
      .should("have.attr", "aria-selected");
    cy.findShadowEl("ic-select", "#clear-button").should("be.visible");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", '[data-label="Espresso"]')
      .should("have.text", "Espresso")
      .should("exist");
  });

  it("should scroll menu", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").should("have.class", "hydrated");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("Ko");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get("ic-select").shadow().find("ic-menu ul li").should("be.visible");
    cy.findShadowEl(
      "ic-select",
      '[aria-label="Latte macchiato"]'
    ).scrollIntoView();
    cy.findShadowEl("ic-select", '[data-label="Cappuccino"]').scrollIntoView();
  });

  it("should only highlight and select enabled options in searchable with arrowDown", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("Test");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", '[data-label="Cappuccino"]').should(
      "have.class",
      "option sc-ic-menu"
    );
    cy.findShadowEl("ic-select", '[aria-label="Americano"]').should(
      "have.class",
      "option disabled-option sc-ic-menu"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.get(".ic-input").should("have.value", "cappuccino");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.get(".ic-input").should("have.value", "mocha");
  });

  it("should only highlight and select enabled options in searchable with arrowUp", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("Test");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{upArrow}"
    );
    cy.findShadowEl("ic-select", '[data-label="Cappuccino"]').should(
      "have.class",
      "option sc-ic-menu"
    );
    cy.findShadowEl("ic-select", '[aria-label="Americano"]').should(
      "have.class",
      "option disabled-option sc-ic-menu"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.get(".ic-input").should("have.value", "mocha");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{upArrow}"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.get(".ic-input").should("have.value", "cappuccino");
  });

  // can't mount reset button component
  it.skip("loading should retry loading and keep the menu open when retry button is pressed with Spacebar", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={[]}
        searchable
        loading
        timeout={500}
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke(
      "on",
      "icRetryLoads",
      cy.stub().as("icRetryLoad")
    );
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-menu ul li ic-typography")
      .should("be.visible")
      .should("have.text", "Loading Error");
    cy.get("ic-select").shadow().find("ic-input-component-container");
  });

  // can't mount clear button component
  it.skip("should cancel loading if the clear button is pressed mid-load", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={[]}
        searchable
        loading
        timeout={500}
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-menu ul li ic-typography")
      .should("be.visible")
      .should("have.text", "Loading Error");
  });

  // can't mount reset button component
  it.skip("should reset to initial value on form reset", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").shadow().find("ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.get(".ic-input").should("have.value", "espresso");
  });

  it.skip("menu should not be visible on initial load if setting default value and disable filter is set", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={[]}
        searchable
        timeout={800}
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").shadow().find("ic-menu ul li").should("not.exist");
  });

  // can't mount reset button component
  it.skip("should reset to initial value on form reset with searchable", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get("ic-select").shadow().find("ic-menu ul li").should("be.visible");
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.get(".ic-input").should("have.value", "Lat");
  });

  //not sure
  it("should render", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
  });

  it("should render a native select when searchable is applied on mobile", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.viewport(320, 480);
    cy.viewport("iphone-5");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.checkShadowElVisible("ic-select", "ic-menu ul li");
  });

  it("should render when no options are provided", () => {
    mount(<IcSelect label="What is your favourite coffee?" options={[]} />);
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get("ic-select").shadow().find("ic-menu ul li").should("not.exist");
  });

  it("should render when no options are provided", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "ic-menu ul li").should(
      "have.class",
      "option disabled-option sc-ic-menu"
    );
  });

  it("should render options as <optgroup>s if they have children", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", ".sc-ic-menu ic-typography")
      .should("have.length", "6")
      .each(($e1) => {
        cy.wrap($e1)
          .invoke("text")
          .then((childgroup) => {
            cy.log(childgroup);
          });
      });
  });

  //select tag not working
  it("should render a required <select> when required", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        required
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get('[required="true"]').should("exist");
  });

  it("should not render a label when the 'hide-label' prop is supplied", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        hide-label
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get('[hide-label="true"]').should("exist");
    cy.get(".ic-input").should("have.value", "");
  });

  it("should render a disabled <select> when the 'disabled' prop is supplied", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
        disabled
      />
    );
    cy.get("ic-select").should("have.class", "disabled hydrated");
    cy.findShadowEl("ic-select", "button").should("be.disabled");
  });

  it("should render the selected value as text instead of rendering a <select> when read-only", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsReadonly}
        readonly
      />
    );
    cy.checkHydrated("ic-select");
    cy.get('[readonly="true"]').should("exist");
    cy.get("ic-select").shadow().find("ic-menu ul li").should("exist");
  });

  it("should render the correct placeholder", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        placeholder="Test placeholder"
      />
    );
    cy.checkHydrated("ic-select");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "button ic-typography").should(
      "have.text",
      "Test placeholder"
    );
  });

  it("should display the value passed in using the 'value' prop as the selected option", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="espresso"
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").shadow().find("ic-menu ul li").should("not.be.visible");
    cy.get("input").should("have.value", "espresso");
  });

  //not sure how to set Attribute
  it("should set the correct name on the hidden input", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
  });

  it("should call icChange when the selected option is changed", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icChange", cy.stub().as("icChanges"));
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{downArrow}"
    );
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.get(".ic-input").should("have.value", "espresso");
  });

  it("should call icFocus when focuseicFocus", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icFocus", cy.stub().as("icFocus"));
    cy.findShadowEl("ic-select", "ic-input-component-container").type(
      "{Enter}"
    );
    cy.get("@icFocus").should("have.been.calledOnce");
  });

  //not working
  it.skip("should call icBlur when it loses focus", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.get("ic-select").invoke("on", "icBlur", cy.stub().as("icBlur"));
    cy.findShadowEl("ic-select", "button").focus();
    cy.findShadowEl("ic-select", "button").should("have.focus").type("{Enter}");
    cy.findShadowEl("ic-select", "button").focus();
    cy.findShadowEl("ic-select", "button").should("have.focus").type("{Enter}");
    cy.get("@icFocus").should("have.been.calledOnce");
    cy.get("ic-select").blur();
    cy.get("@icBlur").should("have.been.called");
  });

  it("should set the 'placeholder' class name if no option is selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "button ic-typography").should(
      "have.class",
      "value-text placeholder ic-typography-body hydrated"
    );
  });

  // not sure
  it.skip("should set the text colour to the primary text colour if an option is selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="espresso"
      />
    );
    // cy.checkHydrated("ic-select");
    // cy.get("ic-select").shadow().find("ic-input-component-container").click()
    // cy.get("ic-select").shadow().find("ic-menu ul li").should('be.visible');
    // .should("have.attr2, "aria-selected");
  });

  // not sure
  it.skip("should change the text colour to the primary text colour when an option is selected", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="espresso"
      />
    );
  });

  // not sure
  it.skip("should add .menu-scroll to menu components when options height is over 320", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="espresso"
      />
    );
  });

  it("should add .menu-scroll to menu components when options are initially set and then populated with large data set", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={searchableCoffeeOption}
        value="espresso"
      />
    );
    cy.checkHydrated("ic-select");
    cy.findShadowEl("ic-select", "ic-input-component-container").type("Ko");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.findShadowEl("ic-select", "button.select-input").should("be.visible");
    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.get("ic-select").shadow().find("ic-menu").should("be.visible");
    cy.findShadowEl("ic-select", "ic-menu ul")
      .should("have.class", "menu sc-ic-menu menu-scroll")
      .should("be.exist");
  });
});

describe("IcSelect Visual Regression Testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("default");

    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.compareSnapshot("default-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with a default value", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="cappuccino"
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("default-value");

    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.compareSnapshot("default-value-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with a clear button", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="cappuccino"
        showClearButton
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("clear-button");

    cy.get("ic-select").shadow().find("ic-button#clear-button").click();
    cy.compareSnapshot("clear-button-cleared");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with descriptions", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("default");

    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.compareSnapshot("descriptions-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with helper text", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        helperText="Enter your favourite coffee"
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("helper-text");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with custom placeholder", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        placeholder="Placeholder goes here"
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("custom-placeholder");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with custom elements", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeCustomElements}
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("default");

    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.compareSnapshot("custom-elements-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders small", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        size="small"
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("small");

    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.compareSnapshot("small-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders small - deprecated", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        small
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("small");

    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.compareSnapshot("small-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders disabled", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        disabled
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("disabled");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with disabled options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("default");

    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.compareSnapshot("disabled-options-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders full width", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        fullWidth
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("full-width");

    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.compareSnapshot("full-width-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with hidden label", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        hideLabel
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("hidden-label");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders required", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        required
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("required");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders readonly", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        readonly
        value="cappuccino"
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("readonly");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with groups", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("default");

    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.compareSnapshot("groups-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with recommendations", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={recommendedCoffeeOption}
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("default");

    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.compareSnapshot("recommended-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders validation", () => {
    mount(
      <div>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          validationStatus="success"
          validationText="Success message!"
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          validationStatus="warning"
          validationText="Warning message!"
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          validationStatus="error"
          validationText="Error message!"
        />
      </div>
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("validation");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });
});

describe("IcSelect Searchable Visual Regression Testing", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-default");

    cy.get("ic-select")
      .shadow()
      .find("ic-input-component-container")
      .type("ca");
    cy.compareSnapshot("searchable-default-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with a default value", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        value="cappuccino"
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-default-value");

    cy.get("ic-select")
      .shadow()
      .find("ic-input-component-container")
      .type("ca");
    cy.compareSnapshot("searchable-default-value-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with filtering at the start", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        searchable
        searchMatchPosition="start"
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-default");

    cy.get("ic-select")
      .shadow()
      .find("ic-input-component-container")
      .type("ca");
    cy.compareSnapshot("searchable-search-match-position-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with descriptions", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-default");

    cy.get("ic-select")
      .shadow()
      .find("ic-input-component-container")
      .type("ca");
    cy.compareSnapshot("searchable-descriptions-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with descriptions included in filter", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptionsDescriptions}
        searchable
        includeDescriptionsInSearch
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-default");

    cy.get("ic-select")
      .shadow()
      .find("ic-input-component-container")
      .type("coff");
    cy.compareSnapshot("searchable-descriptions-in-filter-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with helper text", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        helperText="Enter your favourite coffee"
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-helper-text");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with custom placeholder", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        placeholder="Placeholder goes here"
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-custom-placeholder");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with custom elements", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeCustomElements}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-default");

    cy.get("ic-select")
      .shadow()
      .find("ic-input-component-container")
      .type("ca");
    cy.compareSnapshot("searchable-custom-elements-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders small", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        size="small"
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-small");

    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.compareSnapshot("searchable-small-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders small - deprecated", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        small
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-small");

    cy.clickOnShadowEl("ic-select", "ic-input-component-container");
    cy.compareSnapshot("searchable-small-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders disabled", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        disabled
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-disabled");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with disabled options", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeDisabledOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-default");

    cy.get("ic-select")
      .shadow()
      .find("ic-input-component-container")
      .type("ca");
    cy.compareSnapshot("searchable-disabled-options-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders full width", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        fullWidth
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-full-width");

    cy.get("ic-select")
      .shadow()
      .find("ic-input-component-container")
      .type("ca");
    cy.compareSnapshot("searchable-full-width-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with hidden label", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        hideLabel
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-hidden-label");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders required", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={coffeeOptions}
        required
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-required");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with groups", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-default");

    cy.get("ic-select")
      .shadow()
      .find("ic-input-component-container")
      .type("ca");
    cy.compareSnapshot("searchable-groups-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with groups included in search", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={groupCoffeeOption}
        searchable
        includeGroupTitlesInSearch
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-default");

    cy.get("ic-select")
      .shadow()
      .find("ic-input-component-container")
      .type("bo");
    cy.compareSnapshot("searchable-groups-in-filter-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders with recommendations", () => {
    mount(
      <IcSelect
        label="What is your favourite coffee?"
        options={recommendedCoffeeOption}
        searchable
      />
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-default");

    cy.get("ic-select")
      .shadow()
      .find("ic-input-component-container")
      .type("ca");
    cy.compareSnapshot("searchable-recommended-open");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });

  it("renders validation", () => {
    mount(
      <div>
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          validationStatus="success"
          validationText="Success message!"
          searchable
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          validationStatus="warning"
          validationText="Warning message!"
          searchable
        />
        <IcSelect
          label="What is your favourite coffee?"
          options={coffeeOptions}
          validationStatus="error"
          validationText="Error message!"
          searchable
        />
      </div>
    );
    cy.checkHydrated("ic-select");
    cy.compareSnapshot("searchable-validation");
    cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
  });
});
