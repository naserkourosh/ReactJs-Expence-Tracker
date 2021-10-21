import React from 'react';
import { Link } from 'react-router-dom';

export default function TransactionButton() {
  return (
    <>
      <div className="add-transaction">
      <Link to='/add'>
        <button type="button" className="Transaction-button pointer">
          <img src="plus.png" alt="" /> Add Transaction
        </button>
        </Link>
      </div>
      {window.location.pathname ==='/' ? <p className="text-center">No transactions.</p> :''}
    </>
  );
}
