before(() => {
    cy.yourLoginHook()
})
 
Cypress.Cookies.defaults({
    preserve: 'yourCookie',
})
require('@cypress/xpath');