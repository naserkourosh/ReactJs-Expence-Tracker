import React from 'react';
import TransactionButton from './TransactionButton';

export default function ResultSection() {
  return (
    <>
    <TransactionButton/>
      <div className="daily">{new Date().getFullYear()}</div>
      <div className="result">
        <div className="description">
          <div className="order">01</div>
          <div className="divider"></div>
          <div className="name-description">
            <span className="category">Income</span>
            <small className="name">Salary</small>
          </div>
        </div>
        <div className="saving">
          <span className="green">+$2,800.00</span>
        </div>
      </div>
    </>
  );
}
