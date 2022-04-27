import { State, ProductInCart, Product, Dispatch, CartActions } from "../types";

export const getProductInCart = (state: State, productId: string) => {
  return state.productsInCart.find((productInCart: ProductInCart) => productInCart.id === productId);
};

export const productInCartIndex = (state: State, productId: string) => {
  return state.productsInCart.findIndex((productInCart: ProductInCart) => productInCart.id === productId);
};

export const calculateTotalPrice = (state: State) => {
  return state.productsInCart
    .reduce((total: number, product: ProductInCart) => total + product.price * product.quantity, 0)
    .toFixed(2);
};

export const addToCartUnsafe = (state: State, product: Product) => {
  const newCartProduct = { ...product, quantity: 1 };

  return {
    ...state,
    productsInCart: [...state.productsInCart, newCartProduct],
  };
};

export const changeQuantityUnsafe = (state: State, productId: string, changeBy: number) => {
  const productIndex = productInCartIndex(state, productId);
  if (productIndex >= 0) {
    const updatedProducts = state.productsInCart.map((product: ProductInCart, index: number) => {
      if (index === productIndex) {
        return {
          ...product,
          quantity: product.quantity + changeBy,
        };
      }
      return product;
    });

    return { ...state, productsInCart: updatedProducts };
  }
  return state;
};

export const updateQuantity = (product: Product, changeBy: number) => (state: State, dispatch: Dispatch) => {
  // prevent changing product quantity to negative
  if (getProductInCart(state, product.id)?.quantity === 1 && changeBy < 0) {
    return dispatch({ type: CartActions.REMOVE_PRODUCT, payload: product.id });
  }
  dispatch({ type: CartActions.CHANGE_QUANTITY, payload: { product, changeBy } });
};
