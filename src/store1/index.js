import reducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';

//中间件 redux-thunk
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, enhancer);

export default store;