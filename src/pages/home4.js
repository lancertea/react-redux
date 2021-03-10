//组件中的异步请求
import React, { PureComponent } from 'react';

// import { connect } from '../utils/connect';
import { connect } from 'react-redux';
import axios from 'axios';

import { addAction, incAction, changeBannersAction, changeRecommendsAction } from '../store/actionCreator';

class Home extends PureComponent {
  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const data = res.data.data;
      this.props.changeBanners(data.banner.list);
      this.props.changeRecommends(data.recommend.list);
    });
  }

  render() {
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
    );
  }
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
    changeBanners(banners) {
      dispatch(changeBannersAction(banners));
    },
    changeRecommends(recommends) {
      dispatch(changeRecommendsAction(recommends));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
