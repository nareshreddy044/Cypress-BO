class A2ATransfer
{
    transactionprocessingbutton(transactionprocessingbutton)
    {
        cy.xpath("//a[contains(.,'Transaction Processing')]").click()
    }
    A2Atransferbutton(A2Atransferbutton)
    {
        cy.xpath("//a[text()='A2A Transfer']").click()
    }
    initiateA2A(initiateA2A)
    {
        cy.get('.justify-content-right > :nth-child(2)').click()
    }
    A2Aclientnameenter(A2Aclientnameenter)
    {
        cy.get("input[type='search']").type("TVS infra llc")
    }
    A2Aclientnameselect(A2Aclientnameselect)
    {
        cy.get("li.list-option").click()
    }
    A2Aclientnameselect(A2Aclientnameselect)
    {
        cy.get("li.list-option").click()
    }
    A2Afromaccount(A2Afromaccount)
    {
        cy.get('#fromWalletAccountNumber > .below > .single').click()
    }
    A2Afromaccountselect(A2Afromaccountselect)
    {
        cy.xpath("//span[text()='7110045189']").click()
    }
    A2Atoaccount(A2Atoaccount)
    {
        cy.get(':nth-child(2) > .form-group > div.col-sm-12 > .dama-select-box-forminput > .below > .single').click()
    }
    A2Atoaccountselect(A2Atoaccountselect)
    {
        cy.xpath("//span[text()='7110045122']").click()
    }
    A2Aamount(A2Aamount)
    {
        cy.get('#amount').type("12")
    }
    A2Aremarks(A2Aremarks)
    {
        cy.get('#remarks1').type("remarks")
    }
    A2Ainternalremarks(A2Ainternalremarks)
    {
        cy.get('#internalRemarks').type("internalremarks")
    }
    A2Asubmit(A2Asubmit)
    {
        cy.get("button[type='submit']").click()
    }
    A2Asearchbutton(A2Asearch)
    {
        cy.get('.justify-content-left > .btn').click()
    }
    A2Astatustab(A2Astatus)
    {
        cy.xpath("//div[text()=' status ']").click()
    }
    A2Astatusselecttab(A2Astatusselect)
    {
        cy.get(':nth-child(2) > .deselect-option').click()
    }
    A2Afromaccountsearchtab(A2Afromaccountsearch)
    {
        cy.get("#fromWalletAccountNumber").type("7110045189")
    }
    A2Atoaccountsearchtab(A2Atoaccountsearch)
    {
        cy.get('#toWalletAccountNumber').type("7110045122")
    }
    A2Asearchsubmitbutton(A2Asearchsubmit)
    {
        cy.get("button[type='submit']").click()
    }

    A2Aapprovebutton(A2Aapprove)
    {
        cy.get(':nth-child(3) > .odd > td.ng-star-inserted > span.ng-star-inserted > :nth-child(1)').click()
    }
    A2Aexport(A2Aexport)
    {
        cy.get("button[title='Export data in selected format']").click()
    }
}



export default A2ATransfer;