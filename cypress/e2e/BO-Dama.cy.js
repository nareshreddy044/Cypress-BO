import loginclass from "../Pages/codeblocks/login"
import usernameassertion from "../Pages/codeblocks/usernameassertion"
import transactiondashboard from "../Pages/codeblocks/transaction dasboard"
import businessclientclass from "../Pages/codeblocks/businessclient"
import A2Atransferclass from "../Pages/codeblocks/A2Atransfer"
import adjustmentclass from "../Pages/codeblocks/Adjustment"
import cashdepositclass from "../Pages/codeblocks/cashdeposit"
import adjustment from "../Pages/Transactions/Adjustment"
describe('dama-BO', () => {
  beforeEach(() => {
    loginclass.loginmethod()
    // if (Cypress.mocha.getRunner().test.parent.title.includes('BO-cashdepositapprove')) {
    //   return;
    // } 
    // loginclass.approverlogin()
  })
  it('BO-login', () => {
      const una=new usernameassertion();
      una.usernameassertion()
      })
  it('BO-transactions dasahboard search', () => {
    transactiondashboard.transactionsearch()
    })
  it('BO-transaction dashboard export', () => {
    transactiondashboard.transactiondashboardexportmethod()
    })
  it('BO-business client search view', () => {
    businessclientclass.businessclientsearch()
    })
  it('BO-A2A transaction', () => {
    A2Atransferclass.A2Atransfermethod()
    })
  it('BO-A2A transaction approve', { skipBeforeEach: true },() => {
    loginclass.approverlogin()
    A2Atransferclass.A2Atransferapprovemethod()
    })
  it('BO-A2A dashbaord export', () => {
    A2Atransferclass.A2Aexportmethod()
    })
  it.only('BO-Credit Adjustment create', () => {
    adjustmentclass.adjustmentmethod()
    })
  it.only('BO-Credit Adjustment approve', () => {
      loginclass.approverlogin()
      adjustmentclass.adjustmentapprovemethod()
    })
  it('BO-cash deposit create', () => {
        cashdepositclass.cashdepositmethod()
    })
  it('BO-cashdepositapprove', () => {
        loginclass.approverlogin()
          cashdepositclass.cashdepositmethodapprove()
    })
  it('BO-cashdepositapprove', () => {
    cy.visit("https://service.damastage.com/#/dplogin")
    cy.intercept('POST', '/api/auth/login').as('login'),
    cy.title().should('eq', 'DamaPay BackOffice'),
    cy.get("#materialFormLoginUserEx").type("Nareshtwo"),
    cy.get("#materialFormLoginPasswordEx").type("P@ssw0rd123"),
    cy.get("#login-form").submit()
    cy.wait("@login")
    cy.wait()
    })
  
})
