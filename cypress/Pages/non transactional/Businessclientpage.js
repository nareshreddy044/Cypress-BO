class businessclient  
{
    clientbutton(clientbutton)
    {
        cy.xpath("(//a[@type='button'])[2]").click()
    }
    businessclientbutton(businessclientbutton)
    {
        cy.get('[href="#/home/client-management"]').click()
    }
    clientsearch(clientsearch)
    {
        cy.get('.justify-content-left > .btn').click()
    }
    clientnametype(clientnametype)
    {
        cy.get('#clientName').type("tvs infra llc")
    }
    clientselect(clientselect)
    {
        cy.get('.list-option').click()
    }
    clientsearchsubmit(clientsearchsubmit)
    {
        cy.get('form.ng-valid > .d-flex > .btn-dark').click()
    }
    clientnamelink(clientnamelink)
    {
        cy.xpath("//a[contains(text(),'TVS infra llc')]").click()
    }
    clientnamecheck(clientnamecheck)
    {
        cy.xpath("(//div[@class='col-md-7'])[4]").should("contain","TVS infra llc")
    }
  
}
export default businessclient;