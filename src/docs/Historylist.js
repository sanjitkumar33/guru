// src/components/HistoryList.js
import React from 'react';

const HistoryList = ({ history, onSelect }) => {
  return (
    <div className="p-4 mt-4 bg-white rounded-lg shadow">
      <h2 className="text-lg mb-4">Request History</h2>
      <ul className="list-group">
        {history.map((item, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => onSelect(item)}
            style={{ cursor: 'pointer' }}
          >
            {item.method} {item.fullUrl}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;
