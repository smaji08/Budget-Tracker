import { populateTotal, populateTable, populateChart } from "./populate";

export let transactions = [];

export function savefromIndexedDB(results){
    fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(results),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
    })
    .then(response => {    
      return response.json();
    });
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
  