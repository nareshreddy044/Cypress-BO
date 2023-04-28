import cashdeposit from "../Transactions/Cashdeposit";
class cashdepositclass
{
    static cashdepositmethod()
    {
      const cd = new cashdeposit();
     
      cd.transactionprocessingbutton()
      cd.cashdepositselect()
      cd.addcashdeposit()
      cd.cashdepositclientname()
      cd.cashdepositclientnameselect()
      cd.cashdepositwallet()
      cd.cashdepositwalletselect()
      cd.cashdepositpaymentchannel()
      cd.cashdepositpaymentchannelselect()
      cd.cashdepositamount()
      cd.cashdepositremarks()
      cd.cashdepositinternalremarks()
      cd.cashdepositsubmit()
      cd.cashdeposittransactionid()
    }
    static cashdepositmethodapprove()
    {
      const cd = new cashdeposit();
     
      cd.transactionprocessingbutton()
      cd.cashdepositselect()
      cd.cashdepositsearch()
      cd.cashdepositsearchtransactionid()
      // cd.cashdepositsearchstatus()
      // cd.cashdepositsearchstatusselect()
      // cd.cashdepositsearchclientaccnumber()
      // cd.cashdepositsearchremarks()
      // cd.cashdepositsearchinternalremarks()
      cd.cashdepositsearchsubmit()
      cd.cashdepositapprovebutton()
      //cd.cashdepositapprovebuttoniframe()
      
    }
    static cashdepositmethodexport()
    {
      const cd = new cashdeposit();
     
      cd.transactionprocessingbutton()
      cd.cashdepositselect()
      cd.cashdepositexport()

    }

}
export default cashdepositclass;