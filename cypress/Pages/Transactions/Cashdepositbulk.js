//import constants from "./const";
import {constants} from '../Transactions/const.js';
const p = 'Cash deposit BU_cy_07.xlsx';
//const c = Cypress.env('myGlobalVariable')
class cdbulk{
    
    transactionprocessingbutton()
    {
        cy.xpath("//a[contains(.,'Transaction Processing')]").click()
        
    }
    cashdepositbulkselect()
    {
        cy.xpath("//a[contains(text(),'Cash Deposit Bulk Upload')]").click()
        
    }
    cashdepositbulkuploadselect()
    {
        cy.get("button[title='Upload File']").click()
        
    }
    
    cashdepositbulkuploadfile()
    {
        
        cy.log(p)
        cy.get("input[type='file']").attachFile(p)
    }
    cashdepositbulkuploadsubmit()
    {
        cy.xpath("//button[text()='UPLOAD']").click()
    }
    cashdeposit_bulkupload_paymentchannel_list()
    {
        cy.xpath("//div[text()=' Channel Type ']").click()
        
    }
    cashdeposit_bulkupload_paymentchannel_select()
    {
        cy.xpath("//span[text()='ATM-One']").click()
        
    }
    cashdeposit_bulkupload_final_submit()
    {
        cy.xpath("//button[text()='Confirm']").click()
        
    }
    cashdeposit_bulkupload_upload_assertion()
    {
        cy.xpath("//table[contains(@class,'table dt-table')]/tbody[1]/tr[1]/td[1]").should('contain',p)
        
    }
    cashdeposit_bulkupload_upload_status_assertion()
    {
        cy.xpath("//table[contains(@class,'table dt-table')]/tbody[1]/tr[1]/td[8]").should('contain','Pending Approval')
        
    }
    cashdeposit_bulkupload_search_by_filename()
    {
        cy.get("#fileId").type(p)
        
    }
    cashdeposit_bulkupload_search()
    {
        cy.xpath("(//button[contains(@class,'btn btn-dark')])[2]").click()
        
    }
    cashdeposit_bulkupload_search_submit()
    {
        cy.xpath("(//button[@type='submit'])[1]").click()
        
    }
    cashdeposit_bulkupload_approve()
    {
        cy.get(':nth-child(9) > span > :nth-child(1)').click()
        
    }
    cashdeposit_bulkupload_approved_status_assertion()
    {
        cy.xpath("//table[contains(@class,'table dt-table')]/tbody[1]/tr[1]/td[8]").should('contain','Completed')
        
    }
    cashdeposit_bulkupload_approved_transactions_count()
    {
        cy.wait(2000);
        return cy.xpath("//table[contains(@class,'table dt-table')]/tbody[1]/tr[1]/td[4]/a[1]").then(($text2) => {
            return $text2.text();
        });        
    }

    cashdeposit_bulkupload_expanded_view_assertion(Count)
    {
        cy.wait(2000);
        cy.get('.a-color').click({ force: true });
        const countint=parseInt(Count)
        cy.log('mynewVar', Count) 
        
        for (let i = 1; i <=countint; i++) {
            
            cy.xpath("//table[contains(@class,'table-responsive table-bordered')]/tbody["+i+"]/tr[1]/td[12]").should('contain','Completed')
           
            cy.wait(2000)
         }
    }
    cashdeposit_bulkupload_search_via_status()
    {
        cy.xpath("//div[text()=' Status ']").click()
        cy.xpath("//span[text()='Pending Approval']").click()
    }
    cashdeposit_bulkupload_search_via_status_assertion()
    {
        cy.xpath("(//td[text()='Pending Approval'])[1]").should('contain','Pending Approval')
        
    }
    cashdeposit_bulkupload_export()
    {
        cy.xpath("//button[@title='Upload file']").click()
        
    }

    


}export default cdbulk;