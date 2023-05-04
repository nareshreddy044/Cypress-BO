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
    static cashdepositsearchviatransactiontype()
    {
      const cd = new cashdeposit();
     
      cd.transactionprocessingbutton()
      cd.cashdepositselect()
      cd.cashdepositsearchbutton()
      cd.cashdeposit_search_by_transactiontype_list()
      cd.cashdeposit_search_by_transactiontype_select()
      cd.cashdeposit_search_submit()
      cd.cashdeposit_search_by_transactiontype_Assertion()

    }
    static cashdepositsearchviastatus()
    {
      const cd = new cashdeposit();
      cd.cashdeposit_search_refresh()
      cd.transactionprocessingbutton()
      cd.cashdepositselect()
      cd.cashdepositsearchbutton()
      cd.cashdeposit_search_by_status_list()
      cd.cashdeposit_search_by_status_select()
      cd.cashdeposit_search_submit()
      cd.cashdeposit_search_by_status_Assertion()

    }
    static cashdepositsearchviatransactionID()
    {
      const cd = new cashdeposit();
      cd.cashdeposit_search_refresh()
      cd.transactionprocessingbutton()
      cd.cashdepositselect()
      cd.cashdepositsearchbutton()
      cd.cashdeposit_search_by_transaction_ID()
      cd.cashdeposit_search_submit()
      cd.cashdeposit_search_by_Transaction_ID_Assertion()

    }
    static cashdepositsearchviaclientaccountnumber()
    {
      const cd = new cashdeposit();
      cd.cashdeposit_search_refresh()
      cd.transactionprocessingbutton()
      cd.cashdepositselect()
      cd.cashdepositsearchbutton()
      cd.cashdeposit_search_by_client_accountnumber()
      cd.cashdeposit_search_submit()
      cd.cashdeposit_search_by_client_accountnumber_Assertion()

    }
    static cashdepositsearchviadate()
    {
      const cd = new cashdeposit();
      cd.cashdeposit_search_refresh()
      cd.transactionprocessingbutton()
      cd.cashdepositselect()
      cd.cashdepositsearchbutton()
      cd.cashdeposit_search_by_date()
      cd.cashdeposit_search_submit()
      //cd.cashdeposit_search_by_client_accountnumber_Assertion()

    }


}
export default cashdepositclass;