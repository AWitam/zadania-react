import { addToCartUnsafe, changeQuantityUnsafe, productInCartIndex } from "./helpers";
import { Action, AddToCartAction, CartActions, ChangeQuantityAction, ProductInCart, State } from "./types";

export const addToCart = (state: State, action: AddToCartAction) => {
  const { payload } = action;
  if (productInCartIndex(state, payload.id) >= 0) {
    return changeQuantityUnsafe(state, payload.id, 1);
  }

  return addToCartUnsafe(state, action.payload);
};

export const removeFromCart = (state: State, action: Action) => {
  return {
    ...state,
    productsInCart: state.productsInCart.filter((product: ProductInCart) => product.id !== action.payload),
  };
};

export const changeQuantity = (state: State, action: ChangeQuantityAction) => {
  const {
    payload: { product, changeBy },
  } = action;

  return changeQuantityUnsafe(state, product.id, changeBy);
};

export const cartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case CartActions.ADD_TO_CART:
      return addToCart(state, action);
    case CartActions.CHANGE_QUANTITY:
      return changeQuantity(state, action);
    case CartActions.REMOVE_PRODUCT:
      return removeFromCart(state, action);
    default:
      return state;
  }
};
