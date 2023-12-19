/// <reference types="Cypress" />
import { mount } from "@cypress/react";
import React from "react";
import { IcAlert, IcButton, IcLink } from "../../components";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";



describe("IcAlert", () => {
  
  it("Neutral Alert with Message and Icon", () => {
      mount(<IcAlert heading="Neutral" message="This alert is for displaying miscellaneous messages."/>);
      cy.checkHydrated("ic-alert");
      cy.findShadowEl("ic-alert","svg").should("be.visible");
      cy.get('[heading="Neutral"]').should("be.visible");
      cy.findShadowEl("ic-alert","ic-typography").find("p").should("be.visible").contains("Neutral");
      cy.findShadowEl("ic-alert","ic-typography")
     .contains("This alert is for displaying miscellaneous messages.").should("be.visible");       
 })

  it("Info Alert with Message and Icon", () => {
  mount(<IcAlert variant="info" heading="Info" message="This alert is for displaying information."/>);
  cy.checkHydrated("ic-alert");
  cy.findShadowEl("ic-alert","svg").should("be.visible");
  cy.get('[heading="Info"]').should("be.visible");
  cy.findShadowEl("ic-alert","ic-typography").find("p").should("be.visible").contains("Info");
  cy.findShadowEl("ic-alert","ic-typography")
 .contains("This alert is for displaying information.").should("be.visible");   

})

it("Error Alert with Message and Icon", () => {
  mount(<IcAlert variant="error" heading="Error" message="This alert is for displaying errors."/>);
  cy.checkHydrated("ic-alert");
  cy.findShadowEl("ic-alert","svg").should("be.visible");
  cy.get('[heading="Error"]').should("be.visible");
  cy.findShadowEl("ic-alert","ic-typography").find("p").should("be.visible").contains("Error");
  cy.findShadowEl("ic-alert","ic-typography")
 .contains("This alert is for displaying errors.").should("be.visible");       
})

it("Warning Alert with Message and Icon", () => {
  mount(<IcAlert variant="warning" heading="Warning" message="This alert is for displaying warnings."/>);
  cy.checkHydrated("ic-alert");
  cy.findShadowEl("ic-alert","svg").should("be.visible");
  cy.get('[heading="Warning"]').should("be.visible");
  cy.findShadowEl("ic-alert","ic-typography").find("p").should("be.visible").contains("Warning");
  cy.findShadowEl("ic-alert","ic-typography")
 .contains("This alert is for displaying warnings.").should("be.visible");       
})

it("Success Alert with Message and Icon", () => {
  mount(<IcAlert variant="success" heading="Success" message="This alert is for displaying success messages."/>);
  cy.checkHydrated("ic-alert");
  cy.findShadowEl("ic-alert","svg").should("be.visible");
  cy.get('[heading="Success"]').should("be.visible");
  cy.findShadowEl("ic-alert","ic-typography").find("p").should("be.visible").contains("Success");
  cy.findShadowEl("ic-alert","ic-typography")
 .contains("This alert is for displaying success messages.").should("be.visible");       
})

it("Title displayed with Message and Icon", () => {
  mount(<IcAlert heading="Title displayed above the message" message="This alert has the title at the top of the alert and the message below it." title-above="true"/>);
  cy.checkHydrated("ic-alert");
  cy.findShadowEl("ic-alert","svg").should("be.visible");
  cy.get('[heading="Title displayed above the message"]').should("be.visible");
  cy.findShadowEl("ic-alert","ic-typography").find("p").should("be.visible")
  .contains("Title displayed above the message");
  cy.findShadowEl("ic-alert","ic-typography")
 .contains("This alert has the title at the top of the alert and the message below it.").should("be.visible");       
})

it("Title displayed with Message and Icon", () => {
  mount(<IcAlert heading="Title displayed above the message" message="This alert has the title at the top of the alert and the message below it." title-above="true"/>);
  cy.checkHydrated("ic-alert");
  cy.findShadowEl("ic-alert","svg").should("be.visible");
  cy.get('[heading="Title displayed above the message"]').should("be.visible");
  cy.findShadowEl("ic-alert","ic-typography").find("p").should("be.visible")
  .contains("Title displayed above the message");
  cy.findShadowEl("ic-alert","ic-typography")
 .contains("This alert has the title at the top of the alert and the message below it.").should("be.visible");       
})
it("should close on dismiss icon", () => {
       mount(<IcAlert heading="Dismissible" message="This alert is dismissible."dismissible />
       );
       cy.checkHydrated("ic-alert");
       cy.get("ic-alert").should("exist");
       cy.findShadowEl("ic-alert", "ic-button").should('be.visible').click()
       
})
it("Responsive title with Message and Icon", () => {
    mount(<IcAlert heading="This title is very long so should force the alert to add 'title-above'
    " message="This alert does not have 'title-above' added as a prop but it's forced to add it due to the length of the title."/>);
  
    cy.checkHydrated("ic-alert");
    cy.findShadowEl("ic-alert","svg").should("be.visible");
    cy.findShadowEl("ic-alert","ic-typography").find("p").should("be.visible")
    .contains("This title is very long so should force the alert to add 'title-above")
    .should('be.visible');
    cy.findShadowEl("ic-alert","ic-typography")
   .contains("This alert does not have 'title-above' added as a prop but it's forced to add it due to the length of the title.")
   .should("be.visible");       
  })
  
  it("Title Above with Message and Icon", () => {
    mount(<IcAlert heading="Title displayed above the message" message="This alert has the title at the top of the alert and the message below it." title-above="true"/>);
    cy.checkHydrated("ic-alert");
    cy.findShadowEl("ic-alert","svg").should("be.visible");
    cy.get('[heading="Title displayed above the message"]').should("be.visible");
    
           
  })
  
  it("Custom with Message and Icon", () => {
    mount(<IcAlert heading="This alert uses a custom message slot">
    <span slot="message">This is some text and <IcLink href="/" >this is an inline link</IcLink> within the text.</span>
  </IcAlert>);
    cy.checkHydrated("ic-alert");
    cy.findShadowEl("ic-alert","svg").should("be.visible");
    cy.findShadowEl("ic-alert","ic-typography").find("p")
    .contains("This alert uses a custom message slot").should("be.visible");
    cy.get('ic-link').click(); 
  })
  
  
  it(" With Action Message and Icon", () => {
    mount(<IcAlert heading="With action" message="This alert has an action.">
    <IcButton type="button" slot="action" variant="secondary" appearance="dark">Button</IcButton>
  </IcAlert>
  );
    cy.checkHydrated("ic-alert");
    cy.findShadowEl("ic-alert","svg").should("be.visible");
    cy.findShadowEl("ic-alert","ic-typography").find("p")
    .contains("With action").should("be.visible");
    cy.findShadowEl("ic-alert","ic-typography")
    .contains("This alert has an action.").should("be.visible");
     cy.get('ic-button').should("be.visible").click();  
  })
  
  describe("IcAlert", () => {
    beforeEach(() => {
      cy.injectAxe();
    });
    
    it("Accessblity ", () => {
      cy.checkA11y(undefined, CYPRESS_AXE_OPTIONS);
   
  })
  
  });
    
 });