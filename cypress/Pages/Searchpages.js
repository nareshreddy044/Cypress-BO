class search
{
    searchbutton(searchbutton)
    {
        cy.get('.justify-content-left > .btn').click()
    }
    programbutton(programbutton)
    {
        cy.get("mdb-select[placeholder='Select Program']").click()
    }
    productbutton(productbutton)
    {
        cy.get("mdb-select[name='producttyp']").click()
    }
    selectprogram(selectprogram)
    {
        cy.get(':nth-child(4) > .deselect-option').click()
    }
    selectproduct(selectproduct)
    {
        cy.get(':nth-child(1) > .deselect-option').click()
    }
    selectsubmit(selectsubmit)
    {
        cy.get('.ng-invalid.ng-touched > .d-flex > .btn-dark').click()
    
    }
    
}
export default search;