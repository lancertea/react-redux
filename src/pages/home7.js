//reducer的拆分
import React, { PureComponent } from 'react';

import { connect } from "react-redux";

import { addAction, incAction } from '../store1/counter/actionCreator';
import { getHomeMultiDataAction } from "../store1/home/actionCreator";
class Home extends PureComponent{

  componentDidMount(){
    this.props.getHomeMultiData();
  }

  render(){
    return (
      <div>
        <hr />
        <h1>Home</h1>
        <div>
          <h2>当前计数: {this.props.counter}</h2>
          <button onClick={(e) => this.props.increment()}>+1</button>
          <button onClick={(e) => this.props.addCounter(5)}>+5</button>
        </div>
      </div>
    )
  }
  
}
const mapStateToProps = (state) => {
  return {
    counter: state.counterInfo.counter,
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
    getHomeMultiData() {
      dispatch(getHomeMultiDataAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
