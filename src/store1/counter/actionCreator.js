import { ADD_NUMBER, SUB_NUMBER, INCREMENT,
  DECREMENT, } from './constants.js';

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
