import cdbulk from "../Transactions/Cashdepositbulk";
class cashdepositbulk{
    static cashdepositbulkmethod(){
        const cdb = new cdbulk();
        cdb.transactionprocessingbutton()
        cdb.cashdepositbulkselect()
        cdb.cashdepositbulkuploadselect()
        //cdb.cashdepositbulkuploadchoosefile()
        cdb.cashdepositbulkuploadfile()
        cdb.cashdepositbulkuploadsubmit()
        cdb.cashdeposit_bulkupload_paymentchannel_list()
        cdb.cashdeposit_bulkupload_paymentchannel_select()
        cdb.cashdeposit_bulkupload_final_submit()
        cdb.cashdeposit_bulkupload_upload_assertion()
        cdb.cashdeposit_bulkupload_upload_status_assertion()

    }
    static cashdepositbulkapprovemethod(){
        const cdb = new cdbulk();
        cdb.transactionprocessingbutton()
        cdb.cashdepositbulkselect()
        cdb.cashdeposit_bulkupload_search()
        cdb.cashdeposit_bulkupload_search_by_filename()
        cdb.cashdeposit_bulkupload_search_submit()
        cdb.cashdeposit_bulkupload_approve()
        cdb.cashdeposit_bulkupload_approved_status_assertion()
        cdb.cashdeposit_bulkupload_approved_transactions_count().then((result) => {
            cdb.cashdeposit_bulkupload_expanded_view_assertion(result);
        });
        
}
static cashdeposit_bulkupload_search(){
    const cdb = new cdbulk();
    cdb.transactionprocessingbutton()
    cdb.cashdepositbulkselect() 
    cdb.cashdeposit_bulkupload_search()
    cdb.cashdeposit_bulkupload_search_via_status()
    cdb.cashdeposit_bulkupload_search_submit()
    cdb.cashdeposit_bulkupload_search_via_status_assertion()

}
static cashdeposit_bulkupload_export(){
    const cdb = new cdbulk();
    cdb.transactionprocessingbutton()
    cdb.cashdepositbulkselect() 
    cdb.cashdeposit_bulkupload_export()
    
    
}
}export default cashdepositbulk;