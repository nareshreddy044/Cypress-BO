import fileexport from "../non transactional/fileexport";
import search from "../non transactional/Searchpages";
class transactiondashboard{
     static transactionsearch(){
        const sr = new search;
        sr.searchbutton()
        sr.programbutton()
        sr.selectprogram()
        sr.productbutton()
        sr.selectproduct()
        sr.selectsubmit()
     }
        static transactiondashboardexportmethod()
        {
            const fe = new fileexport();
            fe.fileexport();
        }
    }
export default transactiondashboard;