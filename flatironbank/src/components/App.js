import React, {useState, useEffect} from "react"
import TransactionForm from "./TransactionForm"
import TransactionTable from "./TransactionTable"

function App (){
  const [ transactions, setTransactions ] = useState([])
  const [search, setSearch]= useState("")
  //fetch data when the component mounts
  useEffect(()=>{
  fetch ('http://localhost:8001/transactions')
  .then ((response) => response.json())
  .then((data) =>{ setTransactions(data)})
  } ,[])
  function handleAddTransaction(transaction) {
  const transactionAdded ={...transaction}
  setTransactions([...transactions, transactionAdded])
  }
  function handleSearchChange(event) {setSearch(event.target.value)}
  // filter the array of data based on search input
  const filteredTransactions= transactions.filter((transaction)=>
  transaction.description.toLowerCase().includes(search.toLowerCase()));
  return(
    <div>
      <h1>Simple Transactions</h1>
      <input onChange={handleSearchChange} value={search} type="text" placeholder="Search by description"/>
      
      <TransactionForm  onSubmit={handleAddTransaction} />
      <hr/>
      <TransactionTable transactions= {filteredTransactions}/>
    </div>
  )
}
export default App;