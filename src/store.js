
import {customerReducer,orderReducer} from './reducers'
import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'; 

  const reducer=combineReducers({
    customer:customerReducer,
    order:orderReducer,

})

export default createStore(reducer,applyMiddleware(thunkMiddleware))