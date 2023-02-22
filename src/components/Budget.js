import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    let initialValue = budget;

    const chgBudget = () => {
        var x = document.getElementById("bdgt").value;
        //alert("You selected: " + x);
        budget = x;
        dispatch({
            type: 'CHG_BUDGET',
            payload: x,
        });
        alert('chjfggggggg');
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input type="number" 
            id="bdgt" name="fname"  step="10" 
            min="0" 
            onChange={(e) => chgBudget(e)}>
                        
            </input>
            </span>
        </div>
    );
};
export default Budget;



