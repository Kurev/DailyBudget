import React from 'react';
import './AddAnimation.css';
import { FaPenClip } from "react-icons/fa6";

const AddAnimation = ({ onCancelClick, className, onTagButtonClick, selectedTag, amount, onAmountChange, onNextClick }) => {

  

  return (
    <div className="background-black">
      <div className={`hover-container ${className}`}>
        <p>Today at Sun Jun 23 2024</p>
        <input
          className='number-input'
          type="number"
          autoFocus
          placeholder="0"
          value={amount}
          onChange={onAmountChange}
        />
        <div className="tag-logo">
          <h1><FaPenClip /></h1>
          <button className={`tag ${selectedTag ? 'selected' : ''}`} onClick={onTagButtonClick}>
            {selectedTag ? `${selectedTag.emoji} ${selectedTag.label}` : 'Select your tag'}
          </button>
        </div>
        <div className="btn-hover">
          <button className='cancel' onClick={onCancelClick}>Cancel</button>
          <button onClick={onNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default AddAnimation;
  