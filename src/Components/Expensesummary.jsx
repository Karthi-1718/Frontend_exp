import React from 'react';

export default function Expensesummary({ expense }) {
  const income = expense
    .filter((e) => e.amount > 0)
    .reduce((sum, e) => sum + e.amount, 0);

  const totalExpense = expense
    .filter((e) => e.amount < 0)
    .reduce((sum, e) => sum + e.amount, 0);

  const balance = income + totalExpense; 

  return (
    <div>
      <h3>Expense Summary</h3>
      <p>Income: ₹{income}</p>
      <p>Expense: ₹{Math.abs(totalExpense)}</p>
      <p>Balance: ₹{balance}</p>
    </div>
  );
}
