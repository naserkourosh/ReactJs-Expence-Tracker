import React from 'react'

export default function AddForm() {
    return (
        <div className="form-container">
            <form>
                    <div className="form-enter">
                    <div className="input-container">
                        <label for="enter-amount">Enter amount</label>
                        <input id="enter-amount" type="number" />
                    </div>
                    <div className="input-container">
                        <label for="note">Note</label>
                        <textarea name="" id="note" cols="30" rows="3"></textarea>
                    </div>
                    <div className="input-container">
                        <label for="date">Date</label>
                        <input id="date" type="date" />
                    </div>
                    <div className="input-container">
                        <label for="category">Category</label>
                        <select name="category" id="category">
                            <option value="income">Income</option>
                            <option value="expence">Expence</option>
                        </select>
                    </div>
                </div>
                <div className="save-transaction">
                    <button type="button" className="cancel-button pointer">cancel</button>
                    <button type="submit" className="Transaction-button pointer">save Transaction</button>
                </div>
            </form>
        </div>
    )
}
