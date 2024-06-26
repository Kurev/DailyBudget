import React from 'react';
import './Today.css';

const Today = ({ confirmedDetails }) => {
  return (
    <div>
      <div className="today-container">
        <div className="today">
          <p>Today</p>
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
