import React, { use, useState } from 'react';
import { useEffect } from 'react';

export default function Expenseform({ addExpense,itemtoedit}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(()=>{
    if(itemtoedit){
      setTitle(itemtoedit.title);
      setAmount(itemtoedit.amount);
    }
    else{
      setTitle("");
      setAmount("");
    }
  },[itemtoedit]);

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) return; 
    addExpense(title, amount,itemtoedit?._id);

    setTitle("");
    setAmount("");
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>Title</label>&nbsp; 
        <input
          type="text"
          placeholder="Enter a title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> <br /><br />

        <label>Expense</label>&nbsp;
        <input
          type="number"
          placeholder="Enter the amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /> <br /><br />

        <button type="submit">{itemtoedit ? "Update expense":"Add expense"}</button>
        
      </form>
    </div>
  );
}
