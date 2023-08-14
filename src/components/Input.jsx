import React, { useState } from 'react';
import './Input.css';

const Input = ({ addItem }) => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    addItem(value);
    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='input-container'>
      <input
        type="text"
        placeholder='✍ Enter your task here...'
        value={value}
        onChange={handleChange}
        onKeyUp={(e) => e.key === 'Enter' && handleClick()}
      />
      <i className="fa-solid fa-plus add-icon" title='Add Item' onClick={handleClick}></i>
    </div>
  );
};

export default Input;
