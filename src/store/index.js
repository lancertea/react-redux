import reducer from './reducer';
//applyMiddlewares: Redux 的原生方法，作用是将所有中间件组成一个数组，依次执行
//applyMiddleware(thunk, promise, logger)  logger就一定要放在最后，否则输出结果会不正确
import { createStore, applyMiddleware, compose } from 'redux';

//中间件 redux-thunk
//thunkMiddleware 改造store.dispatch，使得后者可以接受函数作为参数
import thunkMiddleware from 'redux-thunk';

//中间件 redux-saga
import createSagaMiddleware from 'redux-saga';//导入的是一个函数
import mySaga from './saga';


//没用thunk之前 home-home4
//const store = createStore(reducer);

//应用一些中间件 home5  redux-thunk
//redux-devtools: 对状态进行跟踪和调试
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
//通过applyMiddleware来结合多个Middleware, 返回一个enhancer
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
//将enhancer作为第二个参数传入到createStore中
const store = createStore(reducer, enhancer);

//redux-saga home6
// 1.通过createSagaMiddleware函数来创建saga中间件
// const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

// // 2.通过applyMiddleware来结合多个Middleware, 返回一个enhancer
// const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware));
// // 3.将enhancer作为第二个参数传入到createStore中
// const store = createStore(reducer, enhancer);

// // 4.必须启动saga中间件，并且传入其要监听的generator
// sagaMiddleware.run(mySaga);

export default store;
