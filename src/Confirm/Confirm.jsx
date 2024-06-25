import React from 'react';
import './Confirm.css';
import { TbShieldLockFilled } from "react-icons/tb";
import { HiArrowNarrowRight } from "react-icons/hi";

const Confirm = ({ amount, selectedTag, className, onCancelClick }) => {
  return (
    <div>
      <div className={`border-confirm ${className}`}>
        <h1 className='confirm'>Confirm</h1>
        <p><TbShieldLockFilled className='shield' /> Help us ensure accuracy by reviewing your expense before confirming because you cannot edit it later.</p>
        <div className='emoji-tagName'>
          <h1>{`₱${amount}`} <span className='arrow'><HiArrowNarrowRight /></span> <span className='tag-emoji'> {selectedTag?.emoji}</span> <span className='tag-label'>{selectedTag?.label}</span></h1>
        </div>
        <div className='confirm-btn'>
          <button onClick={onCancelClick}>Cancel</button>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
