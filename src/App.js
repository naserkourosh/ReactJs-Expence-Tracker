
function App() {
  return (

     <div className="wrapper">
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

        <div className="add-transaction">
            <button type="button" className="Transaction-button pointer">
                <img src="plus.png" alt="" /> Add Transaction
            </button>
        </div>

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

        <div className="result-container">
            <div className="daily">Mar 2021</div>
            <div className="result">
                <div className="description">
                    <div className="order">01</div>
                    <div className="divider"></div>
                    <div className="name-description">
                        <span className="category">Income</span>
                        <small className="name">Salary</small>
                    </div>
                </div>
                <div className="saving"><span className="green">+$2,800.00</span></div>
            </div>

        </div>

        <div className="caption-footer">
            Built with React, Emotion and Next. <img src="heart.png" alt="" />
        </div>
    </div>



  );
}

export default App;
