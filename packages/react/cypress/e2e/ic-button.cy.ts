/// <reference types="cypress" />

describe("test button", () => {
    // beforeEach(() => {
    //     cy.visit("http://localhost:6007/?path=/story/react-components-accordion--default-story")
    // })

    it.only("performance check", () => {
        cy.visit("http://localhost:6007/?path=/story/react-components-button--many-buttons")
        cy.lighthouse();
    })
})


