// const loc = require('cypress/Locators/Adjustment.json');
// console.log(loc)
import {constants} from '../Transactions/const.js';
import { testdata } from "../../fixtures/testdata.js";
import {Adjustloc} from "../Locators/Adjustment.js"

require('@cypress/xpath');
class adjustment
{

    transactionprocessingbutton()
    {
        cy.xpath(Adjustloc.Txn_processing).click()
        
    }
    adjustmentselect()
    {
        cy.xpath(Adjustloc.Txn_selectadj).click()
    }
    addadjustment()
    {
        cy.get(Adjustloc.add_adjust).click()
    }  
    adjustmentclienttype()
    {
        cy.xpath(Adjustloc.client_type).click()
    }
    adjustmentbusinessclient()
    {
        cy.xpath(Adjustloc.business_client).click()
    }
    adjustmentclient()
    {
        cy.get(Adjustloc.client_name).type(testdata.clientname)
    }
    adjustmentclientselect()
    {
        cy.get(Adjustloc.client_select).click()
    }
    adjustmentaccountnumber()
    {
        cy.xpath(Adjustloc.Account_numer).click()
    }
    adjustmentaccountnumberselect()
    {
        cy.xpath(Adjustloc.Account_number_select).click()
    }
    adjustmentamount()
    {
        cy.get(Adjustloc.Txn_amount).type(testdata.TxnAmount)
    }
    adjustmenttype()
    {
        cy.xpath(Adjustloc.Adj_type).click()
    }
    adjustmenttypeselect()
    {
        cy.xpath(Adjustloc.Adj_type_select).click()
    }
    adjustmenttransactionalremarks()
    {
        cy.get(Adjustloc.Txn_Remarks).click()
    }
    adjustmenttransactionalremarksselect()
    {
        cy.get(Adjustloc.Txn_Remarks_select).click()
    }
    adjustmentremarks()
    {
        cy.get(Adjustloc.Remarks).type(testdata.Remarks)
    }
    adjustmentinternalremarks()
    {
        cy.get(Adjustloc.Internal_remarks).type(testdata.InternalRemarks)
    }
    adjustmentsubmit()
    {
        cy.get(Adjustloc.Submit).click()
    }
    adjustmentiframe()
    {
        cy.xpath(Adjustloc.Ifram_select).click()
    }
    adjustmenttransactionid()
    {
        cy.wait(4000);
        const getText = () => {
            return cy.get(Adjustloc.Txn_id_select)
              .then((adjustmenttransactionid) => {
                 return adjustmenttransactionid.text(); 
              });
          }
          getText().then((adjustmenttransactionid => {
            constants.adjtransId = adjustmenttransactionid;
           // cy.setCookie('transId', transactionid);
            cy.log(constants.adjtransId);
          }))
          
    }
    adjustmentsearch()
    {
        cy.get(Adjustloc.search).click()
    }
    adjustmenttransactionidtype()
    {
        //var trxid = cashdeposittransactionid(getText)
        console.log(constants.adjtransId);
        cy.get(Adjustloc.Txn_id_search).type(constants.adjtransId);
    }
    // adjustmentsearchstatus()
    // {
    //     cy.get(':nth-child(2) > :nth-child(2) > .form-group > .col-sm-12 > .dama-select-box-forminput > .below > .single').click()
    // }
    // adjustmentsearchstatusselect()
    // {
    //     cy.get(':nth-child(2) > .deselect-option').click()
    // }
    // adjustmentsearchclientaccnumber()
    // {
    //     cy.get("#walletAccountNumber").type("7110045189")
    // }
    // adjustmentsearchremarks()
    // {
    //     cy.get(':nth-child(3) > .odd > :nth-child(14)').should("contain","remarks")
    // }
    // adjustmentsearchinternalremarks()
    // {
    //     cy.get('table#DataTables_Table_2>tbody>tr>td:nth-of-type(15)').should("contain","internalremarks")
    // }
    adjustmentsearchsubmit()
    {
        cy.get(Adjustloc.Search_submit).click()
    }
    adjustmentapprovebutton()
    {
        
        cy.get('.pull-right > .fa').click()
        //cy.xpath("//table[@id='DataTables_Table_2']/tbody[1]/tr[1]/td[16]/span[1]/a[1]").click()
        
        cy.xpath(Adjustloc.Adj_approve).click()
        cy.wait(1000)
    }
    adjustmentapprovebuttoniframe()
    {
    cy.get(Adjustloc.Approve_iframe).click()
 }
}

export default adjustment; 