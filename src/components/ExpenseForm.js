import React from 'react'
import moment from 'moment'
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note :'',
            amount: props.expense ? (props.expense.amount).toString():'',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            errorState: ""
        }
    }
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
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=> ({amount}))
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt)
        this.setState(()=> ({createdAt}))
    }
    onFocusChange= ({focused}) => {
        this.setState(()=> ({calendarFocused: focused}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        
        if (!this.state.description || !this.state.amount) {
             this.setState(() => ({errorState: "Please provide an amount and description"}))
        } else {
            this.setState(() => ({errorState: ""}))
            this.props.onSubmit({
                description: this.state.description,
                amount: Number(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }


    render() {
        return (
            <div>
                {this.state.errorState && <p>{this.state.errorState}</p>}
                <form onSubmit={this.onSubmit}>
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
                    value={this.state.amount}
                    />
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day) => false}
                    />
                    <textarea
                    value={this.state.note}
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
