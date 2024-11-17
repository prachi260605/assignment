/* eslint-disable react/prop-types */
// src/components/Board.js
// import React from 'react';
import Column from './Column';
import './Board.css';

const Board = ({ tickets, users, grouping, ordering }) => {
  const getPriorityLabel = (priority) => {
    const labels = {
      4: 'Urgent',
      3: 'High',
      2: 'Medium',
      1: 'Low',
      0: 'No priority'
    };
    return labels[priority];
  };

  const organizeTickets = () => {
    let groups = {};
    
    if (grouping === 'status') {
      groups = {
        'Todo': [],
        'In Progress': [],
        'Done': [],
        'Canceled': []
      };
      tickets.forEach(ticket => {
        if (groups[ticket.status]) {
          groups[ticket.status].push(ticket);
        }
      });
    }
    else if (grouping === 'user') {
      users.forEach(user => {
        groups[user.name] = [];
      });
      tickets.forEach(ticket => {
        const user = users.find(u => u.id === ticket.userId);
        if (user) {
          groups[user.name].push(ticket);
        }
      });
    }
    else if (grouping === 'priority') {
      [0, 1, 2, 3, 4].forEach(priority => {
        groups[getPriorityLabel(priority)] = [];
      });
      tickets.forEach(ticket => {
        groups[getPriorityLabel(ticket.priority)].push(ticket);
      });
    }

    // Sort tickets within each group
    Object.keys(groups).forEach(key => {
      groups[key].sort((a, b) => {
        if (ordering === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return groups;
  };

  const groups = organizeTickets();

  return (
    <div className="board">
      {Object.entries(groups).map(([groupName, tickets]) => (
        <Column 
          key={groupName}
          title={groupName}
          tickets={tickets}
          users={users}
          grouping={grouping}
        />
      ))}
    </div>
  );
};

export default Board;