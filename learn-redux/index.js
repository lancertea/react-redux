// 1.全局通常只有一个Store，存储我们的State；
// 2.Component中在某些情况会派发Action（这些Action是我们提前定义好的）；
// 3.Reducer会接收到这些Action，并且在Reducer中会返回一个新的State，作为Store的State；
// 4.State发生更新之后会触发通知，告知订阅者数据发生了改变；
// 5.订阅者拿到最新的数据（在props中），更新到jsx中，界面发生改变；
import store from './store/index.js';
import {
  addAction,
  subAction
} from './store/actionCreator.js';

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(addAction(10));
store.dispatch(addAction(15));
store.dispatch(subAction(8));
store.dispatch(subAction(5));