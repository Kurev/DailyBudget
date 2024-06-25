import React from 'react';
import './AddExpenses.css';
import { FaCirclePlus } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineAccountBox } from "react-icons/md";

const AddExpenses = ({ onAddIconClick }) => {
  return (
    <div className="addExpe-container">
      <div className="fix-container">
        <div className="info">
          <button className='icon-button'><MdOutlineAccountBox className="icon" /></button>
          <span className='label'>Information</span>
        </div>
        <button className='icon-button add-icon' onClick={onAddIconClick}><FaCirclePlus className="icon add-icon" /></button>
        <div className="update">
          <button className='icon-button'><IoInformationCircleOutline className="icon" /></button>
          <span className='label'>Change Log</span>
        </div>
      </div>
    </div>
  );
};

export default AddExpenses;
