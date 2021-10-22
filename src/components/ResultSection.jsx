import React from 'react';
import TransactionButton from './TransactionButton';

export default function ResultSection({order='01',category='Income', amount=0}) {
  return (
    <>
    <TransactionButton/>
      <div className="daily">{new Date().toLocaleString('en-us', { month: 'short' })} {new Date().getFullYear()}</div>
      <div className="result">
        <div className="description">
          <div className="order">01</div>
          <div className="divider"></div>
          <div className="name-description">
            <span className="category">{category}</span>
            <small className="name">Salary</small>
          </div>
        </div>
        <div className="saving">
        {category==='Income' ?<span className="green">+${amount}</span> : <span className="red">-${amount}</span> }
          
        </div>
      </div>
      <div className="result">
        <div className="description">
          <div className="order">{order='02'}</div>
          <div className="divider"></div>
          <div className="name-description">
            <span className="category">{category="Expence"}</span>
            <small className="name">Salary</small>
          </div>
        </div>
        <div className="saving">
        {category==='Income' ?<span className="green">+${amount}</span> : <span className="red">-${amount}</span> }
          
        </div>
      </div>
    </>
  );
}
