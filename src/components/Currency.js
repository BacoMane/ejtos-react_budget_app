import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    let initialValue = budget;

    const chgCurrency = () => {
        let x = 100;
        //alert("Type of x "+x.type);
        x = document.getElementById("currency").value;
        //alert("You selected: " + x);
        //budget = x;
        
            dispatch({
                type: 'CHG_CURRENCY',
                payload: x,
            });
        

        //alert('chjfggggggg');
    }

    
    return (
        <div className='alert alert-success'>
            <span>Currency (
                <select name="currency" id="currency" onChange={(e) => chgCurrency(e)}>
                    <option value="$" className='alert alert-success'>$ Dollar</option>
                    <option value="£"className='alert alert-success'>£ Pound</option>
                    <option value="€"className='alert alert-success'>€ Euro</option>
                    <option value="₹"className='alert alert-success'>₹ Rupee</option>
                </select>)
            </span>
        </div>
    );
};
export default Currency;