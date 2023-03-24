import Login from "../Loginpage";
import url from "../url";
class loginclass
{
static approverlogin()
{
    cy.viewport(1600, 900)
    cy.visit("https://service.damastage.com/#/dplogin")
    cy.fixture('logindata').then((data)=>{
    const ln=new Login();
    ln.setusername1(data.Username1)
    ln.setupassword1(data.Password1)
    ln.loginbutton();
    ln.verificationoption();
    ln.setotp(data.OTP);
    ln.verifyotp();
  })
}
static loginmethod()
{
cy.viewport(1600, 900)
const baseurl=new url;
baseurl.baseurl()
cy.fixture('logindata').then((data)=>{
  const ln=new Login;
  ln.setusername(data.Username)
  ln.setupassword(data.Password)
  ln.loginbutton();
  ln.verificationoption();
  ln.setotp(data.OTP);
  ln.verifyotp();
})
}
}
export default loginclass;