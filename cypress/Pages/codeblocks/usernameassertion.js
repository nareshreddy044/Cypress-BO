class usernameassertion
{
    usernameassertion(usernameassertion)
    {
        cy.get('li.nav-item.display-username').should('contain','Nareshtwo') 
    }
}
export default usernameassertion;