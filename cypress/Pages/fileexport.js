class fileexport
{
    fileexport(exporttocsv)
    {
        cy.get("button[title='Export data in selected format']").click()
    }
}
export default fileexport;