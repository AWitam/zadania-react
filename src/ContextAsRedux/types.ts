export enum CartActions {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  CHANGE_QUANTITY = "CHANGE_QUANTITY",
}

export interface Product {
  id: string;
  name: string;
  emoji: string;
  price: number;
}

export interface ProductInCart extends Product {
  quantity: number;
}

export type AddToCartAction = {
  type: CartActions.ADD_TO_CART;
  payload: Product;
};

export type RemoveFromCartAction = {
  type: CartActions.REMOVE_PRODUCT;
  payload: string;
};

export type ChangeQuantityAction = {
  type: CartActions.CHANGE_QUANTITY;
  payload: { product: Product; changeBy: number };
};

export type Action = AddToCartAction | RemoveFromCartAction | ChangeQuantityAction;

export type Dispatch = (action: Action) => void;
export type State = { total: number; productsInCart: ProductInCart[] };
export type CartProviderProps = { children: React.ReactNode };
