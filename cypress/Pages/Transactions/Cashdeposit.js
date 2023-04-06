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
        //var trxid = cashdeposittransactionid(getText)
        console.log(constants.cdtransId);
        cy.get('#transactionId').type(constants.cdtransId);


       //using cookie
        // const trnxid = cy.getCookie('transId');
       // cy.clearCookie('transId');
     //   cy.get('#transactionId').type(trnxid);
        
    }
    // cashdepositsearchstatus()
    // {
    //     cy.get(':nth-child(2) > .form-group > .col-sm-12 > .dama-select-box-forminput').click()
    // }
    // cashdepositsearchstatusselect()
    // {
    //     cy.get(':nth-child(2) > .deselect-option').click()
    // }
    // cashdepositsearchclientaccnumber()
    // {
    //     cy.get("#walletAccountNumber").type("7110045189")
    // }
    // cashdepositsearchremarks()
    // {
    //     cy.get('table#DataTables_Table_2>tbody>tr>td:nth-of-type(17)').should("contain","remarks")
    // }
    // cashdepositsearchinternalremarks()
    // {
    //     cy.get('table#DataTables_Table_2>tbody>tr>td:nth-of-type(18)').should("contain","internalremarks")
    // }
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
    // cashdepositapprovebuttoniframe()
    // {
    //     cy.get(':nth-child(3) > #centralModalSuccess > .modal-dialog > .modal-content > .modal-footer > .btn-dark').click()
    // }
  
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
           // cy.setCookie('transId', transactionid);
            cy.log(constants.cdtransId);
          }))
          
    }
    
}

export default cashdeposit;