import React, { useState, useRef, useEffect } from 'react';
import 'animate.css/animate.min.css'; // Import animate.css
import './App.css';
import BudgetApp from './BudgetApp/BudgetApp';
import Today from './Today/Today';
import AddExpenses from './AddExpenses/AddExpenses';
import AddAnimation from './AddAnimation/AddAnimation';
import AddTag from './AddTag/AddTag';
import Confirm from './Confirm/Confirm';
import { format } from 'date-fns';


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

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedDetails = localStorage.getItem('confirmedDetails');
    const storedTag = localStorage.getItem('selectedTag');
    const storedAmount = localStorage.getItem('amount');

    if (storedDetails) {
      setConfirmedDetails(JSON.parse(storedDetails));
      console.log('Loaded confirmedDetails:', JSON.parse(storedDetails));
    } else {
      console.log('No confirmedDetails found in localStorage');
    }

    if (storedTag) {
      setSelectedTag(JSON.parse(storedTag));
      console.log('Loaded selectedTag:', JSON.parse(storedTag));
    } else {
      console.log('No selectedTag found in localStorage');
    }

    if (storedAmount) {
      setAmount(storedAmount);
      console.log('Loaded amount:', storedAmount);
    } else {
      console.log('No amount found in localStorage');
    }
  }, []);

  // Save confirmed details to localStorage whenever it changes
  useEffect(() => {
    if (confirmedDetails.length > 0) {
      console.log('Saving confirmedDetails:', confirmedDetails);
      localStorage.setItem('confirmedDetails', JSON.stringify(confirmedDetails));
    }
  }, [confirmedDetails]);

  // Save selected tag to localStorage whenever it changes
  useEffect(() => {
    if (selectedTag !== null) {
      console.log('Saving selectedTag:', selectedTag);
      localStorage.setItem('selectedTag', JSON.stringify(selectedTag));
    }
  }, [selectedTag]);

  // Save amount to localStorage whenever it changes
  useEffect(() => {
    if (amount !== '') {
      console.log('Saving amount:', amount);
      localStorage.setItem('amount', amount);
    }
  }, [amount]);

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
    if (!amount || parseFloat(amount) <= 0) {
      alert('Input your amount!');
      return;
    }

    if (!selectedTag) {
      alert('Input your tag!');
      return;
    }

    if (selectedTag.label === 'Savings') {
      alert('Nice saving money is good 😊');
    } else if (parseFloat(amount) >= 100 && parseFloat(amount) <= 500) {
      alert('Are you rich or something 🙀');
    } else if (parseFloat(amount) >= 500 && parseFloat(amount) <= 1000) {
      alert('Why are you spending so much money 😡');
    }

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
    const today = new Date();
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const currentDate = format(today, 'MMMM d, yyyy');
    const newEntry = {
      amount: parseFloat(amount),
      tag: selectedTag,
      timeCreated: currentTime, 
      dateCreated: currentDate
    };
    setConfirmedDetails([...confirmedDetails, newEntry]);
    setConfirmAnimationClass('animate__bounceOutDown');
    setTimeout(() => {
      setIsConfirmVisible(false);
    }, 700); // Match the duration of the bounceOutDown animation

    // Clear inputs after confirming
    setAmount('');
    setSelectedTag(null);
  };

  console.log('Why are you here go back to your land alien')

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
            onCancelClick={handleCancelClick}
          />
        </div>
      )}
    </div>
  );
}

export default App;
