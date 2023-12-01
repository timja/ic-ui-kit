/// <reference types="cypress" />

const compareSnapshotCommand = require("cypress-image-diff-js/dist/command");
compareSnapshotCommand();

declare global {
    namespace Cypress {
      interface Chainable {
        checkHydrated: typeof checkHydrated;
        clickOnShadowEl: typeof clickOnShadowEl;
        checkShadowElVisible: typeof checkShadowElVisible;
        findShadowEl: typeof findShadowEl;
        getWhatIsFavCoffeeQueTitle: typeof getWhatIsFavCoffeeQueTitle,
        clickOnButton :typeof clickOnButton;
        compareSnapshot: typeof compareSnapshotCommand;
        
      }
    }
  }
  
  const checkHydrated = (element: string) => {
    cy.get(`${element}`).should('have.class', 'hydrated')
  }
  
  const clickOnShadowEl = (element: string, selector: string) => {
    cy.get(element).shadow().find(selector).click();
  }
  
  const checkShadowElVisible = (element: string, selector: string): Cypress.Chainable<JQuery<HTMLElement>> => {
    return  cy.get(`${element}`).shadow().find(`${selector}`).should("be.visible")
  };
  
  const findShadowEl = (element: string, selector: string): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy.get(`${element}`).shadow().find(`${selector}`);
  };
  
  const getWhatIsFavCoffeeQueTitle = (element: string) => {
    cy
      .get(`${element}`)
      .shadow()
      .contains("What is your favourite coffee?")
      .should("be.visible")
  };

  const clickOnButton = (element: string) => {
    cy.get(`${element}`).click({force:true})
  };

  const Commands = {
    checkHydrated,
    clickOnShadowEl,
    checkShadowElVisible,
    findShadowEl,
    getWhatIsFavCoffeeQueTitle,
    clickOnButton,
  };
  
  export default Commands;