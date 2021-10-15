import React from 'react'

export default function ShowBalance() {
    return (
        <div className="bg-dark round-corner">
            <div className="d-flex mb-4">
                <div className="col text-wallet">Wallet Balance</div>
                <div className="col date">April 12 ,2021</div>
            </div>
            <div className="d-flex">
                <div className="col total">
                    <strong>$0.00</strong> <img src="pencil.png" alt="" />
                </div>
                <div className="col unit">USD</div>
            </div>
        </div>
    )
}
