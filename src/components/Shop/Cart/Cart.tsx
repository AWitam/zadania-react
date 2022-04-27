import { calculateTotalPrice, updateQuantity } from "../../../ContextAsRedux/helpers";
import { useCart } from "../../../ContextAsRedux/Provider";
import { CartActions, Product, ProductInCart } from "../../../ContextAsRedux/types";
import "./cart.scss";

export const Cart = () => {
  const { state, dispatch } = useCart();

  const total = calculateTotalPrice(state);

  const handleUpdateQuantity = (product: Product, changeBy: number) => {
    return updateQuantity(product, changeBy)(state, dispatch);
  };

  const handleRemoveProductFromCart = (product: Product) =>
    dispatch({ type: CartActions.REMOVE_PRODUCT, payload: product.id });

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cart-content">
        {state.productsInCart.map((product: ProductInCart) => (
          <div key={product.id} className="cart-item">
            <div className="cart-item-details">
              <h5>{product.name}</h5>
              <span> $ {product.price}</span>
            </div>

            <div>
              <button className="fancy-btn small" onClick={() => handleUpdateQuantity(product, Number(-1))}>
                -
              </button>
              {product.quantity}
              <button className="fancy-btn small" onClick={() => handleUpdateQuantity(product, Number(1))}>
                +
              </button>
              <button className="fancy-btn--danger small" onClick={() => handleRemoveProductFromCart(product)}>
                ✖
              </button>
            </div>
          </div>
        ))}
        <div className="cart-summary">
          <h5>Total: {total}</h5>

          <button className="fancy-btn--cta">Checkout</button>
        </div>
      </div>
    </div>
  );
};
