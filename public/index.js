import { useIndexedDB, checkForIndexedDb } from "./indexedDB";
import { saveTransaction, savefromIndexedDB, renderTransaction } from "./API";

loadPage();

function loadPage(){
  if (checkForIndexedDb()) {
    useIndexedDB("budgetDB","trasactStore", "get").then(results => {
      console.log(results);
      if (results.length > 0){
        savefromIndexedDB(results);
        useIndexedDB("budgetDB","trasactStore", "clear");
      }
    });
    renderTransaction();
  }
}
