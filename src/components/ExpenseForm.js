import React from 'react'
import moment from 'moment'
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component{
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false
    };
    onDescriptionChange = (e) => {
        const description=e.target.value;
        this.setState(()=>({description}))
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=> ({note}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=> ({amount}))
        }
    }

    onDateChange = (createdAt) => {
        this.setState(()=> ({createdAt}))
    }
    onFocusChange= ({focused}) => {
        this.setState(()=> ({focused}))
    }


    render() {
        return (
            <div>
                <form>
                    <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <input 
                    autoFocus
                    placeholder="Amount"
                    type="text"
                    onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    />
                    <textarea
                    onChange={this.onNoteChange}
                    placeholder="Add a note for your expense"
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
)
    }
}
