import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    let initialValue = budget;

    
    return (
        <div className='alert alert-success'>
            <span>Currency (
                <select name="currency" id="currency" >
                    <option value="volvo" className='alert alert-success'>$ Dollar</option>
                    <option value="saab"className='alert alert-success'>£ Pound</option>
                    <option value="opel"className='alert alert-success'>€ Euro</option>
                    <option value="audi"className='alert alert-success'>₹ Rupee</option>
                </select>)
            </span>
        </div>
    );
};
export default Currency;