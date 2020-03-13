import React from 'react'
import {connect} from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

const ExpenseListFilter = (props) =>(
    <div>
        <input type="text" defaultValue={props.filters.text} onChange={(e)=> {
            props.dispatch(setTextFilter(e.target.value))
        }} name="" id=""/>
        <select
            // value={props.filters.sortBy} ??
            onChange={(e)=> {
            if(e.target.value==="amount")
            props.dispatch(sortByAmount())
            else if(e.target.value==="date")
            props.dispatch(sortByDate())
        }}>
        <option value="amount">Precio</option>
        <option value="date">Fecha</option>
    </select>
    </div>

)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter)