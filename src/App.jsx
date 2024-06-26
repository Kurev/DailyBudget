import React, { useState, useRef, useEffect } from 'react';
import 'animate.css/animate.min.css'; // Import animate.css
import './App.css';
import BudgetApp from './BudgetApp/BudgetApp';
import Today from './Today/Today';
import AddExpenses from './AddExpenses/AddExpenses';
import AddAnimation from './AddAnimation/AddAnimation';
import AddTag from './AddTag/AddTag';
import Confirm from './Confirm/Confirm';

function App() {
  const [isAddAnimationVisible, setIsAddAnimationVisible] = useState(false);
  const [isAddTagVisible, setIsAddTagVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState('animate__bounceInUp');
  const [tagAnimationClass, setTagAnimationClass] = useState('animate__bounceInUp');
  const [confirmAnimationClass, setConfirmAnimationClass] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);
  const [amount, setAmount] = useState('');
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [confirmedDetails, setConfirmedDetails] = useState([]);
  const addTagRef = useRef(null);

  const handleAddIconClick = () => {
    if (isConfirmVisible) {
      setConfirmAnimationClass('animate__bounceOutDown');
      setTimeout(() => {
        setIsConfirmVisible(false);
        setIsAddAnimationVisible(true);
        setAnimationClass('animate__bounceInUp');
      }, 700); // Match the duration of the bounceOutDown animation
    } else {
      setIsAddAnimationVisible(true);
      setAnimationClass('animate__bounceInUp');
    }
  };

  const handleCancelClick = () => {
    if (isConfirmVisible) {
      setConfirmAnimationClass('animate__bounceOutDown');
      setTimeout(() => {
        setIsConfirmVisible(false);
        setIsAddAnimationVisible(true);
        setAnimationClass('animate__bounceInUp');
      }, 700); // Match the duration of the bounceOutDown animation
    } else {
      setAnimationClass('animate__bounceOutDown');
      setTimeout(() => {
        setIsAddAnimationVisible(false);
      }, 700); // Match the duration of the bounceOutDown animation
    }
  };

  const handleTagButtonClick = () => {
    setIsAddAnimationVisible(false);
    setTagAnimationClass('animate__bounceInUp');
    setIsAddTagVisible(true);
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    setTagAnimationClass('animate__bounceOutDown');
    setTimeout(() => {
      setIsAddTagVisible(false);
      setIsAddAnimationVisible(true);
    }, 700); // Match the duration of the bounceOutDown animation
  };

  const handleNextClick = () => {
    setIsAddAnimationVisible(false);
    setConfirmAnimationClass('animate__bounceInUp');
    setIsConfirmVisible(true);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (addTagRef.current && !addTagRef.current.contains(event.target)) {
      setTagAnimationClass('animate__bounceOutDown');
      setTimeout(() => {
        setIsAddTagVisible(false);
      }, 700); // Match the duration of the bounceOutDown animation
    }
  };

  const handleConfirm = () => {
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const newEntry = {
      amount: parseFloat(amount),
      tag: selectedTag,
      time: currentTime,
    };
    setConfirmedDetails([...confirmedDetails, newEntry]);
    setConfirmAnimationClass('animate__bounceOutDown');
    setTimeout(() => {
      setIsConfirmVisible(false);
    }, 700); // Match the duration of the bounceOutDown animation
  };

  useEffect(() => {
    if (isAddTagVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAddTagVisible]);

  // Calculate total amount spent
  const totalAmountSpent = confirmedDetails.reduce((total, detail) => total + detail.amount, 0);

  return (
    <div className="main-container">
      {!isAddAnimationVisible && !isAddTagVisible && !isConfirmVisible && (
        <>
          <BudgetApp totalAmountSpent={totalAmountSpent} />
          <Today confirmedDetails={confirmedDetails} />
        </>
      )}
      <AddExpenses onAddIconClick={handleAddIconClick} />
      {isAddAnimationVisible && (
        <AddAnimation
          className={`animate__animated ${animationClass}`}
          onCancelClick={handleCancelClick}
          onTagButtonClick={handleTagButtonClick}
          selectedTag={selectedTag}
          amount={amount}
          onAmountChange={handleAmountChange}
          onNextClick={handleNextClick}
        />
      )}
      {isAddTagVisible && (
        <div ref={addTagRef} className={`animate__animated ${tagAnimationClass}`}>
          <AddTag onTagSelect={handleTagSelect} selectedTag={selectedTag} />
        </div>
      )}
      {isConfirmVisible && (
        <div className={`animate__animated ${confirmAnimationClass}`}>
          <Confirm
            amount={amount}
            selectedTag={selectedTag}
            onConfirm={handleConfirm}
            onCancelClick={handleCancelClick} // Ensure the onCancelClick is passed
          />
        </div>
      )}
    </div>
  );
}

export default App;
