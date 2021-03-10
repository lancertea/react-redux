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

//普通action返回一个对象，这里返回一个函数
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
