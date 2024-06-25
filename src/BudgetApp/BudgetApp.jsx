import React from 'react'
import './BudgetApp.css'

const BudgetApp = () => {
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
                    <h2 className='number'>70,670</h2>
                    <h2 className='decimal'>.00</h2>
                </div>
               
            </div>

        </div>
    </div>
  )
}

export default BudgetApp