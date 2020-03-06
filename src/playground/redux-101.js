import {createStore} from 'redux';

const add = ({a, b}) => {
    return a + b
}


console.log(add({a:1, b:2}));

 
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
     incrementBy
});

const decrementCount = ({decrementBy = 1} ={}) => ({
    type: 'DECREMENT',
    decrementBy
}) 

const setCount = ({setCountBy = 101} ={}) => ({
    type: 'SET',
    setCountBy
}) 

const resetCount = ({resetCountBy = 0} ={}) => ({
    type: 'RESET',
    resetCountBy
}) 

const reducer = (state= {count: 0,}, action)=> {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }

        case 'SET':
        return {
            count: action.setCountBy
        }

        case 'RESET':
            return {
                count: action.resetCountBy
            }
        default:
            return state
    }
}

const store = createStore(reducer);

const unsubscribe = store.subscribe(()=> {
    console.log(store.getState())
});

console.log(store.getState());
store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 5}));


store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 2}));

store.dispatch(setCount())

store.dispatch(resetCount());




