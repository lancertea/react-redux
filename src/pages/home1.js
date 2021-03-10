//利用connect函数提取公共部分
import React from 'react';

import { connect } from '../utils/connect';
import { addAction, incAction } from '../store/actionCreator';

function Home(props) {
  return (
    <div>
      <hr />
      <h1>Home</h1>
      <div>
        <h2>当前计数: {props.counter}</h2>
        <button onClick={(e) => props.increment()}>+1</button>
        <button onClick={(e) => props.addCounter(5)}>+5</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: function () {
      dispatch(incAction());
    },
    addCounter: function (num) {
      dispatch(addAction(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
