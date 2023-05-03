import {constants} from '../Transactions/const.js';
 
class cashdeposit

{

    transactionprocessingbutton()
    {
        cy.xpath("//a[contains(.,'Transaction Processing')]").click()
        
    }
    cashdepositselect()
    {
        cy.xpath("//a[text()='Cash Deposit']").click()
        
    }
    addcashdeposit()
    {
        cy.get('.justify-content-right > :nth-child(2)').click()
        
    }
    cashdepositclientname()
    {
        cy.get('#walletAccountName').type("TVS infra llc")
        
    }
    cashdepositclientnameselect()
    {
        cy.get("li.list-option").click()
        
    }
    cashdepositwallet()
    {
    cy.get(':nth-child(1) > div.col-sm-12 > .dama-select-box-forminput').click()
    }
    cashdepositwalletselect()
    {
    cy.xpath("//span[text()='7110045189']").click()
    }
    cashdepositpaymentchannel()
    {
    cy.get(':nth-child(2) > div.col-sm-12 > .dama-select-box-forminput').click()
    }
    cashdepositpaymentchannelselect()
    {
    cy.xpath("//span[text()='Axiom']").click()
    }
    cashdepositamount()
    {
        cy.get('#amount').type("14.90")
    }
    cashdepositfee()
    {
        cy.get('#fee').click()
    }
    cashdepositremarks()
    {
        cy.get('#remarks').type("remarks")
    }
    cashdepositinternalremarks()
    {
        cy.get('#internalRemarks').type("internalremarks")
    }
    cashdepositsubmit()
    {
        cy.get("button[type='submit']").click()
    }
    cashdepositsearch()
    {
        cy.get('.justify-content-left > .btn').click()
    }
    cashdepositsearchtransactionid()
    {
        
        console.log(constants.cdtransId);
        cy.get('#transactionId').type(constants.cdtransId);

    }
    // 
    cashdepositsearchsubmit()
    {
        cy.get("button[type='submit']").click()
    }
    cashdepositapprovebutton()
    {
        cy.get('.pull-right > .fa').click()
        cy.xpath("//table[@id='DataTables_Table_2']/tbody[1]/tr[1]/td[20]/span[1]/a[1]").click()
        cy.wait(5000)
        
    }
    cashdeposittransactionid()
    {
        cy.wait(4000);
        const getText = () => {
            return cy.get(':nth-child(3) > .odd > [style="cursor: pointer;"] > .slider')
              .then((cashdeposittransactionid) => {
                 return cashdeposittransactionid.text(); 
              });
          }
          getText().then((cashdeposittransactionid => {
            constants.cdtransId = cashdeposittransactionid;
            cy.log(constants.cdtransId);
          }))
          
    }
    cashdepositexport()
    {
        cy.get("button[title='Export data in selected format']").click();
    }
    cashdepositsearchbutton()
    {
        cy.xpath("(//button[contains(@class,'btn btn-dark')])[2]").click();
    }
    cashdeposit_search_by_transactiontype_list()
    {
        cy.xpath("(//div[@class='placeholder'])[1]").click();
    }
    cashdeposit_search_by_transactiontype_select()
    {
        cy.xpath("//span[text()='Cash Deposit Via ATM-One']").click();
    }
    cashdeposit_search_by_transactiontype_select()
    {
        cy.get("button[type='submit']").click();
        cy.wait(2000)
    }
    cashdeposit_search_by_transactiontype_Assertion()
    {
        cy.get("(//td[text()='ATM-One'])[1]").contains("ATM-One");
    }
    
}

export default cashdeposit;