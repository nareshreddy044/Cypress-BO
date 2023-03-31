//const cypress = require("cypress");
class Login
{
//    baseurl(url)
//    {
//     cy.visit("https://service.damastage.com/#/dplogin")
//    }
    setusername(Username)
    {
        cy.get("#materialFormLoginUserEx").type(Username)
    }
    setupassword(Password)
    {
        cy.get("#materialFormLoginPasswordEx").type(Password)
    }
    loginbutton(loginbutton)
    {
        cy.get("form#login-form>div:nth-of-type(3)>button").click(loginbutton)
    }
    verificationoption(send)
    {
        cy.get("button.btn.btn-primary").click()
    }
    setotp(OTP)
    {
        for (let i = 1; i <=6; i++) {
            //const element = array[i];
            cy.xpath("(//input[@type='text'])["+i+"]").type(1)
        }
        
    }
    verifyotp(verify)
    {
        cy.get("button[type='submit']").click()
    }
    expectname(Expname)
    {
        cy.get('li.nav-item.display-username').click()
    }
    setusername1(Username1)
    {
        cy.get("#materialFormLoginUserEx").type(Username1)
    }
    setupassword1(Password1)
    {
        cy.get("#materialFormLoginPasswordEx").type(Password1)
    }
    
}
export default Login;