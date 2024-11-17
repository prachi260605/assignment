/* eslint-disable react/prop-types */
// src/components/Card.js
// import React from 'react';
import './Card.css';

const Card = ({ ticket, user, }) => {

  const priorityLabels = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No Priority'
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {user ? (
          <div className="user-avatar">
            <img src={`src/assets/users/${user.id}.png`}    alt={` ${user.id}`}/>
            <span className={`status-dot ${user.available ? 'available' : 'away'}`} />
          </div>
        ) : (
          <div className="user-avatar">
            <span className="no-user">N/A</span>
          </div>
        )}
      </div>
      <div className="card-title">
        {ticket.title}
      </div>
      <div className="card-tags">
        <span className="priority-tag">
          {/* Replace with an icon if needed */}
          {priorityLabels[ticket.priority]}
        </span>
        {ticket.tag && ticket.tag.map((tag, index) => (
          <span key={index} className="feature-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
