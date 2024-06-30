import React from 'react';
import './AddExpenses.css';
import { FaCirclePlus } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineAccountBox } from "react-icons/md";
import { Link } from 'react-router-dom';

const AddExpenses = ({ onAddIconClick }) => {
  return (
    <div className="addExpe-container">
      <div className="fix-container">
        <div className="info">
          <Link to='Information'><button className='icon-button'><MdOutlineAccountBox className="icon" /></button></Link>
          <span className='label'>Information</span>
        </div>
        <button className='icon-button add-icon' onClick={onAddIconClick}><FaCirclePlus className="icon add-icon" /></button>
        <div className="update">
          <Link to='ChangeLog'><button className='icon-button'><IoInformationCircleOutline className="icon" /></button></Link>
          <span className='label'>Change Log</span>
        </div>
      </div>
    </div>
  );
};

export default AddExpenses;
