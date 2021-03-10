const redux = require('redux');

//初始化数据
//1. 创建一个对象，作为我们要保存的状态
const initialState = {
  counter: 0,
};

//reducer :将旧state 和 actions 联系在一起，并且返回一个新的state
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'ADD_NUMBER':
      return { ...state, counter: state.counter + action.num };
    case 'SUB_NUMBER':
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}

//2. 创建Store来存储这个state
//store(创建的时候需要传入一个reducer)
//可以通过 store.getState 来获取当前的state
const store = redux.createStore(reducer);

//订阅store的修改
store.subscribe(() => {
  console.log('counter:', store.getState());
});

//3. 通过action来修改state
//actions
const action1 = { type: 'INCREMENT' };
const action2 = { type: 'DRECREMENT' };

const action3 = { type: 'ADD_NUMBER', num: 5 };
const action4 = { type: 'SUB_NUMBER', num: 12 };

//派发action
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);
