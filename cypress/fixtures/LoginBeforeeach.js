import loginclass from "../Pages/codeblocks/login";
class abc{
    static abcmethod(){
beforeEach(() => {
    //     testcaseskip.testcaseskipmethod()
    // })
      switch(Cypress.currentTest.title) {
        //Add test cases title which need to be skippe3d from before each hook
           case 'BO-A2A transaction approve':
            case 'BO-Credit Adjustment approve':
            case 'BO-cashdepositapprove':
              case 'BO-cashdeposit bulkupload approve':
           // this method will execute when above testcases are matched 
           loginclass.approverlogin()
                
           break;
           default:
               // else this method will execute 
            loginclass.loginmethod()
           break;
      }
    })
}
}export default abc;