import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowBalance() {
    return (
        <>
        <Link to='/' className='backButton'><img src="./arrow.png" alt="" /> back</Link>
        <div className="bg-dark round-corner">
            <div className="d-flex mb-4">
                <div className="col text-wallet">Wallet Balance</div>
                <div className="col date">{new Date().toLocaleString('en-us', { month: 'long' })} {new Date().getDate()} ,{new Date().getFullYear()}</div>
            </div>
            <div className="d-flex">
                <div className="col total">
                    <strong>$0.00</strong> <img src="pencil.png" alt="" />
                </div>
                <div className="col unit">USD</div>
            </div>
        </div>
        </>
    )
}
