import { createStore } from 'redux'

const reducerFn = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return { counter: state.counter + 1 }
    } else if (action.type === 'decrement') {
        return {counter: state.counter - 1 }
    } else if(action.type === 'addby'){
        return {counter: state.counter + action.payload}
    }else {
        return state
    }
}

const store = createStore(reducerFn)
export default store