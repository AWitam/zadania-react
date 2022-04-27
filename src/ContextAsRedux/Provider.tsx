import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { State, CartProviderProps, Dispatch, ProductInCart } from "./types";

const CartContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const initialState = {
  productsInCart: [] as ProductInCart[],
  total: 0,
};

function CartContextProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
}

export { CartContextProvider, useCart };
