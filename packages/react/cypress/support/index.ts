
/// <reference types="cypress" />

import './component';

import Commands from './commands';

declare global {
    namespace Cypress {
      interface Chainable {
        checkHydrated: typeof Commands.checkHydrated;
        clickOnShadowEl: typeof Commands.clickOnShadowEl;
        checkShadowElVisible: typeof Commands.checkShadowElVisible;
        findShadowEl: typeof Commands.findShadowEl;
        getWhatIsFavCoffeeQueTitle: typeof Commands.getWhatIsFavCoffeeQueTitle,
        clickOnButton :typeof Commands.clickOnButton;
      }
    }
  }

Cypress.Commands.add('checkHydrated', Commands.checkHydrated);
Cypress.Commands.add('clickOnShadowEl', Commands.clickOnShadowEl);
Cypress.Commands.add('checkShadowElVisible', Commands.checkShadowElVisible);
Cypress.Commands.add('findShadowEl', Commands.findShadowEl);
Cypress.Commands.add('getWhatIsFavCoffeeQueTitle', Commands.getWhatIsFavCoffeeQueTitle);
Cypress.Commands.add('clickOnButton',Commands.clickOnButton );