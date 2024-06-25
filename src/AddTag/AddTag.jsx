import React from 'react';
import './AddTag.css';

const AddTag = ({ onTagSelect, selectedTag }) => {
  const tags = [
    { emoji: '🥪', label: 'Food' },
    { emoji: '🚌', label: 'Transport' },
    { emoji: '📚', label: 'Education' },
    { emoji: '💊', label: 'Health' },
    { emoji: '🏠', label: 'Rent' },
    { emoji: '✈️', label: 'Vacation' },
    { emoji: '👕', label: 'Cloth' },
    { emoji: '📉', label: 'Bills' },
    { emoji: '💸', label: 'Savings' },
    { emoji: '🎮', label: 'Games' },
    { emoji: '💪', label: 'Gym' },
    { emoji: '📺', label: 'Movies' }
    
  ];

  return (
    <div className='tags-emoji'>
      <h3>Expenses</h3>
      <div className="arrange-row">
        {tags.map((tag) => (
          <div
            key={tag.label}
            className={`tag-arrange ${selectedTag?.label === tag.label ? 'selected' : ''}`}
            onClick={() => onTagSelect(tag)}
          >
            <span role="img" aria-label={tag.label}>{tag.emoji}</span>
            <label>{tag.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTag;
