import { checkForIndexedDb, useIndexedDB } from "./indexedDB";
import { savefromIndexedDB, renderTransaction } from "./API";
import { sendTransaction } from "./domMethod";

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

document.querySelector("#add-btn").onclick = function() {
  sendTransaction(true);
};

document.querySelector("#sub-btn").onclick = function() {
  sendTransaction(false);
};