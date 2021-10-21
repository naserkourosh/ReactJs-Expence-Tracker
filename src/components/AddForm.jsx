import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AddForm() {

    const [amount , setAmount] = useState(0);
    const [text , setText] = useState('');
    const [date , setDate] = useState('');
    const [optionvalue , setOptionValue] = useState('income');

    const postData=(e)=>{
        e.preventDefault();
        axios.post('https://616cc47e37f997001745d717.mockapi.io//notionDiscord' ,{
            amount,text,date,optionvalue
        })
        console.log(amount);
        console.log(text);
        console.log(date);
        console.log(optionvalue);
    }

     return (
        <div className="form-container" onSubmit={postData}>
            <form>
                    <div className="form-enter">
                    <div className="input-container">
                        <label htmlFor="enter-amount">Enter amount</label>
                        <input id="enter-amount" type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="note">Note</label>
                        <textarea name="" id="note" cols="30" rows="3" value={text} onChange={(e)=> setText(e.target.value)}></textarea>
                    </div>
                    <div className="input-container">
                        <label htmlFor="date">Date</label>
                        <input id="date" type="date" value={date} onChange={(e)=> setDate(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" value={optionvalue} onChange={(e)=> setOptionValue(e.target.value)}>
                            <option value="income">Income</option>
                            <option value="expence">Expence</option>
                        </select>
                    </div>
                </div>
                <div className="save-transaction">
                <Link to='/' >
                    <button type="button" className="cancel-button pointer">cancel</button>
                    </Link>
                    <Link to='/result'>
                    <button type="submit" className="Transaction-button pointer">save Transaction</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
