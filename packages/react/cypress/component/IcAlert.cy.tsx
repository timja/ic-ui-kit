/// <reference types="Cypress" />
import { mount } from "@cypress/react";
import { IcAlert } from "../../src/components";
import React from "react";
import { should } from "chai";



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

it.only("Title displayed with Message and Icon", () => {
  mount(<IcAlert heading="Title displayed above the message" message="This alert has the title at the top of the alert and the message below it." title-above="true"/>);
  cy.checkHydrated("ic-alert");
  cy.findShadowEl("ic-alert","svg").should("be.visible");
  cy.get('[heading="Title displayed above the message"]').should("be.visible");
  cy.findShadowEl("ic-alert","ic-typography").find("p").should("be.visible")
  .contains("Title displayed above the message");
  cy.findShadowEl("ic-alert","ic-typography")
 .contains("This alert has the title at the top of the alert and the message below it.").should("be.visible");       
})

it.only("Title displayed with Message and Icon", () => {
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
  


    
 });