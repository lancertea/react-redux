import counterReducer  from './counter';
import homeReducer from './home';

//自己实现
// const initialState = {
// }

// function reducer(state = initialState, action) {
//   return {
//     counterInfo: counterReducer(state.counterInfo, action),
//     homeInfo: homeReducer(state.homeInfo, action),
//   }
// }
//在执行combination函数的过程中，它会通过判断前后返回的数据是否相同来决定返回之前的state还是新的state；
//新的state会触发订阅者发生对应的刷新，而旧的state可以有效的组织订阅者发生刷新；
import { combineReducers } from 'redux';
const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer
})

export default reducer;