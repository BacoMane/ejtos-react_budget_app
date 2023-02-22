import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    let initialValue = budget;

    const chgBudget = () => {
        let x = 100;
        //alert("Type of x "+x.type);
        x = document.getElementById("bdgt").value;
        //alert("You selected: " + x);
        //budget = x;
        if(x>20000){
            alert("The budget value can't exceed 20000");
        }else{
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if(x<totalExpenses){
            alert("Budget can't be under the spending. The current spending is: "+totalExpenses);
            //alert("Budget can't be under the spending; x  type "+x.type+" totalExpenses type "+totalExpenses.type+" "+x+"<"+totalExpenses);
        }else{
            dispatch({
                type: 'CHG_BUDGET',
                payload: x,
            });
        }}

        //alert('chjfggggggg');
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input type="number" 
                    id="bdgt" name="fname"  
                    step="10" min="0" 
                    onChange={(e) => chgBudget(e)}>          
                </input>
            </span>
        </div>
    );
};
export default Budget;



