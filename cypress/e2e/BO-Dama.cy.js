import usernameassertion from "../Pages/codeblocks/usernameassertion"
import transactiondashboard from "../Pages/codeblocks/transaction dasboard"
import businessclientclass from "../Pages/codeblocks/businessclient"
import A2Atransferclass from "../Pages/codeblocks/A2Atransfer"
import adjustmentclass from "../Pages/codeblocks/Adjustment"
import cashdepositclass from "../Pages/codeblocks/cashdeposit"
import LoginBeforeeach from "../fixtures/LoginBeforeeach"
import cashdepositbulk from "../Pages/codeblocks/Cashdepositbulk"
describe('dama-BO', () => {
LoginBeforeeach.abcmethod()
//it.only will execute that particular test case, else will execute all 
  it('BO-login', () => { const un=new usernameassertion();un.usernameassertion() })
  it('BO-transactions dasahboard search', () => { transactiondashboard.transactionsearch()})
  it('BO-transaction dashboard export', () => { transactiondashboard.transactiondashboardexportmethod() })
  it('BO-business client search view', () => { businessclientclass.businessclientsearch() })
  it('BO-A2A transaction', () => { A2Atransferclass.A2Atransfermethod() })
  it('BO-A2A transaction approve',() => { A2Atransferclass.A2Atransferapprovemethod() })
  it('BO-A2A dashbaord export', () => { A2Atransferclass.A2Aexportmethod() })
  it('BO-Credit Adjustment create', () => { adjustmentclass.adjustmentmethod() })
  it('BO-Credit Adjustment approve', () => { adjustmentclass.adjustmentapprovemethod() })
  it('BO-cash deposit create', () => { cashdepositclass.cashdepositmethod() })
  it('BO-cashdepositapprove', () => { cashdepositclass.cashdepositmethodapprove()})
  it('BO-cashdepositExport', () => { cashdepositclass.cashdepositmethodexport() })
  it('BO-cashdepositsearch', () => { cashdepositclass.cashdepositsearchviatransactiontype() })
  it('BO-cashdepositsearch', () => { cashdepositclass.cashdepositsearchviastatus() })
  it('BO-cashdepositsearch', () => { cashdepositclass.cashdepositsearchviatransactionID() })
  it('BO-cashdepositsearch', () => { cashdepositclass.cashdepositsearchviaclientaccountnumber() })
  it('BO-cashdepositsearch', () => { cashdepositclass.cashdepositsearchviadate() })
  it('BO-cashdepositbulkupload', () => { cashdepositbulk.cashdepositbulkmethod() })
  it('BO-cashdeposit bulkupload approve', () => { cashdepositbulk.cashdepositbulkapprovemethod() })
  it.only('BO-cashdeposit bulkupload search', () => { cashdepositbulk.cashdeposit_bulkupload_search() })
  it.only('BO-cashdeposit bulkupload export', () => { cashdepositbulk.cashdeposit_bulkupload_export() })
})
