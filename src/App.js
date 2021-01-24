import React, { useState } from "react";
import "./App.css";
import { Alert } from "./components/Alert";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { v4 as uuid } from "uuid";

const initialExpenses = [
  {
    id: uuid(),
    charge: "rent",
    amount: 1000,
  },
  {
    id: uuid(),
    charge: "car payment",
    amount: 600,
  },
  {
    id: uuid(),
    charge: "credit card bill",
    amount: 1300,
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert,setAlert]=useState({show:false})
  const [edit,setEdit]=useState(false)
  const [id,setId]=useState(0)
  

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const clearItems = ()=>{setExpenses([]);}

  const handleDelete = (id)=>{setExpenses(expenses.filter(expense => expense.id !== id))}
  
  const handleEdit = (id)=>{
    setId(id)
    setEdit(true)
    const expense=expenses.find(expense => expense.id===id)
    const {charge,amount}= expense
    setCharge(charge)
    setAmount(amount)
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(amount > 0 && charge!==''){

     if(edit){
      const updated=expenses.find(expense => expense.id=id)
      updated.charge=charge
      updated.amount=amount
      setExpenses([...expenses])
      setCharge("")
      setAmount("")
      setEdit(false)
      return
     }
    

      const newExpense = {
        id: uuid(),
        amount,
        charge,
      };
      setExpenses([newExpense, ...expenses]);
      setCharge("");
      setAmount("");
     
      setAlert({show:true,text:"Item added",type:"success"})
    }else{
        setAlert({show:true,text:"Amount should be bigger than 0 and charge can't be empty",type:"danger"})
    }
    setTimeout(()=>{setAlert({show:false})},3000)
  };


  return (
    <>
    {alert.show &&  <Alert type={alert.type} text={alert.text} />}
     
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          charge={charge}
          amount={amount}
          edit={edit}
        />
        <ExpenseList expenses={expenses}  handleDelete={handleDelete} handleEdit={handleEdit} clearItems={clearItems}/>
      </main>
      <h1>
        total spending :
        <span className="total">
          $ {expenses.reduce((acc, curr) => acc + parseInt(curr.amount), 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
