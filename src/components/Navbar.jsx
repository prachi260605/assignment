/* eslint-disable react/prop-types */
// src/components/Navbar.js
import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ grouping, ordering, onGroupingChange, onOrderingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <span>Display</span>
        <span className="arrow">{isOpen ? '▼' : '▲'}</span>
      </div>
      
      {isOpen && (
        <div className="dropdown-menu">
          <div className="menu-item">
            <span>Grouping</span>
            <select 
              value={grouping} 
              onChange={(e) => onGroupingChange(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          
          <div className="menu-item">
            <span>Ordering</span>
            <select 
              value={ordering} 
              onChange={(e) => onOrderingChange(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
