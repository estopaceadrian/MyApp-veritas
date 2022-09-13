import * as actionTypes from './cart-type';

const INITIAL_STATE = {
  products: [], //id,title,
  cart: [],
  currentItem: null,
};
const shopReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.ADJUST_QTY:
      return {};
    default:
      return state;
  }
};
export default shopReducer;
