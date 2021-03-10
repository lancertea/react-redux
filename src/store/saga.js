import { takeEvery, put, all } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_HOME_MULTIDATA } from './constants';
import { changeBannersAction, changeRecommendsAction } from './actionCreator';

function* fetchHomeMultiData(action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata');
  console.log(res);
  const data = res.data.data;
  //put: 在saga中派发action不再是通过dispatch，而是通过put
  //all: 可以在yield的时候put多个action
  yield all([put(changeBannersAction(data.banner.list)), put(changeRecommendsAction(data.recommend.list))]);
}

function* mySaga() {
  //takeLatest: 依次只能监听一个对应的action
  //takeEvery: 可以传入多个监听的actionType, 每一个都会被执行
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultiData);
}

//导出一个生成器函数
export default mySaga;
