import React from 'react';
import { format } from 'date-fns';
import './Today.css';

const Today = ({ confirmedDetails }) => {
  const today = new Date();

  // Format the date to "Month Day, Year"
  const formattedDate = format(today, 'MMMM d, yyyy');

  return (
    <div>
      <div className="today-container">
        <div className="today">
          <p>{formattedDate}</p>
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
                <p className='time'>{detail.time}</p>
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
