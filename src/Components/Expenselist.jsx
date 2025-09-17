import React from 'react';

export default function Expenselist({ expenselist,delexpense,editexpense }) {
  return (
    <div>
       <div className="ExpenseList">
      <h3>Expense List</h3>
      <ul>
        {expenselist.map((item) => (
         <li key={item.id}>
  <div className="expense-info">
    <div className="expense-title">{item.title}</div>
    <div className={`expense-amount ${item.amount >= 0 ? 'positive' : 'negative'}`}>
      ₹{Math.abs(item.amount)}
    </div>
  </div>
  <div className="expense-actions">
    <button onClick={() => {delexpense(item._id)}}>Delete</button>
    <button onClick={() => {editexpense(item)}}>Edit</button>
  </div>
</li>
        ))}

      </ul>

     
    </div>
    </div>
  );
}
