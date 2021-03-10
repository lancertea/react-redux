import { CHANGE_BANNERS, CHANGE_RECOMMENDS } from './constants.js';

// home相关的状态
const homeInfo = {
  banners: [],
  recommends: []
}

function homeReducer(state = homeInfo, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default homeReducer;
