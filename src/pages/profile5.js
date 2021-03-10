import React from 'react';

// import { connect } from '../utils/connect';
import { connect } from 'react-redux';
import { subAction, decAction } from '../store/actionCreator';

function Profile(props) {
  return (
    <div>
      <hr />
      <h1>Profile</h1>
      <div>
        <h2>当前计数: {props.counter}</h2>
        <button onClick={(e) => props.decrement()}>-1</button>
        <button onClick={(e) => props.subCounter(5)}>-5</button>
      </div>
      <h1>Banners</h1>
      <ul>
        {props.banners.map((item) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
      <h1>Recommends</h1>
      <ul>
        {props.recommends.map((item) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    decrement: function () {
      dispatch(decAction());
    },
    subCounter: function (num) {
      dispatch(subAction(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
