import { CartContextProvider } from "../../ContextAsRedux/Provider";
import { Cart } from "./Cart/Cart";
import { Products } from "./Products/Products";
import "./shop-container.scss";

export const ShopContainer = () => {
  return (
    <CartContextProvider>
      <div className="shop-container">
        <Products />
        <Cart />
      </div>
    </CartContextProvider>
  );
};
