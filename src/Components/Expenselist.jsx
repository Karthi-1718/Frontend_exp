import React from 'react';

export default function Expenselist({ expenselist,delexpense,editexpense }) {
  return (
    <div>
      <h3>Expense List</h3>
      <ul>
        {expenselist.map((item) => (
          <li key={item.id}>
            {item.title} - ₹{item.amount} 
            <button onClick={()=>{delexpense(item._id)}}>delete</button>
            <button onClick={()=>{editexpense(item)}}>Edit</button>
          </li>
        ))}

      </ul>

     
    </div>
  );
}
