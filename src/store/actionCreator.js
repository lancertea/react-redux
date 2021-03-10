import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
  FETCH_HOME_MULTIDATA,
} from './constants.js';
import axios from 'axios';

export const addAction = (count) => ({
  type: ADD_NUMBER,
  num: count,
});

export const subAction = (count) => ({
  type: SUB_NUMBER,
  num: count,
});

export const incAction = () => ({
  type: INCREMENT,
});

export const decAction = () => ({
  type: DECREMENT,
});

export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

export const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMENDS,
  recommends,
});

//普通的 Action Creator 默认返回一个对象，这里返回一个函数
//普通的 Action Creator 的参数是 Action 的内容, 返回的函数的参数是dispatch和getState这两个 Redux 方法
export const getHomeMultiDataAction = () => {
  return (dispatch) => {
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const data = res.data.data;
      dispatch(changeBannersAction(data.banner.list));
      dispatch(changeRecommendsAction(data.recommend.list));
    });
  };
};

//redux-saga拦截的action
export const fetchHomeMultiDataAction = {
  type: FETCH_HOME_MULTIDATA
};
