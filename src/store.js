import { createStore, applyMiddleware, combineReducers ,compose} from 'redux';
import calcReducer from './reducer/calcReducer';
import todoReducer from './reducer/todoReducer';
import {createLogger} from 'redux-logger'
import ReduxThunk from 'redux-thunk'
// import loggerMiddleware from './lib/loggerMiddleware';

// const store = createStore(calcReducer,applyMiddleware(loggerMiddleware));

const logger = createLogger();
// const reducer = combineReducers({calcReducer,todoReducer})


// const todoStore = createStore(todoReducer,applyMiddleware(logger,ReduxThunk))
// const store = createStore(calcReducer,applyMiddleware(logger,ReduxThunk))

const store = createStore(
    combineReducers({
        calcReducer,
        todoReducer
    }),
    compose(
        applyMiddleware(logger,ReduxThunk)
    )
)
// const appReducer = combineReducers({
    // todoStore,
    // store
// })
export default store;
