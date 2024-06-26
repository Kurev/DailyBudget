import React from 'react';
import './BudgetApp.css';

const BudgetApp = ({ totalAmountSpent }) => {
  const formattedAmount = totalAmountSpent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const [whole, decimal] = formattedAmount.split('.');

  return (
    <div>
      <div className="budget-container">
        <div className='logo'>
          <h1>Daily Budget</h1>
        </div>
        <div className='budget'>
          <p>Spend this day</p>
          <div className="peso">
            <h2 className='currency'>₱</h2>
            <h2 className='number'>{whole}</h2>
            <h2 className='decimal'>.{decimal}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetApp;
