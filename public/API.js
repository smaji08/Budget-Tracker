import { transactions } from "./domMethods";
import { populateTotal, populateTable, populateChart } from "./populate";

export function savefromIndexedDB(arrayOfData){
    fetch("/api/transaction/bulk", {
      method: "POST",
      body: JSON.stringify(arrayOfData),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
    .then(response => {    
      return response.json();
    });
}

export function saveTransaction(transaction){
    fetch("/api/transaction", {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
    .then(response => {    
      return response.json();
    })
}  

export function renderTransaction(){
    fetch("/api/transaction")
      .then(response => {
        return response.json();
      })
      .then(data => {
        
      // save db data on global variable
      transactions = data;
      
      populateTotal();
      populateTable();
      populateChart();
    });
}
  
  