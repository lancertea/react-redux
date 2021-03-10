import {
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
} from './constants.js';
import axios from 'axios';

export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

export const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMENDS,
  recommends,
});

export const getHomeMultiDataAction = () => {
  return (dispatch) => {
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const data = res.data.data;
      dispatch(changeBannersAction(data.banner.list));
      dispatch(changeRecommendsAction(data.recommend.list));
    });
  };
};