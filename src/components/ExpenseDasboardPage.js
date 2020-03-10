import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilter from './expenseListFilter'

const ExpenseDashboardPage = () => (
    <div>
    <ExpenseListFilter/>
    <ExpenseList/>
    </div>
)

export default ExpenseDashboardPage;