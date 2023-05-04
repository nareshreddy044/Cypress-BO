import { testdata } from '../../fixtures/testdata.js';
import {constants} from '../Transactions/const.js';
const dayjs = require('dayjs')
 
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
        cy.xpath("(d//button[contains(@class,'btn btn-dark')])[2]").click();
    }
    cashdeposit_search_by_transactiontype_list()
    {
        cy.xpath("(//div[@class='placeholder'])[1]").click();
      
    }
    cashdeposit_search_by_transactiontype_select()
    {
        cy.xpath("//span[text()='Cash Deposit Via ATM-One']").click();
    }
    cashdeposit_search_submit()
    {
        cy.get("button[type='submit']").click();
        
    }
    cashdeposit_search_by_transactiontype_Assertion()
    {
        cy.get(':nth-child(3) > .odd > :nth-child(7)').should("contain","ATM-One");
    }
    cashdeposit_search_by_status_list()
    {
        cy.xpath("//div[text()=' status ']").click();
        
    }
    cashdeposit_search_by_status_select()
    {
        cy.xpath("//span[text()='PENDING']").click();

    }
    cashdeposit_search_by_status_Assertion()
    {
        cy.xpath("(//td[text()=' PENDING '])[1]").should("contain","PENDING")
    }
    cashdeposit_search_refresh()
    {
        cy.xpath("(//button[contains(@class,'btn btn-blue-grey')])[2]").click();
    }
    cashdeposit_search_by_transaction_ID()
    {
    
        cy.get("#transactionId").type(testdata.Cdtrxid);
    }
    cashdeposit_search_by_Transaction_ID_Assertion()
    {
        cy.get("span.slider").should("contain",testdata.Cdtrxid)
    }
    cashdeposit_search_by_client_accountnumber()
    {
        
        cy.get("#walletAccountNumber").type(testdata.Toaccount);
        
    }
    cashdeposit_search_by_client_accountnumber_Assertion()
    {
        cy.get("table#DataTables_Table_2>tbody>tr>td:nth-of-type(5)").should("contain",testdata.Toaccount)
    }
    cashdeposit_search_by_date()
    {
        cy.get("mdb-date-picker[name='startDate1']").click();
        cy.get('.picker__button--today').click();
        //cy.getText("mdb-date-picker[name='startDate1']")
        //const a = new Date()  // current date
        const today = new Date()
        const yesterday = new Date(today.setDate(today.getDate() -1))
        const startDate = yesterday.toISOString()
        cy.log(today,yesterday)
        cy.get("mdb-date-picker[name='endDate1']").click();
        cy.get('.picker__button--today').click();

    }
}

export default cashdeposit;