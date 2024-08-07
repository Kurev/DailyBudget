import React from 'react';
import { format } from 'date-fns';
import './Today.css';

const Today = ({ confirmedDetails }) => {
  

  const sortExpenses = (expenses) => {
    let sorted = {}
    // console.log(expenses)
    expenses.forEach((expense) => {
      // console.log(expense)
      if (sorted[expense.dateCreated] == undefined) {
        sorted[expense.dateCreated] = []
      }
      sorted[expense.dateCreated].push(expense)
    })
    return sorted
  }

  console.log("sorted data")
  console.log(sortExpenses(confirmedDetails))

  return (
    <div>
      <div className="today-container">
        <div className="today">
          <p>Your Expenses</p>
        </div>
        {confirmedDetails.length === 0 ? (
          <div className="no-expenses">No expenses recorded</div>
        ) : (
          confirmedDetails.slice().reverse().map((detail, index) => (
            <div className="expenses" key={index}>
              <div className="expe-cont">
                <p className='input-expenses'> 
                  <span className='center'>
                    <span className='input-emoji'>{detail.tag?.emoji}</span> 
                    <span className='input-tag'>{detail.tag?.label}</span>
                    
                  </span>
                </p>
                <p className='time'>{detail.timeCreated}</p>
                
                <div className="date">
                  <p> {detail.dateCreated}</p>
                </div>
              </div>
              <div className="amount">
                <p>- {detail.amount}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Today;
