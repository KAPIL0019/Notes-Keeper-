import React from 'react';
import './List.css';

const List = ({ list, deleteItem, deleteAll }) => {
  return (
    <div className='list-container'>
      {list.map((item, index) => (
        <div className="list-item" key={index}>
          <h3> {item}</h3>
          <i className="fa-solid fa-trash-can trash-icon" onClick={() => deleteItem(item)}></i>
        </div>
      ))}
      <div className="delete-all-container">
        <button onClick={deleteAll}>Reset</button>
      </div>
    </div>
  );
};

export default List;
