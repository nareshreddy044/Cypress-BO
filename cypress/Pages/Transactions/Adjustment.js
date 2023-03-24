// const loc = require('cypress/Locators/Adjustment.json');
// console.log(loc)
require('@cypress/xpath');
class adjustment
{

    transactionprocessingbutton()
    {
        cy.xpath("//a[contains(.,'Transaction Processing')]").click()
        
    }
    adjustmentselect()
    {
        cy.xpath("//a[contains(text(),'Adjustment')]").click()
        
    }
    addadjustment()
    {
        cy.get('.justify-content-right > :nth-child(2)').click()
       
    }
       
    adjustmentclienttype()
    {
        cy.xpath("(//div[@class='below']//div)[1]").click()
    }
    adjustmentbusinessclient()
    {
        cy.xpath("//span[text()='Business']").click()
    }
    adjustmentclient()
    {
        cy.get('#walletAccountName').type("TVS infra llc")
    }
    adjustmentclientselect()
    {
        cy.get('.list-option').click()
    }
    adjustmentaccountnumber()
    {
        cy.xpath("(//div[@class='below'])[2]").click()
    }
    adjustmentaccountnumberselect()
    {
        cy.xpath("//span[text()='7110045189']").click()
    }
    adjustmentamount()
    {
        cy.get("#amount").type("12")
    }
    adjustmenttype()
    {
        cy.xpath("//div[text()=' Adjustment Type ']").click()
    }
    adjustmenttypeselect()
    {
        cy.xpath("//span[text()='Manual Credit Adjustment']").click()
    }
    adjustmenttransactionalremarks()
    {
        cy.get(':nth-child(2) > :nth-child(3) > div.col-sm-12 > .dama-select-box-forminput').click()
    }
    adjustmenttransactionalremarksselect()
    {
        cy.get(':nth-child(1) > .deselect-option').click()
    }
    adjustmentremarks()
    {
        cy.get('#remarks1').type("remarks")
    }
    adjustmentinternalremarks()
    {
        cy.get('#internalRemarks').type("internalremarks")
    }
    adjustmentsubmit()
    {
        cy.get('[type="submit"]').click()
    }
    adjustmentiframe()
    {
        cy.xpath("//button[text()='okay']").click()
    }
    adjustmentsearch()
    {
        cy.get('.justify-content-left > .btn').click()
    }
    adjustmentsearchstatus()
    {
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .col-sm-12 > .dama-select-box-forminput > .below > .single').click()
    }
    adjustmentsearchstatusselect()
    {
        cy.get(':nth-child(2) > .deselect-option').click()
    }
    adjustmentsearchclientaccnumber()
    {
        cy.get("#walletAccountNumber").type("7110045189")
    }
    adjustmentsearchremarks()
    {
        cy.get(':nth-child(3) > .odd > :nth-child(14)').should("contain","remarks")
    }
    adjustmentsearchinternalremarks()
    {
        cy.get('table#DataTables_Table_2>tbody>tr>td:nth-of-type(15)').should("contain","internalremarks")
    }
    adjustmentsearchsubmit()
    {
        cy.get("button[type='submit']").click()
    }
    adjustmentapprovebutton()
    {
        cy.get(':nth-child(3) > .odd > td.ng-star-inserted > span.ng-star-inserted > :nth-child(1)').click()
    }
    adjustmentapprovebuttoniframe()
    {
    cy.get(':nth-child(3) > #centralModalSuccess > .modal-dialog > .modal-content > .modal-footer > .btn-dark').click()
 }
}

export default adjustment; 