import React, { useEffect, useState } from 'react';
import Expenseform from './Expenseform';
import { v4 as uuidv4 } from 'uuid';
import Expenselist from './Expenselist';
import Expensesummary from './Expensesummary';
import axios from 'axios';

const Expenses = [
  { id: uuidv4(), title: "Expense1", amount: 100 },
  { id: uuidv4(), title: "Expense2", amount: 200 },
];

export default function ExpenseTrack() {

  
  const [expense, setExpense] = useState(Expenses);
  const [itemtoedit, setItemtoedit] = useState(null);  // ✅ use null

  useEffect(() => {
    axios.get("http://localhost:3001/api") // adjust port if needed
      .then((res) =>setExpense(res.data)   )
      .catch((err) => {console.error(err)
      });
  }, []);

  
  const addExpense = (title, amount, id) => {
    if (id) {
      axios.put(`http://localhost:3001/api/${id}`, { title, amount: parseFloat(amount) })
      .then((res)=>{
        const updated = expense.map((e)=>
        e._id === id ? res.data : e); 

      setExpense(updated);
      setItemtoedit(null);

      })
      .catch((err)=>console.error(err));
        
    }

     else {
      axios.post("http://localhost:3001/api", { title, amount: parseFloat(amount) })
      .then((res)=>setExpense([...expense, res.data]))
      .catch((err)=>console.error("add error",err));

      // setExpense([
      //   ...expense,
      //   { id: uuidv4(), title, amount: parseFloat(amount) }
      // ]);
    }
  };

 const deleteExpense = (id) => {
    axios.delete(`http://localhost:3001/api/${id}`)
    .then(()=>setExpense(expense.filter((e)=>e.id!==id)))
    .catch((err)=>console.error(err));
  };

  return (
    <div className="ExpenseTrack">
    <div>
      <h2>Expense Tracker</h2>
      <Expenseform addExpense={addExpense} itemtoedit={itemtoedit} />
      <Expensesummary expense={expense} />
      <Expenselist
        expenselist={expense}
        delexpense={deleteExpense}
        editexpense={setItemtoedit}
      />
    </div>
    </div>
  );
}
