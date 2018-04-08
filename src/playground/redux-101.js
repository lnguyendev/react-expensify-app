import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
            break;
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
            break;
        case 'SET':
            return {
                count: action.count
            };
            break;
        case 'RESET':
            return {
                count: 0
            };
            break;
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// increment
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount())

// reset
store.dispatch(resetCount());

// decrement
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

//set
store.dispatch(setCount({ count: 100 }));
