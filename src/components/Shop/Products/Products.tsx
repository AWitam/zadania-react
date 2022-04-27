import { useCart } from "../../../ContextAsRedux/Provider";
import { CartActions } from "../../../ContextAsRedux/types";
import { productData } from "./productsData";
import "./products.scss";

export const Products = () => {
  const { dispatch } = useCart();

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="products-list">
        {productData.map((product) => (
          <div key={product.id} className="product__item">
            <div className="item-details">
              <span className="emoji">{product.emoji}</span>
              <h3 className="name">{product.name}</h3>
              <span className="price">$ {product.price}</span>
            </div>
            <div>
              <button
                className="fancy-btn--grey"
                onClick={() => dispatch({ type: CartActions.ADD_TO_CART, payload: product })}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
