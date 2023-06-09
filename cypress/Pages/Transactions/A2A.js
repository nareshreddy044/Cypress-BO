import { A2Aloc } from "../Locators/A2A"
import { Adjustloc } from "../Locators/Adjustment"
import { testdata } from "../../fixtures/testdata.js";


class A2ATransfer
{
    transactionprocessingbutton()
    {
        cy.xpath(Adjustloc.Txn_processing).click()
    }
    A2Atransferbutton()
    {
        cy.xpath(A2Aloc.A2ATransferbtn).click()
    }
    initiateA2A()
    {
        cy.get(A2Aloc.A2Ainitiatebtn).click()
    }
    A2Aclientnameenter()
    {
        cy.get(A2Aloc.A2Aclientname).type(testdata.clientname)
    }
    A2Aclientnameselect()
    {
        cy.get(A2Aloc.A2Aclientnameselect).click()
    }
    A2Afromaccount()
    {
        cy.get(A2Aloc.A2Afromaccount).click()
    }
    A2Afromaccountselect()
    {
        cy.xpath(A2Aloc.A2Afromaccountselect).click()
    }
    A2Atoaccount()
    {
        cy.get(A2Aloc.A2Atoaccount).click()
    }
    A2Atoaccountselect()
    {
        cy.xpath(A2Aloc.A2Atoaccountselect).click()
    }
    A2Aamount(A2Aamount)
    {
        cy.get(A2Aloc.A2Aamount).type(testdata.A2Aamount)
    }
    A2Aremarks()
    {
        cy.get(A2Aloc.A2Aremarks).type(testdata.Remarks)
    }
    A2Ainternalremarks()
    {
        cy.get(A2Aloc.A2Ainternalremarks).type(testdata.InternalRemarks)
    }
    A2Asubmit()
    {
        cy.get(A2Aloc.A2Asubmit).click()
    }
    A2Asearchbutton()
    {
        cy.get(A2Aloc.A2Asearch).click()
    }
    A2Astatustab()
    {
        cy.xpath(A2Aloc.A2Astatus).click()
    }
    A2Astatusselecttab()
    {
        cy.get(A2Aloc.A2Astatusselect).click()
    }
    A2Afromaccountsearchtab()
    {
        cy.get(A2Aloc.A2Afromaccountsearch).type(testdata.Fromaccount)
    }
    A2Atoaccountsearchtab()
    {
        cy.get(A2Aloc.A2Atoaccountsearch).type(testdata.Toaccount)
    }
    A2Asearchsubmitbutton()
    {
        cy.get(A2Aloc.A2Asearchsubmit).click()
    }

    A2Aapprovebutton()
    {
        cy.get(A2Aloc.A2Aapprove).click()
    }
    A2Aexport()
    {
        cy.get(A2Aloc.A2Aexport).click()
    }
}
export default A2ATransfer;