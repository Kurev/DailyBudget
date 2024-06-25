import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import BudgetApp from './BudgetApp/BudgetApp';
import Today from './Today/Today';
import AddExpenses from './AddExpenses/AddExpenses';
import AddAnimation from './AddAnimation/AddAnimation';
import AddTag from './AddTag/AddTag';
import Confirm from './Confirm/Confirm';
import 'animate.css/animate.min.css';

function App() {
  const [isAddAnimationVisible, setIsAddAnimationVisible] = useState(false);
  const [isAddTagVisible, setIsAddTagVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState('animate__bounceInUp');
  const [tagAnimationClass, setTagAnimationClass] = useState('animate__bounceInUp');
  const [confirmAnimationClass, setConfirmAnimationClass] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);
  const [amount, setAmount] = useState('');
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
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
    setAnimationClass('animate__bounceOutDown');
    setTimeout(() => {
      setIsAddAnimationVisible(false);
    }, 700); // Match the duration of the bounceOutDown animation
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

  const handleConfirmCancelClick = () => {
    setConfirmAnimationClass('animate__bounceOutDown');
    setTimeout(() => {
      setIsConfirmVisible(false);
      setIsAddAnimationVisible(true);
      setAnimationClass('animate__bounceInUp');
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

  return (
    <div className="main-container">
      {!isAddAnimationVisible && !isAddTagVisible && !isConfirmVisible && (
        <>
          <BudgetApp />
          <Today />
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
            className={confirmAnimationClass}
            onCancelClick={handleConfirmCancelClick}
          />
        </div>
      )}
    </div>
  );
}

export default App;
