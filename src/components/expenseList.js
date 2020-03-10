import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectedItem from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense, i)=> <ExpenseListItem key ={i}{...expense}/>)}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectedItem(state.expenses, state.filters)
    }
    }

export default connect(mapStateToProps)(ExpenseList); //Higher Order Component Connected to the Redux Store
    
