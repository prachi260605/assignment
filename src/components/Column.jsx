/* eslint-disable react/prop-types */
// src/components/Column.js
// import React from 'react';
import Card from './Card';
import './Column.css';

const Column = ({ title, tickets, users, grouping }) => {
  const userid = users.id;
  return (
    <div className="column">
      <div className="column-header">
        
        {grouping === 'status' && <img src={`src/assets/users/${userid}.png`}    alt={` ${userid}`}/> }

      {/* <img src={`src/assets/users/${userid}.png`}    alt={` ${userid}`}/> */}
        <h2>{title}</h2>
        <span className="ticket-count">{tickets.length}</span>
      </div>
      <div className="column-content">
        {tickets.map(ticket => (
          <Card 
            key={ticket.id}
            ticket={ticket}
            user={users.find(u => u.id === ticket.userId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;