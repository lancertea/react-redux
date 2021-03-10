import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';

//home2
//import { StoreContext } from './utils/context';

//home3-home7
import { Provider } from 'react-redux';

ReactDOM.render(
  //home、home1
  //<App />,

  //home2
  //2.每个Context对象都会返回一个Provider React组件，它允许消费组件订阅 context 的变化, Provider接收一个 value 属性，传递给消费组件
  // <StoreContext.Provider value={store}>
  //   <App />
  // </StoreContext.Provider>,

  //home3-home7
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
